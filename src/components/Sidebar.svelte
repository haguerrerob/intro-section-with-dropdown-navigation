<script>
	import { fade, fly } from 'svelte/transition';
	/**
	 * @type {HTMLDivElement}
	 */
	let element;
	let feature = false;
	let company = false;
	const handleClick = () => {
		element.classList.toggle('hidden');
	};
	const featureClick = () => {
		feature = !feature;
	};
	const companyClick = () => {
		company = !company;
	};
</script>

<div
	in:fly={{ x: 200, duration: 500 }}
	bind:this={element}
	class="absolute w-full h-full flex justify-end"
>
	<div class="absolute w-full h-full bg-gray-500 opacity-60  " />
	<aside class="flex flex-col absolute w-[240px] h-full bg-white border-r-2 shadow-lg">
		<button on:click class="self-end p-6"><img src="icon-close-menu.svg" alt="close-menu" /></button
		>
		<nav class="flex flex-col py-3 px-6 mb-2 text-lg text-gray-500">
			<button on:click={featureClick} class="flex mr-4 mb-2 text-gray-500 items-center"
				>Features
				{#if feature}
					<img class="pl-2" src="icon-arrow-up.svg" alt="icon-arrow-up" />
				{:else}
					<img class="pl-2" src="icon-arrow-down.svg" alt="icon-arrow-down" />
				{/if}
			</button>
			{#if feature}
				<ul class="flex flex-col mb-4 justify-center text-base">
					<li class="flex items-center pl-5 mb-2">
						<img class="mr-2" src="icon-todo.svg" alt="todo" />
						<a href="#aa">Todo List</a>
					</li>
					<li class="flex items-center pl-5 mb-2">
						<img class="mr-2" src="icon-calendar.svg" alt="calendar" />
						<a href="#aa">Calendar</a>
					</li>
					<li class="flex items-center pl-5 mb-2">
						<img class="mr-2" src="icon-reminders.svg" alt="reminders" />
						<a href="#aa">Reminders</a>
					</li>
					<li class="flex items-center pl-5 mb-2">
						<img class="mr-2" src="icon-planning.svg" alt="planning" />
						<a href="#aa">Planning</a>
					</li>
				</ul>
			{/if}
			<button on:click={companyClick} class="flex mr-4 mb-2 items-center"
				>Company
				{#if company}
					<img class="pl-2" src="icon-arrow-up.svg" alt="icon-arrow-down" />
				{:else}
					<img class="pl-2" src="icon-arrow-down.svg" alt="icon-arrow-down" />
				{/if}
			</button>
			{#if company}
				<ul class="flex flex-col justify-center mb-4 text-base ">
					<li class="pl-5 mb-2">
						<a href="#aa">History</a>
					</li>
					<li class="pl-5 mb-2">
						<a href="#aa">Our Team</a>
					</li>
					<li class="pl-5 mb-2">
						<a href="#aa">Blog</a>
					</li>
				</ul>
			{/if}
			<button class="self-start mb-2">Carrers</button>
			<button class="self-start">About</button>
		</nav>
	</aside>
</div>
