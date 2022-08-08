<script>
	import Card from "@component/card.svelte";
	import Project from "@component/project.svelte";
	import Hero from "@component/hero.svelte";

	import projects from "$lib/projects.json";
</script>

<section class="h-100 p-rel ƒ-col ƒ∑" style="overflow:hidden;">
	<Card important className="">
		<div class="ƒ">
			<Hero />
		</div>
		<hr class="o-25 w-50" />
		<div class="ƒ ∆-ar">
			<div>
				<img src="" alt="" />
				<span>&nbsp;</span>
			</div>
		</div>
	</Card>
</section>

<section class="h-100 ƒ-col">
	<h1 class="w-100 †c">Life Updates</h1>
	{#each projects as project}
		<Card>
			<Project {project} />
		</Card>
	{/each}
</section>

<style lang="scss">
</style>
