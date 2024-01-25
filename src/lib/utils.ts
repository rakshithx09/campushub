import { goto } from "$app/navigation";
import { channelSelected, serverSelected } from "./stores";

const formatter = new Intl.DateTimeFormat("en-US",{ dateStyle:"short",timeStyle:"medium"});


export function pretiffyDateTime(datetimeStr:string){
    const dateObj = new Date(datetimeStr);
    return formatter.format(dateObj);
}

export function reset(){
    serverSelected.set(null)
    channelSelected.set(null)
    goto("/")
}