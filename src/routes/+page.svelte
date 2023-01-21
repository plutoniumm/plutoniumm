<script>
	import Card from "@component/card.svelte";
	import Project from "@component/project.svelte";
	import Hero from "@component/hero.svelte";

	import projects from "$lib/projects.json";
</script>

<section class="p-rel ƒ-col ƒ∑" style="overflow:hidden;">
	<Card className="ƒ"><Hero /></Card>
</section>

<section class="ƒ-col">
	<h1 class="w-100 †c">Life Updates</h1>
	<div style="max-height:85vh;overflow-y:scroll">
		{#each projects as project, index}
			<Project {project} {index} />
		{/each}
	</div>
</section>
