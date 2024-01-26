<script lang="ts">
  import { createChannel, deleteChannel, getChannels } from "$lib/db/pocketbase";
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

  let createDialog: HTMLDialogElement;
  let deleteDialog: HTMLDialogElement;

  $: channelsRequest = updateChannelSet(server.id);

  let channelName = "";
  let channelIdToDelete:string|null;

  async function onCreateChannel() {
    if (channelName) {
      await createChannel(channelName, server);
      channelsRequest = updateChannelSet(server.id);
      channelName = "";
    }
  }


  

  async function onDeleteChannel() {
    if (channelIdToDelete) {
      await deleteChannel(channelIdToDelete);
      channelsRequest = updateChannelSet(server.id);
      channelIdToDelete = "";
    }
  }
</script>

<section>
  <h1>
    <span class="heading">{server.name}</span>

    {#if user.id == server.owner}
      <span class="option-container">
        <span>...</span>
        <div class="options">
          <button
            on:click={() => {
              createDialog.showModal();
            }}>create channel</button
          >
          <button
            on:click={() => {
              deleteDialog.showModal();
            }}>delete channel</button
          >
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

  <dialog bind:this={createDialog} on:submit={onCreateChannel}>
    <p>Create server</p>
    <form method="dialog">
      <label>
        <span>name</span>
        <input type="text" name="name" required bind:value={channelName} />
      </label>
      <button>Create channel</button>
    </form>
  </dialog>

  <dialog bind:this={deleteDialog} on:submit={onDeleteChannel}>
    <p>Create server</p>
    <form method="dialog">
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label>
        <p>channel</p>
        {#await channelsRequest}
          <span>...loading</span>
        {:then channels}
          <select bind:value={channelIdToDelete}>
            {#each channels as channel (channel.id)}
              <option value={channel.id}>
                #{channel.name}
              </option>
            {/each}
          </select>
        {/await}
      </label>
      <button class="bg-red-700">delete channel</button>
    </form>
  </dialog>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    background-color: var(--bg-secondary);
    border-right: 2px solid var(--border);
    width: 10rem;
    text-align: center;
    color: var(--secondary);
  }

  h1 {
    background: var(--bg-accent);
    padding: 0.5rem;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
  }

  .heading {
    flex-grow: 1;
  }

  button {
    color: var(--secondary);
    padding: 0.5rem;
  }

  .selected {
    background-color: var(--bg-active);
  }

  .option-container {
    position: relative;
  }

  .option-container:hover .options {
    display: block;
  }

  .options {
    display: none;
    position: absolute;
    font-size: 0.9rem;
    background-color: var(--bg-surface);
    width: max-content;
    padding: 0.25rem;
    left: -50%;
  }

  dialog {
    margin: auto;
  }
</style>
