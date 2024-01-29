<script lang="ts">
  import { goto } from "$app/navigation";
  import { getImageUrl, getServers } from "$lib/db/pocketbase";
  import { serverSelected } from "$lib/stores";
  import type { BaseUser } from "$lib/types";

  export let user: BaseUser;

  $: servers = getServers(user.id);
</script>

<section >
  {#await servers}
    <span>...Loading</span>
  {:then serverResponse}
  
    {#each serverResponse as server (server.id)}
      <button
        data-overlay={server.name}
        class={`overlay ${$serverSelected?.id == server.id ? "serverSelected" : ""}`}
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
    width: 6rem;
    height: 100%;
    padding: 1rem .5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    background-color: rgb(31, 37, 68);
  }

  button {
    padding: 0.2rem 0.4rem;
    border-radius: 5px;
    overflow: hidden;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
    position: relative;
  }

  button:hover {
    background-color: var(--primary-light);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.2);
    transform: scale(1.05); /* Scale up on hover */
  }

  img {
    width: 55px;
    border-radius: 100%;
    aspect-ratio: 1;
    cursor: pointer;
  }

  .selected {
    border: 2px solid var(--primary);
  }

  .serverSelected {
    border-left: 2px solid var(--primary);
  }

  /* Ripple Animation */
  button:active::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);
    transform: scale(0);
    animation: rippleAnimation 0.6s ease-out;
    pointer-events: none;
  }

  @keyframes rippleAnimation {
    to {
      transform: scale(3);
      opacity: 0;
    }
  }
</style>
