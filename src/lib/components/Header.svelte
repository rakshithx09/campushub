<script lang="ts">
  import nitteLogo from "$lib/assets/nitte.svg";
  import type { BaseUser } from "$lib/types";

  export let user: BaseUser | null;
</script>

<header>
  <a href="/"><img src={nitteLogo} alt="NMAMIT NITTE" /></a>

  <nav>
    <a href="/resources">resources</a>
    {#if user?.username}
      <span>{user.username}</span>
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
</style>
