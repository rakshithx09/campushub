<script lang="ts">
  import { getAllServers, getImageUrl } from "$lib/db/pocketbase";
</script>

<section>
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
        <span>name: {server.name}</span>
      </div>
    {/each}
  {:catch err}
    <span>{err}</span>
  {/await}
</section>


<style>
  section{
    display: flex;
    flex-wrap: nowrap;
    gap:1rem;
    padding: 1rem;
  }

  .card{
    width:12rem;
  }

  img{
    width:100%;
    aspect-ratio: 16/9;
  }
</style>
