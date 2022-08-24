<script lang="ts">
	export let id: number, text: string, completed: boolean;
</script>

<div class="item">
	<!--readonly 속성은 사용자가 입력필드를 볼 수 있으나, 수정 할 수는 없도록 설정-->
	<input class="text-input " type="text" bind:value={text} readonly={completed} />
	<input class="completed-checkbox" type="checkbox" bind:checked={completed} />
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
	/* 
	.text-input {
		flex-grow: 1;
		background: none;
		border: none;
		font-size: 1em;
	} */

	.completed-checkbox {
		margin-left: 15px;
	}
</style>
