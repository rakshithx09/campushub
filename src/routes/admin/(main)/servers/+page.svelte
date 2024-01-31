<script lang="ts">
  import { getAllServers, getFileUrl } from "$lib/db/pocketbase";
  import { deleteServer } from "$lib/db/pocketbase";
  import type { Server } from "$lib/types";

  let serverToDelete: Server;
  let deleteDialog: HTMLDialogElement;
  let servers = getAllServers()

   async function onDeleteServer() {
    console.log("called")
    if (serverToDelete) {
      await deleteServer(serverToDelete.id);
      servers = getAllServers()
    }
  }
</script>

<section>
  <div class="acitvity-bar">
    <div>
      <input type="text" placeholder="search server" />
      <button class="search">Search</button>
    </div>
    <a href="servers/create" class="server-create"> create server </a>
  </div>
  <div class="empty" style="margin-bottom:30px"></div>
  <div class="servers">
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
        are you really want to delete <b><i>{serverToDelete?.name}</i></b> once deleted cannot be undone
      </p>
      <button class="bg-red-700">delete channel</button>
    </form>
  </dialog>
</section>

<style>
main {
    display: flex;
    width: 100%;
    height: calc(100% - 80px);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  body {
    background-color: #121212;
    color: #ffffff;
    margin: 0;
  }

  .content {
    flex-grow: 1;
    width: 100%;
    overflow-y: scroll;
    min-height: 100%;
    padding: 20px;
    background-color: #1e1e1e;
    transition: background-color 0.3s ease;
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    background-color: #333;
    color: #ffffff;
    padding: 20px;
    width: 250px;
    box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.1);
    transition: width 0.3s ease, box-shadow 0.3s ease;
  }

  .sidebar h1 {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }

  .sidebar nav {
    display: flex;
    flex-direction: column;
  }

  .sidebar a {
    color: #ffffff;
    text-decoration: none;
    padding: 15px 0;
    font-size: 18px;
    transition: background-color 0.3s ease;
  }

  .sidebar a:hover {
    background-color: #444;
  }

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
    transition: transform 0.3s ease, box-shadow 0.3s ease;
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

  .activity-bar {
    display: flex;
    width: 100%;
    margin-top: 20px;
    transition: margin-top 0.3s ease;
  }

  input {
    height: 50px;
    width: 100%;
    padding: 15px;
    border: 1px solid #555;
    border-radius: 8px;
    transition: box-shadow 0.3s ease, border-color 0.3s ease;
  }

  input:focus {
    outline: none;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    border-color: #4c8bf5;
  }

  .server-create {
    padding: 15px;
    border-radius: 12px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    background-color: #4c8af570;
    color: #ffffff;
  
    
  }
  .search{
    margin-top: 10x;
    margin-bottom: 30px;
  
  }
</style>
