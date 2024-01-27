<script lang="ts">
  import { getMessages, pb } from "$lib/db/pocketbase";
  import { channelSelected, currentUser } from "$lib/stores";
  import type { BaseUser, MessageWithUser } from "$lib/types";
  import { pretiffyDateTime } from "$lib/utils";
  import { onMount, onDestroy } from "svelte";
  import MessageBubble from "./MessageBubble.svelte";

  let newMessage: string;
  let messages: MessageWithUser[] = [];
  $: channelId = $channelSelected!.id;
  $: user = $currentUser!;

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
        content: message.content!,
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
              .getOne(record.user!);
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
      user: user.id,
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

<section>
  {#if messages}
    <div class="messages" use:scrollChatBottom={messages}>
      {#each formatMessage(messages) as message (message.id)}
        <!-- <div
          class={`message  ${
            message.user.id == $currentUser?.id ? "reverse" : ""
          }`}
        >
          <div class="inner-message">
            <div class="message-head">
              <span>@{message.user.name}</span>
              <small>{message.createdAt}</small>
            </div>
            <p>{message.content}</p>
          </div>
          <img src={message.avatar} alt="" class="avatar" />
        </div> -->
        <MessageBubble {message} currentUser={user} />
      {/each}
    </div>
  {:else}
    <p>No message let you be the first to start conversation</p>
  {/if}

  <div class="message-box">
    <button class="left">+</button>
    <textarea
      bind:value={newMessage}
      class="textarea"
      name="prompt"
      placeholder=""
      rows="1"
      on:keydown={(e)=>{e.key==='Enter' ? sendMessage() : null}}
    />
    <button on:click={sendMessage} class="right" > Send</button>
  </div>
</section>

<style>
  section {
    width: 100%;
    min-height: calc( 100vh - 80px);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 90px;
    z-index: 0;
  }

  .messages {
    /* padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem; */
   /*  height: 100%; */
  }

  /* .avatar {
    object-fit: cover;
    object-position: center;
    max-width: 60px;
    height: 60px;
    aspect-ratio: 1;
    border-radius: 100%;
  } */

  /* .message {
    display: flex;
    background-color: var(--bg-accent);
    flex-direction: row;
    justify-content: flex-end;
    gap: 1rem;
    padding: 0.5rem;
    width: 75%;
    align-self: self-end;
    border-radius: var(--radius);
  } */

  /* .reverse {
    justify-content: flex-start;
    flex-direction: row-reverse;
    align-self: self-start;
  } */

  /* .inner-message {
    flex-grow: 1;
  } */s

  p {
    padding: 0;
  }

  /* .message-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  } */

  .message-box {
    height: 40px;
  display: grid;
  grid-template-columns: 40px auto 80px;
  position: absolute;  
  bottom: 40px;  /* Adjust the value to lift it from the bottom */
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
  
    
  }

  .message-box .left {
    background-color: rgba(90, 90, 118, 0.308);
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  .message-box .right {
    background-color: rgba(90, 90, 118, 0.308);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .textarea{
    background-color: rgba(90, 90, 118, 0.308);
    border-radius: 0;
  }
</style>
