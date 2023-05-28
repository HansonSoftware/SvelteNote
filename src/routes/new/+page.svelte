<script lang="ts">
	import { goto } from '$app/navigation';
	import { noteStore } from '$lib/stores';
	import { InputChip, toastStore, type ToastSettings } from '@skeletonlabs/skeleton';
    let tags: string[] = [];
    let title: string;
	let content: string;
	const t: ToastSettings = {
		message: 'Note created successfully!',
		background: 'variant-filled-success'
	};
	function createNote(): void {
		noteStore.update((notes) => [
			...notes,
			{
                id: crypto.randomUUID(),
                title,
				content,
				tags
			}
        ]);
        title = '';
		content = '';
		tags = [];
		toastStore.trigger(t);
		goto('/');
	}
</script>

<div class="container h-full mx-auto gap-8 flex flex-col">
	<form class="card p-4 flex flex-col gap-3">
		<input class="input h-10" type="search" bind:value={title} placeholder="Note Title" />
		<textarea bind:value={content} class="textarea" rows="5" placeholder="Note content..." />
		<InputChip bind:value={tags} name="tags" placeholder="Tags..." />
		<button type="button" on:click={createNote} class="btn variant-ghost-primary self-end"
			>Create Note</button
		>
	</form>
</div>