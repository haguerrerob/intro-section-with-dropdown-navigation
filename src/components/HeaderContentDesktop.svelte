<script>
	let feature = false;
	let company = false;

	const featureClick = () => {
		console.log('featureClick');
		feature = !feature;
	};
	const companyClick = () => {
		console.log('companyClick');
		company = !company;
	};
</script>

<div class="hidden md:flex flex-grow justify-between text-gray-500">
	<div class="flex flex-grow items-center">
		<div class="inline-block relative text-left">
			<div>
				<button
					on:click={featureClick}
					class="inline-flex justify-center items-center mx-2 w-full hover:text-black"
					>Features
					{#if feature}
						<img class="pl-2" src="icon-arrow-up.svg" alt="icon-arrow-up" />
					{:else}
						<img class="pl-2" src="icon-arrow-down.svg" alt="icon-arrow-down" />
					{/if}
				</button>
			</div>
			{#if feature}
				<div
					on:mouseleave={featureClick}
					class="origin-top-right absolute w-36 right-0 top-5 h-30 mt-5 rounded-xl shadow-xl bg-white"
				>
					<ul class="text-sm flex flex-col my-3 justify-center">
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
				</div>
			{/if}
		</div>
		<div class="inline-block relative text-left">
			<div>
				<button
					on:click={companyClick}
					class="inline-flex justify-center items-center mx-2 w-full hover:text-black"
					>Company
					{#if company}
						<img class="pl-2" src="icon-arrow-up.svg" alt="icon-arrow-up" />
					{:else}
						<img class="pl-2" src="icon-arrow-down.svg" alt="icon-arrow-down" />
					{/if}
				</button>
			</div>
			{#if company}
				<div
					on:mouseleave={companyClick}
					class="absolute origin-top-left w-28 left-5 top-5 h-30 mt-5 rounded-xl shadow-xl bg-white"
				>
					<ul class="text-sm flex flex-col my-3 justify-center">
						<li class="flex items-center pl-5 mb-2">
							<a href="#aa">History</a>
						</li>
						<li class="flex items-center pl-5 mb-2">
							<a href="#aa">Our Team</a>
						</li>
						<li class="flex items-center pl-5 mb-2">
							<a href="#aa">Blog</a>
						</li>
					</ul>
				</div>
			{/if}
		</div>
		<button class="mx-4 hover:text-black">Careers </button>
		<button class="mx-4 hover:text-black">About </button>
	</div>

	<div class="inline-block">
		<button class="mr-4">Login</button>
		<button class="hover:text-black ml-4 rounded-[14px] border border-black px-4 py-2"
			>Register</button
		>
	</div>
</div>
