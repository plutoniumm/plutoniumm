<script lang="ts">
    // nodeploy
    import { Accordion, Link, Meta, Definations, define } from "$cpt";
    import { _, __ } from "$lib";
    // import * as MJS from "mathjs";
    // import M from "$lib/math";
    // const { Map, Rng, Cplx } = M;
</script>

<Meta
    title="Test Slide"
    sub="Recreational Math #00n"
    desc="A test slide for math content"
    date="21 June 2025"
></Meta>

<Definations
    generics={{
        C: ["E"],
        R: ["x", "y"],
    }}
    list={[
        define("c", "speed of light", "c"),
        define("m", "mass or slope, depending on context"),
    ]}
/>

<svg
    viewBox="0 0 200 200"
    width="300"
    height="300"
    xmlns="http://www.w3.org/2000/svg"
>
    <defs>
        <filter id="wave_LOW">
            <feTurbulence
                type="fractalNoise"
                baseFrequency="0.01"
                numOctaves="3"
                seed="8"
                result="noise"
            />
            <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="6"
                xChannelSelector="R"
                yChannelSelector="G"
            />
        </filter>

        <filter id="wave_HIGH">
            <feTurbulence
                type="fractalNoise"
                baseFrequency="0.033"
                numOctaves="3"
                seed="5"
                result="noise"
            />
            <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="6"
                xChannelSelector="R"
                yChannelSelector="G"
            />
        </filter>

        <filter id="grain">
            <feTurbulence
                type="fractalNoise"
                baseFrequency="0.9"
                numOctaves="2"
                seed="3"
                result="fuzz"
            />
            <feColorMatrix
                type="matrix"
                values="
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0 0 0 4 -1"
                result="highContrast"
            />
        </filter>

        <mask id="grainMask">
            <rect
                width="100%"
                height="100%"
                fill="url(#noiseTex)"
                filter="url(#grain)"
            />
            <circle cx="100" cy="100" r="70" fill="#888" />
        </mask>
    </defs>

    <!-- ring with squiggle + grain mask -->
    <g filter="url(#wave_HIGH)">
        <circle
            cx="100"
            cy="100"
            r="70"
            filter="url(#wave_LOW)"
            fill="none"
            stroke="#000"
            stroke-width="2"
            mask="url(#grainMask)"
        />
    </g>
</svg>

{__`
y = mx + c \\
y = ax^2 + bx + c
`}

This is {_`E = mc^2`}.

<block />
