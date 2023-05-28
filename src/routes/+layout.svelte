<script lang='ts'>
	import '../theme.postcss';
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import {
		AppShell,
		AppBar,
		Avatar,
		Drawer,
		Modal,
		Toast,
		drawerStore
	} from '@skeletonlabs/skeleton';


	let searchInput = '';

	function drawerOpen(): void {
		drawerStore.open();
	}

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<Toast position="tr" />
<Modal />
<Drawer>
	<nav class="list-nav p-4">
		<ul>
			<li><a href="/" on:click={drawerClose}>Notes</a></li>
			<li><a href="/" on:click={drawerClose}>Reminders</a></li>
			<li><a href="/" on:click={drawerClose}>Trash</a></li>
		</ul>
	</nav>
</Drawer>

<AppShell class="variant-filled-surface" slotSidebarLeft="w-0 md:w-52 bg-surface">
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-3" background="bg-surface" slotDefault="place-self-center" slotTrail="place-content-end" class="border-b">
			<svelte:fragment slot="lead">
				<div class="flex flex-row gap-2">
					<button class="md:hidden btn btn-sm mr-4" on:click={drawerOpen}>
						<span>
							<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
								<rect width="100" height="20" />
								<rect y="30" width="100" height="20" />
								<rect y="60" width="100" height="20" />
							</svg>
						</span>
					</button>
					<h3 class="sm:flex hidden text-lg">Svelte Note</h3>
				</div>
			</svelte:fragment>
			<!-- Search Bar -->
			<input class="input h-10 w-52" type="search" name="find" bind:value={searchInput} placeholder="Search..." />
			<!-- Search Bar -->
			<svelte:fragment slot="trail">
				<Avatar src="/profile.ico" width="sm:w-12 w-10" rounded="rounded-full" />
			</svelte:fragment>
		</AppBar>		
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<nav class="list-nav p-4">
			<ul>
				<li><a href="/" on:click={drawerClose}>Notes</a></li>
				<li><a href="/" on:click={drawerClose}>Reminders</a></li>
				<li><a href="/" on:click={drawerClose}>Trash</a></li>
			</ul>
		</nav>
	</svelte:fragment>
	<!-- Router Slot -->
	<div class="container p-10 mx-auto">
		<slot />
	</div>
	<!-- ---- / ---- -->
</AppShell>
