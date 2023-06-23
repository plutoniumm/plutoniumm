<script>
	import Card from "$component/card.svelte";
	import Hero from "$component/hero.svelte";
	import projects from "$lib/projects.json";

	const i = (str) => `https://x.manav.ch/m2/i${str}`;

	const links = [
		// href, icon, name
		["/t", "/fas:brain", "Thinkenings"],
		["/code", "/fas:file-code", "Mini Codes"],
		["//books.manav.ch", "/fas:book-bookmark", "Books"],
	];
</script>

<section class="p-rel f-col fw flow-x-h flow-yh">
	<Card className="f"><Hero /></Card>
	<div class="p10 f j-ar w-50">
		{#each links as link}
			<a class="f label fw4 j-ct rpm-10" href={link[0]}>
				<img class="icon" src={i(link[1])} alt="/" />
				<div>{link[2]}</div>
			</a>
		{/each}
	</div>
	<div class="p10 f j-ar w-50">
		<a class="f label fw4 j-ct rpm-10" href="#lifeUpdates">
			<svg height="32px" width="32px" viewBox="0 0 32 32" fill="none">
				<path d="M 30 12 L 16 20 L 2 12" />
			</svg>
		</a>
	</div>
</section>

<section class="f-col">
	<h1 id="lifeUpdates" class="w-100 tc">Life Updates</h1>
	<div class="flow-y-s" style="max-height:85vh;">
		{#each projects as project}
			<div class="card rx20 p20 blur-fff8">
				<div class="w-100" style="margin-left:10px;">
					<div class="fw7" style="font-size:1.1em;padding-bottom:5px;">
						{project.title}
						<span class="fw4" style="color:#666a;">@{project.where}</span>
					</div>
					<div class="fw3">{@html project.about}</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<style lang="scss">
	.card {
		margin: 10px auto;
		font-size: 1rem;
		width: calc(min(660px, 100%) - 60px);
		align-items: center;
	}
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
