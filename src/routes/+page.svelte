<script lang="ts">
	import { debounce } from '$lib/debounce';

    let count: number;

	function increase() {
		debounce(() => {
			++count;
		}, 500);
	}

	$: count = 1;
</script>

<center>
	<h1>Debounce Example</h1>
	<button on:click={increase}>Increase</button>
	<p>{count}</p>
</center>
