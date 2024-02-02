import type { ToastType } from "svelte-toasts/types/common";
import { channelSelected, serverSelected } from "./stores";
import { toasts } from "svelte-toasts";

const formatter = new Intl.DateTimeFormat("en-US", { dateStyle: "short", timeStyle: "medium" });


export function pretiffyDateTime(datetimeStr: string) {
    const dateObj = new Date(datetimeStr);
    return formatter.format(dateObj);
}

export function reset() {
    serverSelected.set(null)
    channelSelected.set(null)
}

export function showToast(title: string, description: string, type: ToastType) {
    toasts.add({
        title,
        description,
        duration: 2000, // 0 or negative to avoid auto-remove
        placement: 'bottom-left',
        type,
        theme: 'dark',
    });
}
