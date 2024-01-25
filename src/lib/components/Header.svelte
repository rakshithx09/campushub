<script lang="ts">
  import nitteLogo from "$lib/assets/nitte.svg";
  import type { BaseUser } from "$lib/types";
  import { logout } from "$lib/db/pocketbase";
    import { reset } from "$lib/utils";

  export let user: BaseUser | null;
</script>

<header>
  <button on:click={reset}><img src={nitteLogo} alt="NMAMIT NITTE" /></button>

  <nav>
    <a href="/resources">resources</a>
    {#if user?.username}
      <div class="profile">
        <span >{user.username}</span>
        <button class="logout" on:click={logout}> Log Out</button>
      </div>
    {/if}
  </nav>
</header>


<style>
  header{
    width: 100%;
    max-height: 100px;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--bg-accent);
  }

  nav{
    display: flex;
    gap:1rem;
  }

  .profile{
    position: relative;
  }

  .profile:hover .logout{
    display: block;
  }

  .logout{
    position: absolute;
    display: none;
    background: rgb(135, 21, 21);
    font-size: .9rem;
    padding: .25rem .5rem;
  }
</style>
