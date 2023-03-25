<script lang="ts">
	import { TableModel } from '$lib/database/schema/Table';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import type { Table } from '../../app';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
	let tables: Table[] = data.tables;

	let email: string;
	let date = new Date().toISOString().split('T')[0];
	let time: string;
	let people: number = 1;
	let id: string = tables[0]._id;

	let loading: boolean = true;
	onMount(() => (loading = false));

	async function handleChange() {
		const get = await fetch(`/api/tables?date=${date}&people=${people}`);
		const data: Table[] = await get.json();
		tables = data;
		id = tables[0]._id;
	}
</script>

{#if !loading}
	<div
		class="pt-16 bg-[url('https://c4.wallpaperflare.com/wallpaper/768/217/159/lemon-food-chicken-baked-wallpaper-preview.jpg')] min-h-screen bg-cover"
	>
		<div class="flex flex-wrap justify-center gap-2 mx-8">
			<form
				method="POST"
				class="p-5 rounded-xl bg-slate-100 max-w-md w-full shadow-xl border-b-8 border-red-600 border-2 hover:-translate-y-1 transition duration-500"
				in:fly={{ y: 50, duration: 1000 }}
			>
				<input type="text" name="id" bind:value={id} style="display: none;" />
				<div>
					<h1 class="font-semibold text-lg">Email address</h1>
					<input
						type="email"
						name="email"
						placeholder="your@email.com"
						bind:value={email}
						required
						class="outline-none rounded-xl p-2 w-full"
					/>
				</div>
				<div class="mt-5">
					<h1 class="font-semibold text-lg">Select booking date</h1>
					<input
						type="date"
						name="date"
						bind:value={date}
						on:change={handleChange}
						required
						class="outline-none rounded-xl p-2 w-full"
					/>
				</div>
				<div class="mt-5">
					<h1 class="font-semibold text-lg">Select booking time</h1>
					<p class="text-sm mb-1">Open 10.00 - 21.00 WIB</p>
					<input
						type="time"
						name="time"
						bind:value={time}
						on:change={handleChange}
						required
						min="10:00"
						max="21:00"
						class="outline-none rounded-xl p-2 w-full"
					/>
				</div>
				<div class="mt-5">
					<h1 class="font-semibold text-lg">For how many people?</h1>
					<input
						type="number"
						name="people"
						bind:value={people}
						class="outline-none rounded-xl p-2 w-full"
						min="1"
						max="6"
						on:change={(e) => {
							// @ts-ignore
							const value = parseInt(e.target?.value);

							if (value < 1) {
								people = 1;
							} else if (value > 6) {
								people = 6;
							}

							handleChange();
						}}
						required
					/>
				</div>
				<p class="text-center mt-5">{tables.length} tables available</p>
				<p class="text-center text-sm">Your table number: {tables[0].table_number || '???'}</p>
				<button class="btn btn-1 mt-5 w-full">Book now</button>
			</form>
			<div
				class="p-5 bg-slate-100 h-max max-w-xs w-full shadow-xl border-2 border-green-600 border-b-8 rounded-xl hover:-translate-y-1 transition duration-500"
				in:fly={{ delay: 500, duration: 1000, y: 25 }}
			>
				<h1 class="font-semibold text-lg text-green-600">
					<i class="bx bxs-location-plus" /> Location
				</h1>
				<p>
					LT 2 Jogja City Mall, Jl. Magelang 6 No.18, Kutu Patran, Sinduadi, Kec. Mlati, Kabupaten
					Sleman, Daerah Istimewa Yogyakarta 55284
				</p>
			</div>
		</div>
	</div>
{/if}
