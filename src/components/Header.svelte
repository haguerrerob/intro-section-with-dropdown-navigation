<!-- The designs were created to the following widths: Mobile: 375px - Desktop: 1440px -->
<script>
	import HeaderContentMobile from './HeaderContentMobile.svelte';
	import HeaderContentDesktop from './HeaderContentDesktop.svelte';

	import Sidebar from './Sidebar.svelte';
	let band = false;
	const handleClick = () => {
		band = !band;
	};
</script>

<div class="">
	{#if band}
		<Sidebar on:click={handleClick} />
	{/if}

	<nav class="flex items-center justify-between p-4">
		<strong class="text-4xl md:text-5xl mr-5">snap</strong>
		<HeaderContentMobile on:click={handleClick} />
		<HeaderContentDesktop />
	</nav>
</div>
