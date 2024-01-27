import { pb } from "$lib/db/pocketbase";
import type { BaseUser } from "$lib/types";
import { writable } from "svelte/store";

export const admin = writable<BaseUser|null>(null);

if(pb.authStore.isAdmin){
    admin.set(pb.authStore.model as BaseUser)
}else{
    admin.set(null)
}

pb.authStore.onChange((auth)=>{
    if(pb.authStore.isAdmin){
        admin.set(pb.authStore.model as BaseUser)
    }else{
        admin.set(null)
    }
})