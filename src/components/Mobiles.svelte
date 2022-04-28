<script>
	const handleClick = () => {
		console.log('clicked');
	};
</script>

<div class="flex flex-col md:hidden">
	<div class="my-5 items-center justify-center max-w-md self-center">
		<img src="image-hero-mobile.png" alt="hero-mobile" class="" />
	</div>
	<span class="text-center my-5 text-4xl font-bold">Make remote work</span>
	<p class="my-5 mx-5 text-md text-gray-500 text-center">
		Get your team in sync, no matter your location. Streamline processes, create team rituals, and
		watch productivity soar.
	</p>
	<button
		on:click={handleClick}
		class="my-5 self-center rounded-xl text-lg text-white bg-black hover:text-gray-500 hover:bg-white border  border-black px-4 py-2"
		>Learn more</button
	>
	<div class="flex flex-row items-center my-5 self-center justify-between">
		<img class="w-1/5" src="client-databiz.svg" alt="databiz" />
		<img class="w-1/6" src="client-audiophile.svg" alt="databiz" />
		<img class="w-1/5" src="client-meet.svg" alt="databiz" />
		<img class="w-1/6" src="client-maker.svg" alt="databiz" />
	</div>
</div>
