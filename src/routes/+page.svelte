<script>
	const i = (str) => `https://x.manav.ch/m2/i/${str}`;
	const links = [
		["plutoniumm", "//github.com/plutoniumm", "fab:github", "github"],
		["mplutoniumm", "//twitter.com/mplutoniumm", "fab:twitter", "twitter"],
		["Books", "//books.manav.ch", "fas:book-bookmark", "Book List"],
	];
</script>

<section class="p-rel f-col fw flow-x-h flow-yh main">
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
				<img src={i(link[2])} alt={link[3]} />
				{link[0]}
			</a>
		{/each}
	</div>
</section>

<style lang="scss">
	.main {
		color: #fff;
	}
	.title {
		font-size: 1.5rem;
		line-height: 1rem;
	}
	a[target="_blank"] {
		display: block;
		margin: 4px 0;
		font-size: 18px;
		position: relative;
		img {
			position: relative;
			top: 6px;
			height: 24px;
			width: 24px;
			filter: invert(1);
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
