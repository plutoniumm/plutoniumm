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
                "JavaScript-F7DF1E",
                "javascript&logoColor=000000&labelColor=%000000"
            )}
            class="rx5"
            alt=""
        />
        <img
            src={badge("Kali-557C94", "kalilinux&logoColor=ffffff")}
            class="rx5"
            alt=""
        />
        <img
            src={badge("Qiskit-6929C4", "qiskit&logoColor=ffffff")}
            class="rx5"
            alt=""
        />
        <img
            src={badge("Pytorch-EE4C2C", "pytorch&logoColor=ffffff")}
            class="rx5"
            alt=""
        />
    </div>
    <p>
        I'm a dev, primarily working on Svelte things nowadays. I also like
        InfoSec a lot.
    </p>
    <div class="details">
        <a href="https://github.com/plutoniumm">@plutoniumm</a>
        <br />
        <div>plutoniumm[at]icloud[dot]com</div>
    </div>
</div>

<style lang="scss">
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
