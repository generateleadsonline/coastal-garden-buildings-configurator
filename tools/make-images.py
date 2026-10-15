"""Writes the poster stills, system thumbnails, social image and favicon from 3D renders.

python3 tools/make-images.py <renders-dir>

<renders-dir> holds 00.png, 01.png and 02.png: the Log Cabin, Prima and Pro at their starting
designs, rendered at 1600 x 1000 by tools/qa/render.mjs (W=1600 H=1000, tier=high). The posters
show until the live 3D is running, so they are the same scene from the same camera.
"""
import sys
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
IMG = ROOT / 'public' / 'assets' / 'img'
IMG.mkdir(parents=True, exist_ok=True)
src = Path(sys.argv[1])
for i, r in enumerate(['log', 'prima', 'pro']):
    im = Image.open(src / f'{i:02d}.png').convert('RGB')
    im.save(src / f'{i:02d}.jpg', quality=84)  # for tools/make-guide.mjs
    for w in (1200, 800):
        im.resize((w, round(im.height * w / im.width)), Image.Resampling.LANCZOS).save(IMG / f'poster-{r}-{w}.webp', quality=78, method=6)
    # Thumbnail: the building, cropped from the middle of the still.
    W, H = im.size
    box = (int(W * .19), int(H * .22), int(W * .83), int(H * .22 + W * .64 * 2 / 3))
    im.crop(box).resize((240, 160), Image.Resampling.LANCZOS).save(IMG / f'range-{r}-240.webp', quality=80, method=6)
    if r == 'log':
        og = im.crop((0, int(H * .12), W, int(H * .12) + int(W * 630 / 1200))).resize((1200, 630), Image.Resampling.LANCZOS)
        og.save(IMG / 'og.jpg', quality=82)
# The favicon and touch icon come from Coastal's logo: tools/build-pdf-assets.py.
print(sorted(p.name for p in IMG.iterdir()))
