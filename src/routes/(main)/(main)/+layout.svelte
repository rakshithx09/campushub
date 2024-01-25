<script lang="ts">
  import { serverSelected, currentUser } from "$lib/stores";
  import ServerSidebar from "$lib/components/ServerSidebar.svelte";
  import ChannelSiderBar from "$lib/components/ChannelSiderBar.svelte";
  import Login from "$lib/components/Login.svelte";

  $: user = $currentUser;
  $: server = $serverSelected;
</script>

<main>
  {#if user}
    <ServerSidebar {user} />
    {#if server}
      <ChannelSiderBar {server} />
    {/if}
    <div class="content">
      <slot/>
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
    width:100%;
    overflow-y: scroll;
    min-height: 100%;
  }
</style>
