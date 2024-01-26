import type { Channel, MemberWithServer, MessageWithUser, Server } from '$lib/types';
import PocketBase from 'pocketbase';

export const pb = new PocketBase('http://127.0.0.1:8090');

export function logout() {
    pb.authStore.clear();
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
    return await pb.collection<Channel>("channels").getFullList({
        filter: `server = "${serverId}"`,
    });
}

export async function getMessages(channelId: string) {
    const response = await pb.collection<MessageWithUser>("messages").getList(1, 50, {
        filter: `channel ="${channelId}"`,
        sort: "created",
        expand: "user",
    });
    return response.items
}

export async function getServers(userId: string) {
    const memberList = await pb.collection<MemberWithServer>("members").getFullList({
        filter: `user = "${userId}"`,
        expand: "server",
    });

    return memberList.map(memberModel => memberModel.expand.server)
}

export async function getAllViewableServers(userId: string) {
    return await pb.collection<Server>("servers").getFullList({
        filter: `public=true or id  in (select server_id from members where user = "${userId}")`
    }
    );
}


export async function createChannel(name:string,server:Server){
    await pb.collection('channels').create({
        name:name,
        server:server.id
    });
}

export async function deleteChannel(channelId:string){
    await pb.collection('channels').delete(channelId);
}