# Hologram version of the hospital photo: the building's outlines as light on black,
# over a dim copy of the photo. The page tints it (cyan on dark, ink on paper).
# Usage: python3 scripts/make-holo-photo.py <photo.jpg> <out.jpg>   (needs opencv-python-headless)
import cv2, numpy as np, sys
img = cv2.imread(sys.argv[1])
g = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY).astype(np.float32) / 255
g = np.clip(cv2.resize(g, None, fx=2, fy=2, interpolation=cv2.INTER_CUBIC), 0, 1)   # finer lines
b = cv2.GaussianBlur(g, (0, 0), 1.2)
gx, gy = cv2.Sobel(b, cv2.CV_32F, 1, 0, ksize=3), cv2.Sobel(b, cv2.CV_32F, 0, 1, ksize=3)
edges = np.sqrt(gx * gx + gy * gy)
edges = np.clip(edges / np.percentile(edges, 99.3), 0, 1)
edges = np.clip((edges - 0.12) / 0.88, 0, 1) ** 0.8   # drop faint compression noise (sky, flat walls)
# sky stays dark: fade the base photo where it is bright and smooth near the top
h = g.shape[0]
fade = np.clip((np.arange(h)[:, None] / h - 0.05) / 0.5, 0.25, 1)
base = (g ** 1.6) * 0.32 * fade
out = np.clip(base + edges * 0.95, 0, 1)
cv2.imwrite(sys.argv[2], (out * 255).astype(np.uint8), [cv2.IMWRITE_JPEG_QUALITY, 90])
