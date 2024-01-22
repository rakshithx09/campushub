<script lang="ts">
  import Messages from "$lib/components/Messages.svelte";
  import { channelSelected, serverSelected } from "$lib/stores";
</script>

{#if serverSelected}
  {#if $channelSelected}
    <Messages />
  {:else}
    <p>😢 no channel selected</p>
  {/if}
{:else}
  <!-- TODO: home page goes here -->
{/if}
