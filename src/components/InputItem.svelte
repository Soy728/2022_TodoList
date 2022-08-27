<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function handleKeyUp({ key }) {
		if (key !== 'Enter' || value.length === 0) return;
		else {
			dispatch('newitem', value);
			value = '';
		}
	}

	let value: string = '';
</script>

<input type="text" on:keyup={handleKeyUp} bind:value placeholder=" + 할 일을 추가하세요." />

<style land="scss">
	input {
		padding: 15px 0px;
		background: white;
		margin: 10px 0px;
		border: none;
		width: 100%;
	}
</style>
