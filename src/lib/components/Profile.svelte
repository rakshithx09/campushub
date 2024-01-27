<script lang="ts">
  import { logout } from "$lib/db/pocketbase";
  import type { BaseUser } from "$lib/types";
  export let user:BaseUser| null;
  import { currentUser } from "$lib/stores";
  import { getImageUrl } from "$lib/db/pocketbase";
  
  $: src = user? getImageUrl(user,user.avatar) : null
  
  
</script>
<div class=" mainD drawer-overlay drawer-end">
    <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Page content here -->
      <label for="my-drawer-4" ><img class="cursor-pointer" src={src} alt=""></label>
    </div> 
    <div class="drawer-side">
      <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        <!-- Sidebar content here -->
        <li><img src={src} alt="avatar"></li>
        <li><h1>{user?.name}</h1></li>
        <li><h3>@{user?.username}</h3></li>
        <li class="block mx-auto my-2"><button on:click={logout} class="bg-[#2c313f] cursor-pointer w-[5rem] h-[2.5rem] flex items-center justify-center">Logout</button></li>
      </ul>
    </div>
  </div>

  <style>
    .mainD{
     /*  position: fixed;
      right: 1rem;
      top: 1.2rem; */
      z-index: 3;
    }
    img{
      width: 2.7rem;
      height: 2.7rem;
      border-radius: 50%;
    }
    .menu{
      padding: 3rem 0;
    }
    li{
      /* pointer-events: none; */
    }
    h1,h2,h3{
      margin: auto;
    }
    h1{
      font-size: 30px;
    }
    ul img{
      width: 9rem;
      height: 8rem;
      border-radius: 50%;
      margin: auto;
    }
    label{
      /* cursor: pointer;
      background-color: transparent; */
    }
    input{
      position: fixed;
      right: 1rem;
      top: 1rem;
      height: 1rem;
      width: 1rem;
      border: 2px solid white;
    }
  </style>