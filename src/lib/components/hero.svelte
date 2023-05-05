<script>
    const badge = (name, rest) =>
        `//img.shields.io/badge/-${name}?style=flat-square&logo=${rest}`;
</script>

<div class="p-rel">
    <img
        class="left p10"
        width="125px"
        height="125px"
        src="/assets/pic.png"
        alt=""
    />
    <div id="wave" class="p-abs">
        <span class="d-ib" style="transform: rotate(-30deg);"> ✋🏽 </span>
    </div>
</div>
<div class="right fade" style="padding: 20px 20px 0 20px;">
    <div class="title fw5">Manav Seksaria</div>
    <br />
    <div class="tags">
        <img
            src={badge(
                "JavaScript-FD2",
                "javascript&logoColor=000&labelColor=%000"
            )}
            class="rx5"
            alt=""
        />
        <img
            src={badge("Kali-589", "kalilinux&logoColor=fff")}
            class="rx5"
            alt=""
        />
        <img
            src={badge("Qiskit-73C", "qiskit&logoColor=fff")}
            class="rx5"
            alt=""
        />
        <img
            src={badge("Pytorch-F53", "pytorch&logoColor=fff")}
            class="rx5"
            alt=""
        />
    </div>
    <p>
        I'm a dev, primarily working on Quantum Machine Learning nowadays. I
        also like CyberSec a lot.
    </p>
    <div class="details f">
        <a
            class="fw7 f"
            href="https://github.com/plutoniumm"
            style="align-items: center;"
        >
            <img
                class="icon m5"
                src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/brands/github.svg"
                alt="Github"
            />
        </a>
        <a
            class="fw7 f"
            href="https://twitter.com/faxudinger"
            style="align-items: center;"
        >
            <img
                class="icon m5"
                src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/brands/twitter.svg"
                alt="Github"
            />
        </a>
    </div>
</div>

<style lang="scss">
    .icon {
        height: 20px;
        width: 20px;
        object-fit: contain;
        opacity: 0.5;
    }
    .title {
        font-size: 2rem;
        line-height: 1rem;
    }
    .details {
        line-height: 1.5em;
    }
    .left {
        transform: scale(1.33);
        padding-bottom: 0;
    }
    @media (max-width: 600px) {
        .right {
            width: 100%;
        }
    }
    @keyframes wave {
        0% {
            transform: rotate(0deg);
        }
        10% {
            transform: rotate(14deg);
        }
        20% {
            transform: rotate(-8deg);
        }
        30% {
            transform: rotate(14deg);
        }
        40% {
            transform: rotate(-4deg);
        }
        50% {
            transform: rotate(10deg);
        }
        60% {
            transform: rotate(0deg);
        } /* Reset for the last half to pause */
        100% {
            transform: rotate(0deg);
        }
    }
    #wave {
        font-size: 0.8em;
        animation: 2.5s wave infinite;
        transform-origin: 70% 70%;
        bottom: 2px;
        left: 2px;
        font-size: 52px;
    }
</style>
