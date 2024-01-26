<script lang="ts">
  import type { BaseUser } from "$lib/types";

  interface Message {
    id: string;
    user: BaseUser;
    avatar: string;
    content: string;
    createdAt: string;
  }

  export let message: Message;
  export let currentUser: BaseUser;
</script>

<div
  class={`chat  ${
    message.user.id == currentUser.id ? "chat-end" : "chat-start"
  }`}
>
  <div class="chat-image avatar">
    <div class="w-10 rounded-full">
      <img
        class="avatar"
        alt="Tailwind CSS chat bubble component"
        src={message.avatar}
      />
    </div>
  </div>
  <div class="chat-header">
    @{message.user.name}
  </div>
  <div class="chat-bubble">{message.content}</div>
</div>

<style lang="">
  /* .avatar {
    object-fit: cover;
    object-position: center;
    max-width: 60px;
    height: 60px;
    aspect-ratio: 1;
    border-radius: 100%;
  } */
</style>
