<script lang="ts">
  import { goto } from "$app/navigation";
  import { getImageUrl, getServers } from "$lib/db/pocketbase";
  import { serverSelected } from "$lib/stores";
  import type { BaseUser } from "$lib/types";

  export let user: BaseUser;

  $: servers = getServers(user.id);
</script>

<section class="p-10 bg-[#021a42]">
  {#await servers}
    <span>...Loading</span>
  {:then serverResponse}
  
    {#each serverResponse as server (server.id)}
      <button
      data-overlay={server.name}
      class={ `overlay ${$serverSelected?.id == server.id ? "serverSelected" : ""}`}
        on:click={() => {
          serverSelected.set(server);
          goto("/");
        }}
      >
        <img
          src={getImageUrl(server, server.image)}
          alt={server.name}
          class={$serverSelected?.id == server.id ? "selected" : ""}
        />
      </button>
    {/each}
  {:catch err}
    <span>something went wrong {err}</span>
  {/await}
</section>

<style>
  section {
   /*  background-color: var(--bg-secondary); */
    /* border-right: 2px solid var(--border); */
    width: 6rem;
    height: 100%;
    padding: 1rem .5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
  button{
    padding: 0.2rem 0.4rem;
  }
  img {
    width: 55px;
    border-radius: 100%;
    aspect-ratio: 1;
    cursor: pointer;
  }

  .selected{
    border:2px solid var(--primary);
  }
  .serverSelected{
    border-left:2px solid var(--primary);
  }
</style>
