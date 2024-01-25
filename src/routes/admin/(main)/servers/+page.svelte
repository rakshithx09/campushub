<script lang="ts">
  import { getAllServers, getImageUrl } from "$lib/db/pocketbase";
</script>

<section class="flex flex-nowrap gap-4 p-4">
  {#await getAllServers()}
    <span>...loading</span>
  {:then servers}
    {#each servers as server (server.id)}
      <div class="card w-48 p-2">
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
