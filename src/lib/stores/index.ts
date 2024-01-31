import { pb } from "$lib/db/pocketbase";
import { writable } from "svelte/store";
import type { BaseUser, ServerModel, ChannelModel, CourseModel } from "$lib/types";
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
export const serverSelected = writable<ServerModel | null>(null);

// Servers
export const channelSelected = writable<ChannelModel | null>(null);

export const courseSelected = writable<CourseModel | null>(null);