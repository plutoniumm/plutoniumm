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
        <a
            href="https://github.com/plutoniumm"
            rel="external noreferrer noopener"
            target="_blank"
        >
            <img
                src={badge("GitHub-fff", "github&logoColor=000")}
                class="rx5"
                alt=""
            />
        </a>
        <a
            href="https://twitter.com/faxudinger"
            rel="external noreferrer noopener"
            target="_blank"
        >
            <img
                src={badge("Twitter-2AF", "twitter&logoColor=fff")}
                class="rx5"
                alt=""
            />
        </a>
    </div>
    <p>
        I'm a dev, primarily working on Quantum Machine Learning nowadays. I
        also like CyberSec a lot.
    </p>
</div>

<style lang="scss">
    .title {
        font-size: 2rem;
        line-height: 1rem;
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
