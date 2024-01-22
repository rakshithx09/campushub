<script lang="ts">
  import { getMessages, pb } from "$lib/db/pocketbase";
  import { channelSelected, currentUser } from "$lib/stores";
  import type { MessageWithUser } from "$lib/types";
  import { Avatar } from "@skeletonlabs/skeleton";
  import { onMount, onDestroy } from "svelte";
  import Header from "./Header.svelte";

  let newMessage: string;
  let messages: MessageWithUser[] = [];
  let elemChat: HTMLElement;

  $: channelId = $channelSelected!.id;

  let unsubscribe: () => void;

  onMount(async () => {
    // messages = await getMessages(channelId);
    unsubscribe = await pb
      .collection("messages")
      .subscribe("*", async ({ action, record }) => {
        if (action === "create") {
          // Fetch associated user
          if (record.channel == channelId) {
            const user = await pb.collection("users").getOne(record.user);
            record.expand = { user };
            messages = [...messages, record as MessageWithUser];
          }
        }
        if (action === "delete") {
          messages = messages.filter((m) => m.id !== record.id);
        }
      });
  });

  async function updateMessage(channelId: string) {
    messages = await getMessages(channelId);
  }

  $: {
    updateMessage(channelId);
  }

  onDestroy(() => {
    unsubscribe?.();
  });

  async function sendMessage() {
    if(!newMessage) return;
    const data = {
      content: newMessage,
      user: $currentUser!.id,
      channel: channelId,
    };
    await pb.collection("messages").create(data);
    newMessage = "";
  }

  function scrollChatBottom(node: HTMLElement, dumb: any) {
    const update = () => {
      const item = node.lastElementChild;
      if (item) item.scrollIntoView({ block: "center" });
    };
    update();
    return { update };
  }
</script>

<section class="overflow-auto flex flex-col align-bottom" use:scrollChatBottom={messages}>
  {#if messages}
    <div class="messages">
      {#each messages as message (message.id)}
        {#if message.expand.user.id == $currentUser?.id}
          <div class="grid grid-cols-[1fr_auto] gap-2">
            <div class="card p-4 rounded-tr-none space-y-2">
              <header class="flex justify-between items-center">
                <p class="font-bold">@{message.expand.user.username}</p>
                <small class="opacity-50">{message.created}</small>
              </header>
              <p>{message.content}</p>
            </div>
            <Avatar
              src={pb.files.getUrl(
                message.expand.user,
                message.expand.user.avatar ?? "",
                { thumb: "50x50" },
              )}
              width="w-12"
            />
          </div>
        {:else}
          <div class="grid grid-cols-[auto_1fr] gap-2">
            <Avatar
              src={pb.files.getUrl(
                message.expand.user,
                message.expand.user.avatar ?? "",
                { thumb: "50x50" },
              )}
              width="w-12"
            />
            <div class="card p-4 variant-soft rounded-tl-none space-y-2">
              <header class="flex justify-between items-center">
                <p class="font-bold">@{message.expand.user.username}</p>
                <small class="opacity-50">{message.created}</small>
              </header>
              <p>{message.content}</p>
            </div>
          </div>
        {/if}
      {/each}
    </div>
  {:else}
    <p>No message you be the first to start conversation</p>
  {/if}

  <div
    class="input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-container-token"
  >
    <button class="input-group-shim">+</button>
    <textarea
      bind:value={newMessage}
      class="bg-transparent border-0 ring-0"
      name="prompt"
      id="prompt"
      placeholder="Write a message..."
      rows="1"
    />
    <button class="variant-filled-primary" type="submit" on:click={sendMessage}>
      Send</button
    >
  </div>
</section>
