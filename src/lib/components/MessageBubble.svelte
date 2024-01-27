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
  class={`chat mt-auto ${/* 
    message.user.id == currentUser.id ? "chat-end" : "chat-start"
   */"chat-start"}`}
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
    <time class="text-xs opacity-50">{message.createdAt.slice(9,message.createdAt.length-6)}</time>
  </div>
  <p class="chat-bubble">{message.content}</p>
</div>

<style>
  /* .avatar {
    object-fit: cover;
    object-position: center;
    max-width: 60px;
    height: 60px;
    aspect-ratio: 1;
    border-radius: 100%;
  } */
  .chat-bubble{
    font-family: 'Times New Roman', Times, serif;
  }
  .chat-header{
   font-family: 'Inter', sans-serif;
   font-weight: 100;
   padding-bottom: 2px;
   padding-top: 5px;


  }
  
</style>
