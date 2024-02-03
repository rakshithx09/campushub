<script lang="ts">
  import type { UserModel } from "$lib/types";

  interface Message {
    id: string;
    user: UserModel;
    avatar: string;
    content: string;
    createdAt: string;
  }

  export let message: Message;
  export let currentUser: UserModel;
</script>

<div
  class={`chat text-sm ${
    message.user.id == currentUser.id ? "chat-end" : "chat-start"
  }`}
>
  <img
    class="chat-image w-10 aspect-square rounded-full"
    alt={message.user.name}
    src={message.avatar}
  />
  <div class="chat-header text-xs">
    @{message.user.name}
    <time class="text-xs font-thin opacity-50"
      >{message.createdAt.slice(9, message.createdAt.length - 6)}</time
    >
  </div>
  <p class="chat-bubble">{message.content}</p>
</div>
