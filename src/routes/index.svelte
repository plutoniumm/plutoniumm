<script>
	import Card from "@component/card.svelte";
	import Project from "@component/project.svelte";
	import Bubbles from "@component/bubbles.svelte";
	import Hero from "@component/hero.svelte";

	import projects from "$lib/projects.json";
</script>

<section class="h-100 p-rel ƒ-col ƒ∑" style="overflow:hidden;">
	<div class="p-abs w-100 h-100" style="top:0; left:0;z-index:2;">
		<Bubbles />
	</div>

	<svg class="m20 o-50" viewBox="0 0 32 32">
		<text>&nbsp;</text>
	</svg>
	<div class="heroCont w-100 ƒ ∆-ct" style="z-index:3;">
		<Card important>
			<Hero />
		</Card>
	</div>
	<svg class="m20 o-50" viewBox="0 0 32 32">
		<path d="M30 12 L16 24 2 12" />
	</svg>
</section>

<section class="h-100 ƒ-col">
	{#each projects as project}
		<Card>
			<Project {project} />
		</Card>
	{/each}
</section>

<style lang="scss">
	.heroCont {
		padding: 20vh 0;
		background: linear-gradient(
			to bottom,
			transparent 0%,
			var(--theme) 10%,
			var(--theme) 95%,
			transparent 100%
		);
	}
	svg {
		width: 32px;
		height: 32px;
		fill: none;
	}
</style>
