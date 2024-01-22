import { pb } from "$lib/db/pocketbase";
import { writable } from "svelte/store";
import type { BaseUser ,Server,Channel} from "$lib/types";


// User 
export const currentUser = writable<BaseUser|null>(pb.authStore.model as BaseUser);

pb.authStore.onChange((auth)=>{
    currentUser.set(pb.authStore.model as BaseUser)
})

// Servers
export const serverSelected = writable<Server|null>(null);

// Servers
export const channelSelected = writable<Channel|null>(null);