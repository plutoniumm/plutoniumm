<script>
	import CenterBox from "./components/centerbox.svelte";
	import CodeBox from "./components/codebox.svelte";

	import { fade } from "svelte/transition";

	$: code = false;
	const codeCg = () => (code = !code);
</script>

<style type="text/scss">
	main {
		width: 100%;
		height: 100%;
		justify-content: center;
		align-items: center;
		display: flex;
		background: #cae1ff;
		.section {
			height: auto;
			width: 480px;
			transition: all 0.3s ease;
		}
		.code {
			text-align: center;
			padding: 0.75em;
			color: #aaa8;
			svg {
				border: 1px solid #8880;
				padding: 0.25em;
			}
			&:hover {
				color: #222;
				cursor: pointer;
				transition: color 0.3s ease;
			}
		}
	}
	@media (max-width: 600px) {
		.section {
			width: 300px;
		}
	}
</style>

<main>
	<section style="display:flex;flex-direction:column;">
		<div class="code" on:click={codeCg}>
			<svg viewBox="0 0 32 32" width="32" height="32" fill="none">
				<path
					d={!code ? 'M22 11 C22 16 19 20 16 20 13 20 10 16 10 11 10 6 12 3 16 3 20 3 22 6 22 11 Z M4 30 L28 30 C28 21 22 20 16 20 10 20 4 21 4 30 Z' : 'M10 9 L3 17 10 25 M22 9 L29 17 22 25 M18 7 L14 27'} />
			</svg>
		</div>
		<div class="section" style={!code ? '' : 'flex-wrap:wrap'}>
			{#if !code}
				<CenterBox />
			{/if}
			{#if code}
				<CodeBox />
			{/if}
		</div>
	</section>
</main>
