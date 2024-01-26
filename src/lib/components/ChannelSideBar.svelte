<script lang="ts">
  import { getChannels } from "$lib/db/pocketbase";
  import { channelSelected } from "$lib/stores";
  import type { BaseUser, Server } from "$lib/types";

  export let server: Server;
  export let user: BaseUser;

  async function updateChannelSet(serverId: string) {
    const channels = await getChannels(serverId);
    if (channels.length > 0) {
      channelSelected.set(channels[0]);
    }
    return channels;
  }

  $: channelsRequest = updateChannelSet(server.id);
</script>

<section
>
  <h1>
    <span class="heading">{server.name}</span>

    {#if user.id==server.owner}
      <span class="option-container">
        <span>...</span>
        <div class="options">
            <button>create channel</button>
        </div>
      </span>
    {/if}
  </h1>
  {#await channelsRequest}
    <span>...loading</span>
  {:then channels}
    {#each channels as channel (channel.id)}
      <button
        class={` bg-surface-hover-token p-2 ${
          $channelSelected?.id == channel.id ? "selected" : ""
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


<style>
  section{
    display: flex;
    flex-direction: column;
    background-color: var(--bg-secondary);
    border-right: 2px solid var(--border);
    width: 10rem;
    text-align: center;
    color: var(--secondary);
  }

  h1{
    background: var(--bg-accent);
    padding: .5rem;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
  }

  .heading{
    flex-grow: 1;
  }

  button{
    color: var(--secondary);
    padding: .5rem;
  }

  .selected{
    background-color: var(--bg-active);
  }

  .option-container{
    position: relative;
  }

  .option-container:hover .options{
      display: block;
    }

  .options{
    display: none;
    position: absolute;
    font-size: .9rem;
    background-color: var(--bg-surface);
    width: max-content;
    padding: .25rem;
  }
</style>