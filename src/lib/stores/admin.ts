import { pb } from "$lib/db/pocketbase";
import type { BaseUser } from "$lib/types";
import { writable } from "svelte/store";

export const admin = writable<BaseUser|null>(pb.authStore.model as BaseUser);

pb.authStore.onChange((auth)=>{
    admin.set(pb.authStore.model as BaseUser)
})


