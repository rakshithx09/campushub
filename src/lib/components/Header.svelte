<script lang="ts">
  import nitteLogo from "$lib/assets/nitte.svg";
  import type { BaseUser } from "$lib/types";
  import { reset } from "$lib/utils";
  import Profile from "./Profile.svelte";
  import messageIcon from "$lib/assets/message-icon.svg";

  export let user: BaseUser | null;
</script>

<header>
  <nav>
    <a href="/"><img src={messageIcon} class="msg-icon" alt="msg" /></a>
    <a href="/">Courses</a>
    <a href="/resources">Resources</a>
  </nav>
  <button on:click={reset} class="btn1">
    <img src={nitteLogo} alt="NMAMIT NITTE" />
  </button>
  {#if user?.username || user?.email}
    <Profile {user} />
  {/if}
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
    gap: 4rem;
    font-family: "Inter", sans-serif;
    font-weight: 700;
  }

  a {
    display: flex;
    align-items: center;
  }
  .msg-icon {
    height: 40px;
  }
  .btn1 {
    margin-left: auto;
    margin-right: 40px;
  }
</style>
