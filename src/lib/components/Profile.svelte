<script lang="ts">
  import { logout } from "$lib/db/pocketbase";
  import type { BaseUser } from "$lib/types";
  import { getFileUrl } from "$lib/db/pocketbase";
  import dummyProfileImage from "$lib/assets/dummy-profile.png"

  export let user: BaseUser;
  
  const src =getFileUrl(user, user.avatar)?getFileUrl(user, user.avatar):dummyProfileImage;
</script>

<div class="drawer-overlay drawer-end">
  <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <!-- Page content here -->
    <label for="my-drawer-4"><img class="cursor-pointer" {src} alt="" /></label>
  </div>
  <div class="drawer-side">
    <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"
    ></label>
    <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      <!-- Sidebar content here -->
      <li><img {src} alt="avatar" /></li>
      {#if user?.name}
      <li><h1>{user?.name}</h1></li>
      {/if}
      {#if user?.email}
      <li><h1>{user?.email}</h1></li>
      {/if}
      <li class="block mx-auto my-2">
        <button
          on:click={logout}
          class="bg-[#2c313f] cursor-pointer w-[5rem] h-[2.5rem] flex items-center justify-center"
          >Logout</button
        >
      </li>
    </ul>
  </div>
</div>

<style>
  img {
    width: 2.7rem;
    height: 2.7rem;
    border-radius: 50%;
  }
  .menu {
    padding: 3rem 0;
  }

  h1{
    margin: auto;
    font-size: 18px;
  }

  ul img {
    width: 9rem;
    height: 8rem;
    border-radius: 50%;
    margin: auto;
  }


  .drawer-side{
    overflow: hidden;
  }
</style>
