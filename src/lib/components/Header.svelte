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
    {#if user}
<<<<<<< HEAD
      <a href="/"><img src="src\lib\assets\message-icon.svg" class="msg-icon" alt="msg" /></a>
      <a href="/courses" class="nav-link">Courses</a>
      <a href="/resources" class="nav-link">Resources</a>
=======
      <a href="/"
        ><img
          src="src\lib\assets\message-icon.svg"
          class="msg-icon"
          alt="msg"
        /></a
      >
      <a href="/courses">Courses</a>
      <a href="/resources">Resources</a>
>>>>>>> 88117cfe65e6b01b39739cec9ecdaf24b84733b0
    {/if}
  </nav>

  <button on:click={reset} class="btn1">
<<<<<<< HEAD
    <img src={nitteLogo} alt="NMAMIT NITTE" class="logo-img" />
  </button>

  <div class="logo-section">
    {#if user?.username || user?.email}
      <Profile {user} />
    {/if}
  </div>
=======
    <img src={nitteLogo} alt="NMAMIT NITTE" />
  </button>
  {#if user?.username || user?.email}
    <Profile {user} />
  {/if}
>>>>>>> 88117cfe65e6b01b39739cec9ecdaf24b84733b0
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
<<<<<<< HEAD
    transition: background-color 0.3s ease;
=======
>>>>>>> 88117cfe65e6b01b39739cec9ecdaf24b84733b0
  }

  nav {
    display: flex;
    align-items: center;
    gap: 4rem;
    font-family: "Inter", sans-serif;
    font-weight: 700;
<<<<<<< HEAD
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
=======
>>>>>>> 88117cfe65e6b01b39739cec9ecdaf24b84733b0
  }

  a {
    display: flex;
    align-items: center;
    transition: color 0.3s ease;
  }
<<<<<<< HEAD

  a:hover {
    color: var(--primary);
  }

  .msg-icon {
    height: 38px;
    transition: transform 0.3s ease;
  }

  .msg-icon:hover {
    transform: scale(1.2);
  }

=======
  .msg-icon {
    height: 40px;
  }
>>>>>>> 88117cfe65e6b01b39739cec9ecdaf24b84733b0
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
      transform: scale(1.1);
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
    opacity: 0.8;
  }
</style>
