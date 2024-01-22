<script lang="ts">
    import Messages from "$lib/components/Messages.svelte";
import { channelSelected } from "$lib/stores";


</script>

{#if $channelSelected}
    <Messages/>
{:else}
    <p>😢 no channel selected</p>
{/if}