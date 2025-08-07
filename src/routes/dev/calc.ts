const Step = {
    x: (p, i, steps) => {
        let a = (i / p.height) * p.TWO_PI;
        let x =
            p.noise(
                steps * 100,
                (Math.cos(a) * p.height) / 2000.0 + 1000.0,
                (Math.sin(a) * p.height) / 200.0 + 1000.0,
            ) * 100.0;

        return x;
    },
    y: (p, i, steps) => {
        let a = (i / p.width) * p.TWO_PI;
        let y =
            p.noise(
                steps * 100,
                (Math.cos(a) * p.width) / 2000.0 + 1000.0,
                (Math.sin(a) * p.width) / 200.0 + 1000.0,
            ) * 100.0;

        return y;
    },
};

const Update = {
    x: (g, c, x, i, p) => {
        g.image(c, x, i, p.width, 1, 0, i, p.width, 1);
        g.image(c, x - p.width, i, p.width, 1, 0, i, p.width, 1);
    },
    y: (g, c, y, i, p) => {
        g.image(c, i, y, 1, p.height, i, 0, 1, p.height);
        g.image(c, i, y - p.height, 1, p.height, i, 0, 1, p.height);
    },
};

export const Distort = {
    x: (g, c, p, steps) => {
        for (let i = 0; i < p.height; i++) {
            Update.x(g, c, Step.x(p, i, steps), i, p);
        }
        p.image(g, 0, 0);
    },
    y: (g, c, p, steps) => {
        for (let i = 0; i < p.width; i++) {
            Update.y(g, c, Step.y(p, i, steps), i, p);
        }
        p.image(g, 0, 0);
    },
};

function wrapText(p, str, maxWidth, textSize) {
    const words = str.split(" ");
    const lines = [];
    let line = "";

    p.textSize(textSize);

    for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i] + " ";
        if (p.textWidth(testLine) > maxWidth && line !== "") {
            lines.push(line.trim());
            line = words[i] + " ";
        } else {
            line = testLine;
        }
    }
    lines.push(line.trim());
    return lines;
}

const SIZE = {
    bg: 48,
};

export function addText(p, text) {
    text = text.toUpperCase();
    const maxWidth = p.width * 0.9;
    const textLines = wrapText(p, text, maxWidth, SIZE.bg);

    p.push();
    p.drawingContext.shadowOffsetX = 0;
    p.drawingContext.shadowOffsetY = 0;
    p.drawingContext.shadowBlur = 1.5;
    p.drawingContext.shadowColor = "rgba(0, 0, 0, 1)";

    p.textAlign(p.CENTER, p.CENTER);
    p.textFont("serif");
    p.textStyle(p.BOLD);
    p.fill(1);

    let y = p.height / 2 - ((textLines.length - 1) * SIZE.bg) / 2;
    p.textSize(SIZE.bg);
    for (const line of textLines) {
        p.text(line, p.width / 2, y);
        y += SIZE.bg;
    }

    p.pop();
    p.push();
    p.noFill();
    p.stroke(1);
    p.strokeWeight((p.width / 100) | 0);
    p.rect(0, 0, p.width, p.height);
    p.pop();
}
