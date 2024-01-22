<script lang="ts">
  import { getImageUrl, getServers } from "$lib/db/pocketbase";
  import { serverSelected, currentUser } from "$lib/stores";

  $: servers = getServers($currentUser!.id);
</script>

<section
  class="max-w-20 bg-surface-50-900-token border-r h-full overflow-auto p-2 space-y-4"
>
  {#await servers}
    <span>...Loading</span>
  {:then serverResponse}
    {#each serverResponse as server (server.id)}
      <button
        on:click={() => {
          serverSelected.set(server.expand?.server);
        }}
      >
        <img
          src={getImageUrl(server.expand?.server, server.expand?.server.image)}
          alt={server.expand?.server.name}
          class={`rounded-full aspect-square hover:cursor-pointer ${
            $serverSelected?.id == server.expand?.server.id ? "border-4" : ""
          }`}
        />
      </button>
    {/each}
  {:catch err}
    <span>something went wrong {err}</span>
  {/await}
</section>