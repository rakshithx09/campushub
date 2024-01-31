<script lang="ts">
  import nitteLogo from "$lib/assets/nitte.svg";
  import type { BaseUser } from "$lib/types";
  import { reset } from "$lib/utils";
  import Profile from "./Profile.svelte";
  import messageIcon from "$lib/assets/message-icon.svg"
    import { currentUser } from "$lib/stores";

  export let user: BaseUser | null;
</script>

<header>
  <nav>
    {#if $currentUser}
      <a href="/"
        ><img
          src={messageIcon}
          class="msg-icon"
          alt="msg"
        /></a
      >
      <a href="/courses" class="nav-link">Courses</a>
      <a href="/resources" class="nav-link">Resources</a>
    {/if}
  </nav>

  <button on:click={reset} class="btn1">
    <img src={nitteLogo} alt="NMAMIT NITTE" class="logo-img" />
  </button>

  <div class="logo-section">
    {#if user?.username || user?.email}
      <Profile {user} />
    {/if}
  </div>
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
    transition: background-color 0.3s ease;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 4rem;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
  }

  .nav-link {
    display: flex;
    align-items: center;
    position: relative;
    transition: color 0.3s ease;
  }

  .nav-link::before {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background-color: var(--primary);
    transition: width 0.3s ease;
  }

  .nav-link:hover {
    color: var(--primary);
  }

  .nav-link:hover::before {
    width: 100%;
  }

  a {
    display: flex;
    align-items: center;
    transition: color 0.3s ease;
  }

  a:hover {
    color: var(--primary);
  }

  .msg-icon {
    height: 37px;
    transition: transform 0.3s ease;
  }

  .msg-icon:hover {
    transform: scale(1.2);
  }

  .btn1 {
    margin-left: auto;
    margin-right: 40px;
    transition: transform 0.3s ease;
  }

  .btn1:hover {
    animation: ripple 0.6s ease;
  }

  .logo-img {
    width: 350px;
    height: auto;
    transition: opacity 0.3s ease;
  }

  .logo-img:hover {
    opacity: 0.8;
  }

 /* @keyframes ripple {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }*/

  .logo-section {
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: opacity 0.3s ease;
  }

  .logo-section:hover {
    opacity: 1;
  }
</style>
