<script>
    export let project = {
        title: "",
        where: "",
        about: "",
    };
</script>

<div class="w-100">
    <div class="p5">
        <div class="fw7" style="font-size:1.1em;">
            {project.title}
        </div>
        <div style="color:#888;">
            {project.where}
        </div>
    </div>
    <div class="p5">
        {@html project.about}
    </div>
</div>
