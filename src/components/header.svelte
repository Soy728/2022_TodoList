<script lang="ts">
	import { items } from '../stores';

	$: itemCount = $items.length;
	$: completedItemCount = $items.filter((item) => item.completed).length;
</script>

<div class="header">
	<span>TODO</span>
	<span>{completedItemCount}/{itemCount}</span>
</div>

<style land="scss">
	.header {
		border-radius: 10px 10px 0px 0px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 15px 20px;
		color: white;
		font-weight: bold;
		font-size: 1.5em;
		background: rgba(0, 0, 0, 0.1);
	}
</style>
