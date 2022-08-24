<script lang="ts">
	import { onMount } from 'svelte';
	import TodoApi from '../TodoApi';
	import { items } from '../stores';
	import Item from './Item.svelte';

	// function handleNewItem(e) {}
	// function handleUpdate(e) {}

	// function handleDelte(e) {}

	onMount(async () => {
		// fetch from API
		$items = await TodoApi.getAll();
	});
</script>

<div class="list">
	{#each $items as item}
		<Item {...item} />
	{:else}
		<p class="list-status">할 일이 존재하지 않습니다.</p>
	{/each}
</div>

<style land="scss">
	.list {
		padding: 15px;
	}

	.list-status {
		margin: 0;
		text-align: center;
		color: white;
		font-weight: normal;
		font-size: 1em;
	}
</style>
