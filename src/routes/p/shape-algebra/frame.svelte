<script>
    import { complex, parse } from "mathjs";

    let ctx,
        video,
        canvasEl,
        offscreen,
        equation = "z^2 + 2",
        started,
        expr;

    let parseError = false;
    let message = "Start";

    function resizeCanvas() {
        const [iw, ih] = [video.videoWidth, video.videoHeight];
        canvasEl.width = Math.max(640, iw);
        canvasEl.height = Math.max(480, ih);
        if (offscreen) {
            offscreen.width = canvasEl.width;
            offscreen.height = canvasEl.height;
        }
    }

    function draw() {
        let scale = 66;
        const w = offscreen.width,
            h = offscreen.height;

        const octx = offscreen.getContext("2d");
        octx.drawImage(video, 0, 0, w, h);
        const frame = octx.getImageData(0, 0, w, h);
        const output = octx.createImageData(w, h);
        const { data, out } = { data: frame.data, out: output.data };
        const cx = w / 2,
            cy = h / 2;

        scale = 1 / scale;
        for (let y = 0; y < h; y++)
            for (let x = 0; x < w; x++) {
                const zx = (x - cx) * scale,
                    zy = (y - cy) * scale;
                const zMapped = expr.evaluate({ z: complex(zx, zy) });
                const nx = Math.round(zMapped.re / scale + cx),
                    ny = Math.round(zMapped.im / scale + cy);
                if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
                    const i = 4 * (y * w + x),
                        ni = 4 * (ny * w + nx);
                    out[i] = data[ni];
                    out[i + 1] = data[ni + 1];
                    out[i + 2] = data[ni + 2];
                    out[i + 3] = data[ni + 3];
                }
            }

        octx.putImageData(output, 0, 0);
        ctx.drawImage(offscreen, 0, 0);
        requestAnimationFrame(draw);
    }

    function run() {
        if (started) return;
        started = true;
        ctx = canvasEl.getContext("2d");
        offscreen = new OffscreenCanvas(640, 480);
        navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
            message = "Start";
            video.srcObject = stream;
            video.onloadedmetadata = () => {
                resizeCanvas();
                requestAnimationFrame(draw);
            };
        });
    }

    function handleSubmit(e) {
        try {
            expr = parse(equation);
            parseError = false;
            message = "Running...";
            run();
        } catch {
            parseError = true;
            message = "Invalid equation. Try again.";
        }
    }
</script>

<form
    class="form p5 rx5 f"
    on:submit|preventDefault={handleSubmit}
    class:danger={parseError}
>
    <span>z &rarr;&nbsp;</span>
    <input
        bind:value={equation}
        style="font:inherit;border-right:1px solid #0008;"
    />
    <button type="submit" style="font:inherit;">{message}</button>
</form>

<canvas class="d-b rx10 w-100" bind:this={canvasEl}></canvas>
<video class="d-n" bind:this={video} autoplay playsinline></video>

<style>
    .form {
        background: #fff;
        font: 300 1em monospace;
        margin: 10px 0;
    }
    canvas {
        background: #888;
        aspect-ratio: 16/9;
    }
    .danger {
        background: #f88;
    }
</style>
