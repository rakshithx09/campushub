<script lang="ts">
  // Floating UI for Popups
  // import {
  //   computePosition,
  //   autoUpdate,
  //   flip,
  //   shift,
  //   offset,
  //   arrow,
  // } from "@floating-ui/dom";
  // import { storePopup } from "@skeletonlabs/skeleton";
  // storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
  import { serverSelected, currentUser } from "$lib/stores";
  import ServerSidebar from "$lib/components/ServerSidebar.svelte";
  import ChannelSiderBar from "$lib/components/ChannelSiderBar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Login from "$lib/components/Login.svelte";

  $: user = $currentUser;
  $: server = $serverSelected;
</script>

<div class="root">
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
</div>

<style>
  .root {
    display: flex;
    width: 100%;
    height: calc(100% - 80px);
  }

  .content {
    flex-grow: 1;
    width:100%;
    overflow-y: auto;
    min-height: 100%;
  }
</style>
