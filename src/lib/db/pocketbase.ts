import type { Channel, MessageWithUser } from '$lib/types';
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

export function getImageUrl(record: {
    [key: string]: any;
}, filename: string): string {
    return pb.files.getUrl(
        record,
        filename,
    )
}

export async function getChannels(serverId: string) {
    return (await pb.collection("channels").getFullList({
        filter: `server = "${serverId}"`,
    })) as Channel[];
}

export async function getMessages(channelId: string): Promise<MessageWithUser[]> {
    const response = await pb.collection("messages").getList(1, 50, {
        filter: `channel ="${channelId}"`,
        sort: "created",
        expand: "user",
    });
    return response.items as MessageWithUser[]
} 