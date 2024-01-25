import type { Channel, MessageWithUser, Server } from '$lib/types';
import PocketBase from 'pocketbase';

export const pb = new PocketBase('http://127.0.0.1:8090');

export function logout() {
    pb.authStore.clear();
}

export async function getServers(userId: string) {
    return await pb.collection("members").getFullList({
        filter: `user = "${userId}"`,
        expand: "server",
    });
}

export async function getAllServers() {
    return await pb.collection<Server>("servers").getFullList();
}

export function getImageUrl(record: {
    [key: string]: any;
}, filename?: string): string {
    if (!filename) return ""
    return pb.files.getUrl(
        record,
        filename,
    )
}

export async function getChannels(serverId: string) {
    return (await pb.collection<Channel>("channels").getFullList({
        filter: `server = "${serverId}"`,
    }));
}

export async function getMessages(channelId: string) {
    const response = await pb.collection<MessageWithUser>("messages").getList(1, 50, {
        filter: `channel ="${channelId}"`,
        sort: "created",
        expand: "user",
    });
    return response.items
} 


