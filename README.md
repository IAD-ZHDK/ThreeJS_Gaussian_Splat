# Simple Three.js Gaussian Splats Viewer

Very small Three.js app that loads `.ply`, `.splat`, or `.ksplat` scenes using `@mkkellogg/gaussian-splats-3d`.

## Run

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start dev server:

   ```bash
   npm run dev
   ```

3. Open the shown local URL in your browser.

## Use

- Option A: click **Load Scene** and pick a local `.ply`, `.splat`, or `.ksplat` file.
- Option B: place a file in `data/` (for example `data/sample.ksplat`), keep URL as `/data/sample.ksplat`, and click **Load URL**.
- On startup, the app automatically tries to load the URL value (default: `/data/sample.ksplat`).
- Orbit: left mouse drag
- Pan: right mouse drag (or two-finger drag on trackpad)
- Zoom: mouse wheel / pinch
- Click **Reset View** to frame the loaded splats.
- Use the **Viewer** GUI to toggle **Dynamic Scene** mode.
- Loaded scenes use native `sceneRevealMode` gradual animate-in.

## Notes

- Rendering and navigation are handled by `GaussianSplats3D.Viewer`.
- For local files, the app uses a temporary blob URL and infers format from file extension.
- Convert/export scenes to `.ksplat` using the project demo/conversion page: https://projects.markkellogg.org/threejs/demo_gaussian_splats_3d.php
- For stability on large scenes, this project uses safer sort settings (`enableSIMDInSort: false`, `integerBasedSort: false`, and lower sort precision).
- If dynamic mode triggers a `memory access out of bounds` sort error, the app automatically falls back to non-dynamic mode.

## Attribution

- Demo sample data attribution (Creative Commons): Voxel51 Gaussian Splatting dataset on Hugging Face: https://huggingface.co/datasets/Voxel51/gaussian_splatting
- Please follow the dataset card's license and attribution requirements for any redistribution or public use.
