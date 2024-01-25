<script lang="ts">
  import { getMessages, pb } from "$lib/db/pocketbase";
  import { channelSelected, currentUser } from "$lib/stores";
  import type { BaseUser, MessageWithUser } from "$lib/types";
  import { pretiffyDateTime } from "$lib/utils";
  import { onMount, onDestroy } from "svelte";

  let newMessage: string;
  let messages: MessageWithUser[] = [];
  $: channelId = $channelSelected!.id;

  let unsubscribe: () => void;

  function formatMessage(messages: MessageWithUser[]) {
    return messages.map((message) => {
      return {
        id: message.id,
        user: message.expand.user,
        avatar: pb.files.getUrl(
          message.expand.user,
          message.expand.user.avatar ?? "",
          { thumb: "50x50" },
        ),
        content: message.content,
        createdAt: pretiffyDateTime(message.created),
      };
    });
  }

  onMount(async () => {
    unsubscribe = await pb
      .collection<MessageWithUser>("messages")
      .subscribe("*", async ({ action, record }) => {
        if (action === "create") {
          // Fetch associated user
          if (record.channel == channelId) {
            const user = await pb
              .collection<BaseUser>("users")
              .getOne(record.user);
            record.expand = { user };
            messages = [...messages, record];
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
    if (!newMessage) return;
    const data = {
      content: newMessage,
      user: $currentUser!.id,
      channel: channelId,
    };
    await pb.collection("messages").create(data);
    newMessage = "";
  }

  function scrollChatBottom(dumb: any) {
    const update = () => {
      const item = document.querySelector(".message-box");
      if (item) item.scrollIntoView({ block: "center" });
    };
    update();
    return { update };
  }
</script>

<section use:scrollChatBottom>
  {#if messages}
    <div class="messages">
      {#each formatMessage(messages) as message (message.id)}
        <div
          class={`message  ${
            message.user.id == $currentUser?.id ? "reverse" : ""
          }`}
        >
          <div class="inner-message">
            <div class="message-head">
              <span>@{message.user.username}</span>
              <small>{message.createdAt}</small>
            </div>
            <p>{message.content}</p>
          </div>
          <img src={message.avatar} alt="" class="avatar" />
        </div>
      {/each}
    </div>
  {:else}
    <p>No message let you be the first to start conversation</p>
  {/if}

  <div class="message-box">
    <button>+</button>
    <textarea
      bind:value={newMessage}
      name="prompt"
      placeholder="Write a message..."
      rows="1"
    />
    <button on:click={sendMessage}> Send</button>
  </div>
</section>

<style>
  section {
    width: 100%;
    min-height: 100%;
  }

  .messages {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .avatar {
    object-fit: cover;
    object-position: center;
    max-width: 60px;
    height: 60px;
    aspect-ratio: 1;
    border-radius: 100%;
  }

  .message {
    display: flex;
    background-color: var(--bg-accent);
    flex-direction: row;
    justify-content: flex-end;
    gap: 1rem;
    padding: 0.5rem;
    width: 75%;
    align-self: self-end;
    border-radius: var(--radius);
  }

  .reverse {
    justify-content: flex-start;
    flex-direction: row-reverse;
    align-self: self-start;
  }

  .inner-message {
    flex-grow: 1;
  }

  p {
    padding: 0;
  }

  .message-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .message-box {
    margin-top: auto;
    height: 40px;
    display: grid;
    grid-template-columns: 40px auto 80px;
  }

  .message-box button {
    background-color: aqua;
  }
</style>
