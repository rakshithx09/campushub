<script lang="ts">
  import { AppShell } from "@skeletonlabs/skeleton";
  import "../app.postcss";

  // Floating UI for Popups
  import {
    computePosition,
    autoUpdate,
    flip,
    shift,
    offset,
    arrow,
  } from "@floating-ui/dom";
  import { storePopup } from "@skeletonlabs/skeleton";
  storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
  import { serverSelected, currentUser } from "$lib/stores";
  import Header from "$lib/components/Header.svelte";
  import Login from "$lib/components/Login.svelte";
  import ServerSidebar from "$lib/components/ServerSidebar.svelte";
  import ChannelSiderBar from "$lib/components/ChannelSiderBar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  
</script>

{#if $currentUser}
  <AppShell>
    <svelte:fragment slot="header">
      <Header />
    </svelte:fragment>

    <svelte:fragment slot="sidebarLeft">
      <div class="flex h-full overflow-hidden">
        <ServerSidebar user={$currentUser}/>

        {#if $serverSelected}
          <ChannelSiderBar server = {$serverSelected}/>
        {/if}
      </div>
    </svelte:fragment>


    <svelte:fragment slot="pageHeader">Page Header</svelte:fragment>
    <!-- Router Slot -->

    <slot />
    <!-- ---- / ---- -->
    <svelte:fragment slot="pageFooter">
      <Footer />
    </svelte:fragment>
    <!-- (footer) -->
  </AppShell>
{:else}
  <Login />
{/if}
