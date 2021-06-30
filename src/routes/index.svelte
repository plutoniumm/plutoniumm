<script>
	import Card from "$lib/components/card.svelte";
	import projects from "$lib/projects.json";
	import { base } from "$app/paths";
	import { onMount } from "svelte";

	let canvas,
		img,
		fade = 1;

	onMount(() => {
		img = new Image(); // Create new img element
		img.onload = () => {
			canvas.getContext("2d").drawImage(img, 0, 0, 200, 200);
			fade = 1;
		};
		img.src = base + "/assets/pic.jpeg";
	});
</script>

<section class="h-100 flex-col f-wrap">
	<svg class="m-20 o-50" viewBox="0 0 32 32">
		<text>&nbsp;</text>
	</svg>
	<Card important {fade}>
		<canvas
			class="left rx-100"
			width="200px"
			height="200px"
			bind:this={canvas}
		/>
		<div class="right p-20">
			<div class="title">Manav Seksaria</div>
			<p>
				I'm a dev, primarily working on Svelte things nowadays. I also
				like InfoSec a lot.
			</p>
			<div class="details">
				<a href="https://github.com/plutoniumm">@plutoniumm</a>
				<br />
				<a href="mailto:plutoniumm@icloud.com">plutoniumm@icloud.com</a>
			</div>
		</div>
	</Card>
	<svg class="m-20 o-50" viewBox="0 0 32 32">
		<path d="M30 12 L16 24 2 12" />
	</svg>
</section>
<section class="h-100 flex-col">
	{#each projects as project}
		<Card fade>
			{project.title}
		</Card>
	{/each}
</section>

<style type="text/scss">
	section {
		justify-content: center;
		align-items: center;
		scroll-snap-align: start;
		scroll-snap-stop: normal;
	}
	svg {
		width: 32px;
		height: 32px;
		fill: none;
		&:hover {
			opacity: 1;
		}
	}
	.title {
		font: 600 32px var(--baseFont);
		line-height: 16px;
	}
	.details {
		line-height: 1.5em;
		color: var(--theme-hl);
	}
	@media (max-width: 600px) {
		.right {
			width: 100%;
		}
	}
</style>
