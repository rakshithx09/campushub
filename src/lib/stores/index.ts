import { pb } from "$lib/db/pocketbase";
import { writable } from "svelte/store";
import type { BaseUser, Server, Channel } from "$lib/types";
import { reset } from "$lib/utils";

// User 

function getUser() {
    if (pb.authStore.isAdmin)
        return null
    return pb.authStore.model as BaseUser | null
}

export const currentUser = writable<BaseUser | null>(getUser());

pb.authStore.onChange((auth) => {
    currentUser.set(getUser())
    reset()

})

// Servers
export const serverSelected = writable<Server | null>(null);

// Servers
export const channelSelected = writable<Channel | null>(null);