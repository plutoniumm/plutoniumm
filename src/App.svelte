<script>
	import CenterBox from "./components/centerbox.svelte";
	import CodeBox from "./components/codebox.svelte";

	import { fade } from "svelte/transition";

	$: code = false;
	const codeCg = () => {
		code = !code;
	};
</script>

<style>
	main {
		width: 100%;
		height: 100%;
		justify-content: center;
		align-items: center;
		display: flex;
		background: #cae1ff;
	}
</style>

<main>
	{#if !code}
		<div transition:fade>
			<CenterBox {codeCg} />
		</div>
	{/if}
	{#if code}
		<div transition:fade>
			<CodeBox {codeCg} />
		</div>
	{/if}
</main>
