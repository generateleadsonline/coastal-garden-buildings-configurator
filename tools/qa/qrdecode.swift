// Prints the payload of every QR code in an image (Apple Vision). swift tools/qa/qrdecode.swift <image>
import Vision
import AppKit
let url = URL(fileURLWithPath: CommandLine.arguments[1])
guard let img = NSImage(contentsOf: url), let cg = img.cgImage(forProposedRect: nil, context: nil, hints: nil) else { print("no image"); exit(1) }
let req = VNDetectBarcodesRequest()
try VNImageRequestHandler(cgImage: cg, options: [:]).perform([req])
for r in req.results ?? [] { print(r.payloadStringValue ?? "(no payload)") }
