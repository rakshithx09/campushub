<script lang="ts">
    import type { BaseUser } from "$lib/types";
  export let content: string;
  export let src: string;
  export let username: string;
  export let message:{
    id: string;
    user: BaseUser;
    avatar: string;
    content: string;
    createdAt: string;
    
}
export let currentUser
</script>

<div class={`chat  ${
    message.user.id == $currentUser?.id ? "chat-end" : "chat-start"
  }`}>
  <div class="chat-image avatar">
    <div class="w-10 rounded-full">
      <img class="avatar" alt="Tailwind CSS chat bubble component" {src} />
    </div>
  </div>
  <div class="chat-header">
    @{username}
  </div>
  <div class="chat-bubble">{content}</div>
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
