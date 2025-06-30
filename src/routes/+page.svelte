<script>
	import { onMount } from "svelte";

	const i = (str) => `/assets/${str}.svg`;
	const links = [
		["plutoniumm", "//github.com/plutoniumm", "github"],
		["pluto_niumm", "//twitter.com/pluto_niumm", "x"],
		["plutoniumm", "//youtu.be/dQw4w9WgXcQ", "youtube"],
		["Books", "//books.manav.ch", "bookmark"],
		["Scholar", "//scholar.google.com/citations?user=CkJTRyAAAAAJ", "scholar"],
		// ["Notes", "/p", "clip"],
	];

	onMount(() => document.body.classList.remove("light"));
</script>

<section class="p-rel al-ct j-ct f-col fw flow-x-h flow-y-h">
	<div class="p-rel">
		<img
			class="left p10"
			width="125px"
			height="125px"
			src="/assets/pic.png"
			alt=""
		/>
		<div id="wave" class="p-abs">
			<span class="d-ib" style="transform: rotate(-30deg);"> ✋🏽 </span>
		</div>
	</div>
	<div class="right fade p20">
		<div class="title fw5">Manav Seksaria</div>
		<br />
		{#each links as link}
			<a href={link[1]} rel="external noreferrer noopener" target="_blank">
				<img src={i(link[2])} alt={link[0]} />
				{link[0]}
			</a>
		{/each}
	</div>
</section>

<style lang="scss">
	section {
		height: 100vh;
	}

	.title {
		font-size: 1.5rem;
		line-height: 1rem;
	}
	a[target="_blank"] {
		display: block;
		margin: 4px 0;
		font-size: 18px;
		line-height: 1.5;
		position: relative;
		img {
			position: relative;
			top: 6px;
			left: -2px;
			height: 22px;
			width: 22px;
			filter: grayscale(1);
		}
	}
	.left {
		transform: scale(1.33);
		padding-bottom: 0;
	}
	@keyframes wave {
		0% {
			transform: rotate(0deg);
		}
		10% {
			transform: rotate(14deg);
		}
		20% {
			transform: rotate(-8deg);
		}
		30% {
			transform: rotate(14deg);
		}
		40% {
			transform: rotate(-4deg);
		}
		50% {
			transform: rotate(10deg);
		}
		60% {
			transform: rotate(0deg);
		} /* Reset for the last half to pause */
		100% {
			transform: rotate(0deg);
		}
	}
	#wave {
		font-size: 0.8em;
		animation: 2.5s wave infinite;
		transform-origin: 70% 70%;
		bottom: 2px;
		left: 2px;
		font-size: 52px;
	}
</style>
