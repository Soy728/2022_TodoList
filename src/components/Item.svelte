<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let id: string, text: string, completed: boolean;
	const dispatch = createEventDispatcher();

	function triggerupdate() {
		dispatch('update', { id, text, completed });
	}

	function triggerdelete() {
		dispatch('delete', id);
	}
</script>

<div class="item" class:completed>
	<!--readonly 속성은 사용자가 입력필드를 볼 수 있으나, 수정 할 수는 없도록 설정-->
	<input class="text-input" type="text" bind:value={text} on:change={() => triggerupdate()} />
	<input
		class="completed-checkbox"
		type="checkbox"
		bind:checked={completed}
		on:change={() => triggerupdate()}
	/>
	<button class="delete-btn" on:click={() => triggerdelete()}>X</button>
</div>

<style land="scss">
	.item {
		display: flex;
		align-items: center;
		padding: 15px;
		background: white;
	}

	.item:focus-within {
		background: rgba(255, 255, 255, 0.8);
	}

	.text-input {
		flex-grow: 1;
		background: none;
		border: none;
		font-size: 1em;
	}

	.completed-checkbox {
		margin-left: 15px;
		cursor: pointer;
		width: 18px;
		height: 18px;
	}

	.item.completed .text-input {
		text-decoration-line: line-through;
	}

	.delete-btn {
		margin: 5px;
		background-color: #7fb77e;
		color: white;
		border: none;
		cursor: pointer;
	}
</style>
