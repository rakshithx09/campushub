<script lang="ts">
  import Messages from "$lib/components/Messages.svelte";
  import Landing from "$lib/components/Landing.svelte";
  import { channelSelected, serverSelected } from "$lib/stores";
</script>

{#if $serverSelected}
  {#if $channelSelected}
    <Messages />
  {:else}
    <p>😢 no channel selected</p>
  {/if}
{:else}
  <Landing />
{/if}
