<script lang="ts">
	import { Header } from '../components';
	import { List } from '../components';
</script>

<div class="web">
	<div class="container">
		<Header />
		<List />
	</div>
</div>

<style land="scss">
	.container {
		position: absolute;
		left: 50%;
		transform: translate(-50%);
		top: 30px;
		border-radius: 10px;
		width: 500px;
		background: #7fb77e;
	}

	:global(.container *) {
		font-family: sans-serif;
	}
	.web {
		width: 100vw;
		height: 100vh;
		background: #f7f6dc;
	}
</style>
