<div class="from-red-800 to-red-500 bg-gradient-to-b min-h-screen text-white px-5 relative">
	<div class="text-center pt-16">
		<div class="group">
			<img
				src="/logo.jpg"
				alt=""
				class="w-20 rounded-full mx-auto group-hover:rotate-[360deg] transition duration-500"
			/>
			<h1 class="font-bold text-6xl">Chickrest</h1>
			<h2 class="font-semibold text-xl">Chicken food restaurant.</h2>
			<p>Book your table now!</p>
		</div>
		<a
			href="/reservation"
			class="btn btn-1 mt-5 group"
			on:click|preventDefault={() => {
				document.getElementById('m')?.scrollIntoView({ behavior: 'smooth' });
			}}>Book now <i class="bx bxs-chevrons-down ml-1 group-hover:text-red-400" /></a
		>
		<div class="absolute bottom-0 left-0 -z-1">
			<lottie-player
				src="https://assets10.lottiefiles.com/private_files/lf30_y1tasdqo.json"
				background="transparent"
				speed="0.3"
				class="w-full"
				loop
				autoplay
			/>
		</div>
	</div>
</div>
