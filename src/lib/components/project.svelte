<script>
    export let project = Object.create(null);
    export let index = 0;

    const colors = Object.freeze(["2af", "2fa", "f2a", "fa2", "a2f", "af2"]);
</script>

<div
    class="card rx20 f p20 m10"
    style="background:#{colors[index % colors.length]}6;"
>
    <img
        height="40px"
        width="40px"
        src="//api.nukes.in/icon/{project.icon}.svg"
        alt=""
    />
    <div style="flex:5">
        <div class="w-100" style="margin-left:10px;">
            <div class="fw7" style="font-size:1.1em;padding-bottom:5px;">
                {project.title}
                <span style="color:#666a;">@{project.where}</span>
            </div>
            <div class="fw3">{@html project.about}</div>
        </div>
    </div>
</div>

<style lang="scss">
    .card {
        font-size: 1rem;
        width: 600px;
        align-items: center;
        background: #fff;
        img {
            object-fit: contain;
            filter: invert(100%);
            opacity: 75%;
            mix-blend-mode: overlay;
            aspect-ratio: 1;
        }
    }
</style>
