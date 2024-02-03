import { pb } from "$lib/db/pocketbase";
import type { UserModel } from "$lib/types";
import { writable } from "svelte/store";

export const admin = writable<UserModel|null>(null);

if(pb.authStore.isAdmin){
    admin.set(pb.authStore.model as UserModel)
}else{
    admin.set(null)
}

pb.authStore.onChange((auth)=>{
    if(pb.authStore.isAdmin){
        admin.set(pb.authStore.model as UserModel)
    }else{
        admin.set(null)
    }
})