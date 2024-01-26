<script lang="ts">
  import { getAllServers, getImageUrl } from "$lib/db/pocketbase";
  import { ServersTypeOptions } from "$lib/types/pb";

  const serverTypes = Object.values(ServersTypeOptions);
</script>

<section>
  <div class="acitvity-bar">
    <div>
      <input type="text" />
      <button></button>
    </div>
    <button> create server </button>
  </div>
  <div class="servers">
    {#await getAllServers()}
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
          <button class="delete">Delete</button>
        </div>
      {/each}
    {:catch err}
      <span>{err}</span>
    {/await}
  </div>

  <dialog open>
    <p>Create server</p>
    <form method="dialog">
      <div>
        <label>
          <span>name</span>
          <input type="text"/>
        </label>
        <label>
          <span>type</span>
          <select value={serverTypes[0]}>
            {#each serverTypes as option}
              <option value={option}>{option}</option>
            {/each}
          </select>
        </label>
      </div>
      <button>Create</button>
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

  dialog {
    margin: auto;
  }


  form {
    width: 100%;
    max-width: 400px;
    flex-grow: 1;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: color-mix(in srgb, currentColor 20%, transparent);
    border-radius: var(--radius);
  }

  label {
    display: block;
    width: 100%;
  }

  input,select {
    height: 2.5rem;
    width: 100%;
    padding: 0.2rem;
  }
</style>
