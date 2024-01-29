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
      <div tabindex="0" role="button" class="flex items-center h-1"><span class="three-dots">...</span></div>
      <ul  class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-[9rem]">
        <li>
          <button
            on:click={() => {
              createDialog.showModal();
            }}
            class="hover:bg-primary hover:text-white transition"
          >Create Channel</button>
        </li>
        <li>
          <button
            on:click={() => {
              deleteDialog.showModal();
            }}
            class="hover:bg-primary hover:text-white transition"
          >Delete Channel</button>
        </li>
      </ul>
    </div>
    {/if}
  </h1>
  {#await channelsRequest}
    <span>...loading</span>
  {:then channels}
    {#each channels as channel (channel.id)}
      <button 
        class={`bg-surface-hover-token p-2 ${
          $channelSelected?.id == channel.id ? "selected" : ""
        } fade-in`}
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
      <button class="hover:bg-primary hover:text-white transition">Create Channel</button>
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
      <button class="bg-red-700 hover:bg-red-900 hover:text-white transition">Delete Channel</button>
    </form>
  </dialog>
</section>

<style>
  
 
  section {
    display: flex;
    flex-direction: column;
    background-color: #353b4e;
    width: 15rem;
    text-align: center;
    color: var(--secondary);
    border-top-right-radius: 20px;
    border-bottom-right-radius: 0px;
    border: 2px solid rgba(255, 255, 255, 0.3); /* Add a border for the glass effect */
    border-left: #0b0352;
    border-top: #0b0352;
  }

  h1 {
    background: #2e2e2e;
    border-top-right-radius: 20px;
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
    background-color: rgba(255, 255, 255, 0.322);
  }

  .dropdown-content {
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 0.3s ease, transform 0.3s ease, background-color 0.3s ease;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border-radius: 10px;
  }

  .dropdown:hover .dropdown-content {
    opacity: 1;
    transform: translateY(0);
    background-color: rgba(32, 31, 31, 0.8);
  }

  .bg-surface-hover-token {
    font-family: 'EB Garamond', serif;
    font-weight: 700;
    font-size: medium;
    transition: background-color 0.3s ease, color 0.3s ease;
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




