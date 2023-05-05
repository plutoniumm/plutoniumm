<script>
    export let project = Object.create(null);
</script>

<div class="card rx20 p20 m10 blur">
    <div class="w-100" style="margin-left:10px;">
        <div class="fw7" style="font-size:1.1em;padding-bottom:5px;">
            {project.title}
            <span class="fw4" style="color:#666a;">@{project.where}</span>
        </div>
        <div class="fw3">{@html project.about}</div>
    </div>
</div>

<style lang="scss">
    .card {
        font-size: 1rem;
        width: 600px;
        align-items: center;
        --bg: #fff8;
        --sz: 8px;
    }
</style>
