<script>
    export let project = Object.create(null);
</script>

<div class="card fade rx20 ƒ p20 o-0 m10 ">
    <img height="75px" src="//api.nukes.in/icon/{project.icon}.svg" alt="" />
    <div style="flex:5">
        <div class="w-100" style="margin-left:10px;">
            <div class="fw7" style="font-size:1.1em;padding-bottom:5px;">
                {project.title}
                <span style="color:#888;">@{project.where}</span>
            </div>
            <div>{@html project.about} {project.about.length}</div>
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
            object-position: center center;
            flex: 1;
            background: var(--theme);
            aspect-ratio: 1;
            border-radius: 100px;
        }
    }
</style>
