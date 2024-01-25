<script lang="ts">
  import { goto } from "$app/navigation";
  import { getImageUrl, getServers } from "$lib/db/pocketbase";
  import { serverSelected } from "$lib/stores";
  import type { BaseUser } from "$lib/types";

  export let user: BaseUser;

  $: servers = getServers(user.id);
</script>

<section>
  {#await servers}
    <span>...Loading</span>
  {:then serverResponse}
    {#each serverResponse as server (server.id)}
      <button
        on:click={() => {
          serverSelected.set(server.expand?.server);
          goto("/");
        }}
      >
        <img
          src={getImageUrl(server.expand?.server, server.expand?.server.image)}
          alt={server.expand?.server.name}
          class={$serverSelected?.id == server.expand?.server.id ? "selected" : ""}
        />
      </button>
    {/each}
  {:catch err}
    <span>something went wrong {err}</span>
  {/await}
</section>

<style>
  section {
    background-color: var(--bg-secondary);
    border-right: 2px solid var(--border);
    height: 100%;
    padding: 0.25rem .5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  img {
    width: 60px;
    border-radius: 100%;
    aspect-ratio: 1;
    cursor: pointer;
  }

  .selected{
    border:2px solid var(--primary);
  }
</style>
