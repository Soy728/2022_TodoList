<script lang="ts">
	import { onMount } from 'svelte';
	import LocalStorage from '../LocalStorage';
	import { items } from '../stores';
	import Item from './Item.svelte';
	import InputItem from './InputItem.svelte';
	import { v4 } from 'uuid';

	function handleNewItem(e) {
		$items = [
			{
				id: v4(),
				text: e.detail,
				completed: false
			},
			...$items
		];

		LocalStorage.save($items);
	}

	function handleUpdate(e) {
		const index: number = $items.findIndex((item: any) => item.id === e.detail.id);
		$items[index] = e.detail;
		LocalStorage.save($items);
	}
	function handleDelete(e) {
		$items = $items.filter((item: any) => item.id != e.detail);
		LocalStorage.save($items);
	}

	onMount(async () => {
		// fetch from API
		$items = await LocalStorage.getAll();
	});
</script>

<div class="list">
	{#each $items as item}
		<Item {...item} on:update={handleUpdate} on:delete={handleDelete} />
	{:else}
		<p class="list-status">할 일이 존재하지 않습니다.</p>
	{/each}
	<InputItem on:newitem={handleNewItem} />
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
