<div id="background-wrap">
    <div class="bubble fade x1" />
    <div class="bubble fade x2" />
</div>

<style>
    @keyframes animateBubble {
        0% {
            margin-top: -100%;
        }
        100% {
            margin-top: 100%;
        }
    }

    @keyframes sideWays {
        0% {
            margin-left: 105vw;
        }
        100% {
            margin-left: 5vw;
        }
    }

    /* ANIMATIONS */

    .x1 {
        animation: animateBubble 29s linear infinite,
            sideWays 19s ease-in-out infinite alternate;

        left: -5%;
        top: 5%;
        transform: scale(3.5);
    }

    .x2 {
        animation: animateBubble 23s linear infinite,
            sideWays 17s ease-in-out infinite alternate;
        animation-delay: 5s;

        left: 5%;
        top: 10%;
        transform: scale(2);
    }

    /* OBJECTS */

    .bubble {
        border-radius: 50%;
        height: 200px;
        position: absolute;
        width: 200px;
    }

    .bubble:after {
        opacity: 0.33;
        background: var(--theme-hl); /* W3C */
        border-radius: 50%;
        content: "";
        height: 200px;
        left: 10px;
        position: absolute;
        width: 200px;
    }
</style>
