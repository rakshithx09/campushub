<script lang="ts">
  import { getAllServers, getFileUrl } from "$lib/db/pocketbase";
  import { deleteServer } from "$lib/db/pocketbase";
  import type { ServerModel } from "$lib/types";

  let serverToDelete: ServerModel;
  let deleteDialog: HTMLDialogElement;
  let servers = getAllServers();

  async function onDeleteServer() {
    console.log("called");
    if (serverToDelete) {
      await deleteServer(serverToDelete.id);
      servers = getAllServers();
    }
  }
</script>

<section>
  <div class="acitvity-bar">
    <!-- <div>
      <input type="text" placeholder="search server" />
      <button class="search">Search</button>
    </div> -->
    <a href="servers/create" class="server-create bg-green-600 p-4 rounded-md text-lg"> create server </a>
  </div>
  
  <div class="servers mt-8">
    {#await servers}
      <span>...loading</span>
    {:then servers}
      {#each servers as server (server.id)}
        <div class="card">
          <img
            src={getFileUrl(server, server.image)}
            alt={server.name}
            class="w-full aspect-video"
          />
          <span>{server.name}</span>
          <button
            class="delete"
            on:click={() => {
              deleteDialog.showModal();
              serverToDelete = server;
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
      <p class="text-center">
        are you really want to delete <b><i>{serverToDelete?.name}</i></b> once deleted
        cannot be undone
      </p>
      <button class="bg-red-700">delete channel</button>
    </form>
  </dialog>
</section>

<style>
  .servers {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
    justify-content: space-evenly;
  }

  .card {
    width: 250px;
    background: linear-gradient(45deg, #2c3e50, #1f2c38);
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
  }

  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  }

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 15px;
  }

  .delete {
    margin-top: 10px;
    background: #c82333;
    color: #ffffff;
    width: 100%;
    padding: 10px;
    text-align: center;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .delete:hover {
    background: #fa0019;
  }

  input {
    height: 50px;
    width: 100%;
    padding: 15px;
    border: 1px solid #555;
    border-radius: 8px;
    transition:
      box-shadow 0.3s ease,
      border-color 0.3s ease;
  }

  input:focus {
    outline: none;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    border-color: #4c8bf5;
  }

  .server-create {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    color: #ffffff;
  }
  .search {
    margin-top: 10x;
    margin-bottom: 30px;
  }
</style>
