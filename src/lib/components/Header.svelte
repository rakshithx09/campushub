<script lang="ts">
  import nitteLogo from "$lib/assets/nitte.svg";
  import type { BaseUser } from "$lib/types";
  import { logout } from "$lib/db/pocketbase";
  import { reset } from "$lib/utils";
  import Profile from "./Profile.svelte";

  export let user: BaseUser | null;
</script>

<header>
  <button on:click={reset}><img src={nitteLogo} alt="NMAMIT NITTE" /></button>

  <nav>
    <a href="/resources">resources</a>
    {#if user?.username || user?.email}
      <!-- <div class="profile">
        <span>{user.name ?? user?.email}</span>
        <button class="logout" on:click={logout}> Log Out</button>
        
      </div> -->
      <Profile {user}/>
      
    {/if}
    
  </nav>
</header>

<style>
  header {
    position: sticky;
    top: 0;
    width: 100%;
    height: 80px;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--bg-accent);
    z-index: 3;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .profile {
    position: relative;
  }

  .profile:hover .logout {
    display: block;
  }

  .logout {
    position: absolute;
    display: none;
    background: rgb(135, 21, 21);
    font-size: 0.9rem;
    padding: 0.25rem 0.5rem;
  }
  a{
    display: flex;
    align-items: center;
  }
  
</style>
