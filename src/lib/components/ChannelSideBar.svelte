<script lang="ts">
  import {
    createChannel,
    deleteChannel,
    getChannels,
  } from "$lib/db/pocketbase";
  import { channelSelected } from "$lib/stores";
  import type { BaseUser, Server } from "$lib/types";
  import { ServersTypeOptions } from "$lib/types/pb";
  import AttendenceDialog from "./AttendenceDialog.svelte";

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
  let attendenceDialog: HTMLDialogElement;

  $: channelsRequest = updateChannelSet(server.id);

  let channelName = "";
  let channelIdToDelete: string | null;

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
      <div class="dropdown bg-transparent">
        <div tabindex="0" role="button" class="flex items-center h-1">
          <span class="three-dots">...</span>
        </div>
        <ul
          class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-[9rem]"
        >
          <li>
            <button
              on:click={() => {
                createDialog.showModal();
              }}>Create Channel</button
            >
          </li>
          <li>
            <button
              on:click={() => {
                deleteDialog.showModal();
              }}>Delete Channel</button
            >
          </li>

          {#if server.type == ServersTypeOptions.SUBJECT}
            <li>
              <button
                on:click={() => {
                  attendenceDialog.showModal();
                }}>attendence</button
              >
            </li>
          {/if}
        </ul>
      </div>
    {/if}
  </h1>
  {#await channelsRequest}
    <span>...loading</span>
  {:then channels}
    {#each channels as channel (channel.id)}
      <button
        class={` bg-surface-hover-token p-2 text-right ${
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
    <p>Create Channel</p>
    <form method="dialog">
      <label>
        <span>name</span>
        <input type="text" name="name" required bind:value={channelName} />
      </label>
      <button>Create Channel</button>
    </form>
  </dialog>

  <dialog bind:this={deleteDialog} on:submit={onDeleteChannel}>
    <p>Create Channel</p>
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
      <button class="bg-red-700">Delete Channel</button>
    </form>
  </dialog>

  <dialog bind:this={createDialog} on:submit={onCreateChannel}>
    <p>Delete Channel</p>
    <form method="dialog">
      <label>
        <span>name</span>
        <input type="text" name="name" required bind:value={channelName} />
      </label>
      <button>Create Channel</button>
    </form>
  </dialog>

  <AttendenceDialog bind:attendenceDialog {server} />
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    background-color: var(--bg-secondary);
    border-right: 2px solid var(--border);
    width: 15rem;
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

  dialog {
    margin: auto;
    border-radius: 15px;
    background-color: rgba(65, 65, 63, 0.24);
    font-family: "Times New Roman", Times, serif;
    padding: 2%;
  }
  dialog form {
    background-color: rgba(65, 65, 63, 0);
  }
  .bg-surface-hover-token {
    font-family: "EB Garamond", serif;
    font-weight: 700;
    font-size: medium;
  }
  .heading {
    font-family: "Irish Grover",  system-ui;
    font-size: 32px;
  }
  .three-dots {
    margin-bottom: 10px;
    margin-right: 0.2rem;
    font-size: 25px;
    font-weight: 700;
  }
</style>
