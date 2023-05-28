<script lang='ts'>
	import '../theme.postcss';
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import {
		AppShell,
	} from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<svelte:fragment slot="header">Header</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">Sidebar Left</svelte:fragment>
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="footer">Footer</svelte:fragment>
</AppShell>
