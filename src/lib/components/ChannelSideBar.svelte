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

  $: console.log(server)
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

  {#if server.type == ServersTypeOptions.SUBJECT}
    <AttendenceDialog bind:attendenceDialog {server} />
  {/if}
</section>

<style>
  section {
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: rgb(44, 50, 83);
    width: 15rem;
    text-align: center;
    color: var(--secondary);
    border: 2px solid rgba(139, 138, 139, 0.616);
    border-left: 0;
    border-bottom: 0;
  }

  section::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 1px; /* Adjust the width of the shadow as needed */
    height: 100%;
    box-shadow: 8px 0 8px rgb(31, 37, 68); /* Adjust spread and blur for smoothness */
  }
  h1 {
    background: rgb(31, 37, 68);

    padding: 0.5rem;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
  }

  .heading {
    flex-grow: 1;
    font-size: 25px;
  }

  button {
    color: var(--secondary);
    padding: 0.5rem;
  }

  .selected {
    background-color: rgba(255, 208, 236, 0.247);
  }

  .dropdown-content {
    opacity: 0;
    transform: translateY(-20px);
    transition:
      opacity 0.3s ease,
      transform 0.3s ease,
      background-color 0.3s ease;
    background-color: rgb(129, 104, 157);
    backdrop-filter: blur(10px);
    border-radius: 10px;
  }

  .dropdown:hover .dropdown-content {
    opacity: 1;
    transform: translateY(0);
    background-color: rgba(56, 53, 97, 0.651);
  }

  .bg-surface-hover-token {
    font-family: "EB Garamond", serif;
    font-weight: 700;
    font-size: medium;
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
  }

  .bg-surface-hover-token:hover {
    background-color: var(--primary);
    color: rgb(0, 0, 0);
  }

  .fade-in {
    opacity: 0;
    animation: fadeIn 0.5s ease forwards;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .three-dots {
    margin-bottom: 10px;
    margin-right: 0.2rem;
    font-size: 25px;
    font-weight: 700;
  }
</style>
