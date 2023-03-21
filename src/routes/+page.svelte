<script lang="ts">
	let date = new Date().toISOString().split('T')[0];
	let time: string;
	let people: number = 1;
</script>

<div class="mt-16">
	<div class="mx-auto p-5 rounded-xl bg-slate-100 max-w-sm w-full">
		<div>
			<h1 class="font-semibold text-lg">Select booking date</h1>
			<input type="date" name="date" bind:value={date} class="outline-none rounded-xl p-2 w-full" />
		</div>
		<div class="mt-5">
			<h1 class="font-semibold text-lg">Select booking time</h1>
			<input type="time" name="time" bind:value={time} class="outline-none rounded-xl p-2 w-full" />
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
				}}
			/>
		</div>
		<button class="btn btn-1 mt-5 w-full">Find tables</button>
	</div>
</div>
