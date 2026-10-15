"""Build public/ from src/.

Usage: npm ci && python3 tools/build.py (uses the pinned local esbuild)

Adapted from the SMART configurator build (smart-modular-buildings-homepage tools/build.py), by way of
the Sutton Garden Buildings v2 designer this one is built on.

- Bundles the configurator page script, and separately its lazily loaded Three.js scene in two
  builds: Three.js r170 (WebGL2) and r162 (the last release with a WebGL1 renderer). The page
  loads one or the other, never both, and only once the 3D is needed.
- Bundles the PDF generator separately: it loads only when a visitor downloads their PDF.
- Writes hashed file names (long-cached), minifies the configurator CSS and inlines it.
- Writes public/_headers from src/_headers with a Content-Security-Policy that allows the
  inline style and script by hash, so no 'unsafe-inline' is needed.
- Fails on unbalanced tags in a source page.

Edit src/, never public/*.html.
"""
import base64
import glob
import hashlib
import os
import subprocess
from html.parser import HTMLParser


class Balance(HTMLParser):
    """Fails the build on unclosed or stray tags in a source page."""
    VOID = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source',
            'track', 'wbr', 'use', 'path', 'circle', 'rect', 'line', 'stop'}

    def __init__(self):
        super().__init__()
        self.stack, self.errors = [], []

    def handle_starttag(self, tag, attrs):
        if tag not in self.VOID:
            self.stack.append((tag, self.getpos()))

    def handle_endtag(self, tag):
        if tag in self.VOID:
            return
        if self.stack and self.stack[-1][0] == tag:
            self.stack.pop()
        else:
            self.errors.append((tag, self.getpos()))


ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'src')
PUB = os.path.join(ROOT, 'public')
ESBUILD = [os.path.join(ROOT, 'node_modules', '.bin', 'esbuild')]
INLINE_JS = "document.documentElement.className += ' js';"
PAGES = {'configurator.html': 'configurator/index.html',
         'configurator-thank-you.html': 'configurator/thank-you/index.html',
         '404.html': '404.html'}


def read(path):
    with open(path, encoding='utf-8') as f:
        return f.read()


def write(path, text):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(text)


def esbuild(source, loader, bundle=False, format='esm', extra=()):
    if not os.path.isfile(ESBUILD[0]):
        raise SystemExit('Local esbuild is missing. Run npm ci before building.')
    args = ESBUILD + ['--minify', f'--loader={loader}', '--charset=ascii', '--target=es2018,chrome79,safari14,firefox78']
    if bundle:
        args += ['--bundle', f'--format={format}', '--external:/assets/*', '--supported:destructuring=true']
    args += list(extra)
    out = subprocess.run(args, input=source, capture_output=True, text=True, cwd=SRC)
    if out.returncode:
        raise SystemExit(out.stderr)
    return out.stdout.strip()


def sha256(text):
    return "'sha256-" + base64.b64encode(hashlib.sha256(text.encode('utf-8')).digest()).decode() + "'"


def write_script(name, source):
    digest = hashlib.sha256(source.encode()).hexdigest()[:10]
    path = f'/assets/js/{name}.{digest}.js'
    write(os.path.join(PUB, path.lstrip('/')), source + '\n')
    for old in glob.glob(os.path.join(PUB, 'assets', 'js', f'{name}.*.js')):
        if os.path.basename(old) != os.path.basename(path):
            os.remove(old)
    return path


# The scene, twice: Three.js r170 and r162 (WebGL1). Kept out of the page bundle.
scene_source = read(os.path.join(SRC, 'configurator-scene.js'))
scene = esbuild(scene_source, 'js', bundle=True)
assert '"170"' in scene, 'the main scene must be built on Three.js r170'
scene_path = write_script('scene', scene)
scene_gl1 = esbuild(scene_source, 'js', bundle=True, extra=['--alias:three=three-webgl1'])
assert '"162"' in scene_gl1 and '"170"' not in scene_gl1, 'the WebGL1 scene must be built on Three.js r162 only'
scene_gl1_path = write_script('scene-gl1', scene_gl1)
pdf = esbuild(read(os.path.join(SRC, 'configurator-pdf.js')), 'js', bundle=True)
pdf_path = write_script('configurator-pdf', pdf)

page = read(os.path.join(SRC, 'configurator.js'))
for placeholder, path in [("/*PDF*/'/assets/js/configurator-pdf.js'", pdf_path),
                          ("/*SCENE*/'/assets/js/scene.js'", scene_path),
                          ("/*SCENE_GL1*/'/assets/js/scene-gl1.js'", scene_gl1_path)]:
    assert page.count(placeholder) == 1, f'{placeholder} missing from src/configurator.js'
    page = page.replace(placeholder, repr(path))
configurator_js = esbuild(page, 'js', bundle=True)
# Three.js must stay out of the page bundle: the scene loads only when the 3D is needed.
assert 'WebGLRenderer' not in configurator_js, 'Three.js leaked into the page bundle'
configurator_js_path = write_script('configurator', configurator_js)

css = esbuild(read(os.path.join(SRC, 'configurator.css')), 'css').replace('url(assets/', 'url(/assets/')

for src_name, out_name in PAGES.items():
    html = read(os.path.join(SRC, src_name))
    checker = Balance()
    checker.feed(html)
    if checker.errors or checker.stack:
        raise SystemExit(f'{src_name}: unbalanced tags, stray {checker.errors[:3]} open {checker.stack[:3]}')
    stylesheet = '<link rel="stylesheet" href="/configurator.css">'
    assert html.count(stylesheet) == 1, src_name
    html = html.replace(stylesheet, '<style>' + css + '</style>')
    script = '<script src="/configurator.js" type="module"></script>'
    if src_name == 'configurator.html':
        assert html.count(script) == 1, src_name
        html = html.replace(script, f'<script src="{configurator_js_path}" type="module"></script>')
    assert '{{' not in html, f'unexpanded placeholder in {src_name}'
    assert f'<script>{INLINE_JS}</script>' in html, f'inline script changed in {src_name}; update INLINE_JS'
    write(os.path.join(PUB, out_name), html)

csp = '; '.join([
    "default-src 'self'",
    "script-src 'self' " + sha256(INLINE_JS),
    "style-src 'self' " + sha256(css),
    "img-src 'self' data: blob:",
    "font-src 'self'",
    "connect-src 'self'",
    "form-action 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "frame-ancestors 'self' https://coastalgardenbuildings.co.uk https://www.coastalgardenbuildings.co.uk",
    'upgrade-insecure-requests',
])
write(os.path.join(PUB, '_headers'), read(os.path.join(SRC, '_headers')).replace('{{CSP}}', csp))
# robots.txt (a preview, so nothing is indexed). Coastal's logo, the page fonts and the icons are
# written by tools/build-pdf-assets.py.
write(os.path.join(PUB, 'robots.txt'), 'User-agent: *\nDisallow: /\n')
print(f'built {", ".join(PAGES.values())}; configurator {len(configurator_js):,} bytes; '
      f'lazy scene {len(scene):,} / gl1 {len(scene_gl1):,} bytes; pdf {len(pdf):,} bytes; inline CSS {len(css):,} bytes')
