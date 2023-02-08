<script>
    const badge = (name, rest) =>
        `//img.shields.io/badge/-${name}?style=flat-square&logo=${rest}`;
</script>

<img
    class="left p10"
    width="150px"
    height="150px"
    src="/assets/pic.png"
    alt=""
/>
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
        I'm a dev, primarily working on Svelte things nowadays. I also like
        CyberSec a lot.
    </p>
    <div class="details ƒ">
        <a href="https://github.com/plutoniumm">
            <img
                class="icon m5"
                src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/brands/github.svg"
                alt="Github"
            />
        </a>
    </div>
</div>

<style lang="scss">
    .icon {
        height: 24px;
        width: 24px;
        object-fit: contain;
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
</style>
