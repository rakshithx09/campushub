<script lang="ts">
  import { getChannels } from "$lib/db/pocketbase";
  import { channelSelected, serverSelected } from "$lib/stores";

  async function updateChannelSet(serverId:string) {
    const channels = await getChannels(serverId);
    if (channels.length > 0) {
      channelSelected.set(channels[0]);
    }
    return channels;
  }

  $:channelsRequest = updateChannelSet($serverSelected!.id)
</script>

{#if $serverSelected}
  <section
    class="flex flex-col bg-surface-50-900-token border-r w-40 text-center"
  >
    <h1 class="bg-primary-active-token text-on-primary-token py-2">
      {$serverSelected.name}
    </h1>
    {#await channelsRequest}
      <span>...loading</span>
    {:then channels}
      {#each channels as channel (channel.id)}
        <button
          class={` bg-surface-hover-token p-2 ${
            $channelSelected?.id == channel.id ? "bg-surface-active-token" : ""
          }`}
          on:click={() => {
            channelSelected.set(channel);
          }}
        >
          #{channel.name}
        </button>
      {/each}
    {:catch bar}
      <span>error: {bar}</span>
    {/await}
  </section>
{/if}
