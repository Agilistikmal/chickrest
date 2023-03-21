<script lang="ts">
	import '../app.css';
	import Header from '../components/Header.svelte';
</script>

<div class="grid grid-cols-3">
	<div class="from-red-800 to-red-500 bg-gradient-to-b min-h-screen text-white px-5 relative">
		<div class="text-center mt-16">
			<Header />
		</div>
	</div>
	<main class="col-span-2 px-5">
		<slot />
	</main>
</div>
