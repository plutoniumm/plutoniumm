<script>
	import Card from "@component/card.svelte";
	import Project from "@component/project.svelte";
	import Hero from "@component/hero.svelte";

	import projects from "$lib/projects.json";
</script>

<section class="p-rel f-col fw" style="overflow:hidden;">
	<Card className="f"><Hero /></Card>
	<div class="p10 f j-ar w-50">
		<a class="f label fw4 j-ct rpm-10" href="/faq">
			<img
				class="icon"
				src="//api.nukes.in/icon/fas:clipboard-question.svg"
				alt="/"
			/>
			<div>FAQ</div>
		</a>
		<a class="f label fw4 j-ct rpm-10" href="#lifeUpdates">
			<img class="icon" src="//api.nukes.in/icon/fas:pen.svg" alt="/" />
			<div>Updates</div>
		</a>
		<a class="f label fw4 j-ct rpm-10" href="//books.nukes.in">
			<img
				class="icon"
				src="//api.nukes.in/icon/fas:book-bookmark.svg"
				alt="/"
			/>
			<div>Books</div>
		</a>
	</div>
</section>

<section class="f-col">
	<h1 id="lifeUpdates" class="w-100 tc">Life Updates</h1>
	<div style="max-height:85vh;overflow-y:scroll">
		{#each projects as project, index}
			<Project {project} {index} />
		{/each}
	</div>
</section>

<style lang="scss">
	.icon {
		width: 1rem;
		height: 1rem;
		margin-right: 0.5rem;
		object-fit: contain;
	}
	.label {
		min-width: 100px;
		opacity: 0.5;
		color: #000 !important;
		align-self: center;
		line-height: 1rem;
		transition: all 0.2s ease-in-out;
		&:hover {
			opacity: 1;
			background: #fff8;
		}
	}
</style>
