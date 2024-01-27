<script lang="ts">
  import { getAllServers, getImageUrl } from "$lib/db/pocketbase";
  import { deleteServer } from "$lib/db/pocketbase";

  let deleteServerId: string;
  let deleteDialog: HTMLDialogElement;
  let servers = getAllServers()

   async function onDeleteServer() {
    if (deleteServerId) {
      await deleteServer(deleteServerId);
      servers = getAllServers()
    }
  }
</script>

<section>
  <div class="acitvity-bar">
    <div>
      <input type="text" placeholder="search server" />
      <button>Search</button>
    </div>
    <a href="servers/create" class="bg-green-600"> create server </a>
  </div>
  <div class="servers">
    {#await servers}
      <span>...loading</span>
    {:then servers}
      {#each servers as server (server.id)}
        <div class="card">
          <img
            src={getImageUrl(server, server.image)}
            alt={server.name}
            class="w-full aspect-video"
          />
          <span>{server.name}</span>
          <button
            class="delete"
            on:click={() => {
              deleteDialog.showModal();
              deleteServerId = server.id;
            }}>Delete</button
          >
        </div>
      {/each}
    {:catch err}
      <span>{err}</span>
    {/await}
  </div>

  <dialog bind:this={deleteDialog} on:submit={onDeleteServer}>
    <p>delete server</p>
    <form method="dialog">
      <p>
        are you really want to delete {deleteServerId} once deleted cannot be undone
      </p>
      <button class="bg-red-700">delete channel</button>
    </form>
  </dialog>
</section>

<style>
  .servers {
    display: flex;
    flex-wrap: nowrap;
    gap: 1rem;
    padding: 1rem;
  }

  .card {
    width: 12rem;
    background-color: var(--bg-accent);
    padding: 1rem;
  }

  img {
    width: 100%;
    aspect-ratio: 16/9;
  }

  .delete {
    background: rgb(154, 2, 2);
    width: 100%;
    padding: 0.5rem;
  }

  .acitvity-bar {
    display: flex;
    width: 100%;
  }

  input {
    height: 2.5rem;
    width: 100%;
    padding: 0.2rem;
  }
</style>
