import { localStorageStore } from '@skeletonlabs/skeleton';
import type { Writable } from 'svelte/store';

type Note = {
	title: string;
	id: string;
	content: string;
	tags: string[];
};

export const noteStore: Writable<Note[]> = localStorageStore('notes', []);