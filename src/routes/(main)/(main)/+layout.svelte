<script lang="ts">
  import { serverSelected, currentUser } from "$lib/stores";
  import ServerSidebar from "$lib/components/ServerSidebar.svelte";
  import ChannelSideBar from "$lib/components/ChannelSideBar.svelte";
  import Login from "$lib/components/Login.svelte";
  import Chatbot from "$lib/components/Chatbot.svelte";

  $: user = $currentUser;
  $: server = $serverSelected;
</script>

<svelte:head>
</svelte:head>

<main>
  {#if user}
    <ServerSidebar {user} />
    {#if server}
      <ChannelSideBar {server} {user} />
    {/if}
    <div class="content">
      <slot />
    </div>
  {:else}
    <Login />
  {/if}
</main>

<style>
  main {
    display: flex;
    width: 100%;
    height: calc(100% - 80px);
  }

  .content {
    flex-grow: 1;
    width: 100%;
    overflow-y: scroll;
    min-height: 100%;
  }
</style>
