<script lang="ts">
	import '../app.css';
	import Header from '../components/Header.svelte';
</script>

<link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />

<div class="grid md:grid-cols-3 grid-cols-none">
	<div>
		<Header />
	</div>
	<main class="md:col-span-2" id="main">
		<slot />
	</main>
</div>
