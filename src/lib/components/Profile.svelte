<script lang="ts">
  
  import type { BaseUser } from "$lib/types";
  export let user:BaseUser;
  import { currentUser } from "$lib/stores";
  import { getImageUrl } from "$lib/db/pocketbase";
  
  
  
</script>
<div class="drawer drawer-end">
    <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Page content here -->
      <label for="my-drawer-4" ><img src={getImageUrl(user,user.avatar)} alt=""></label>
    </div> 
    <div class="drawer-side">
      <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        <!-- Sidebar content here -->
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </ul>
    </div>
  </div>

  <style>
    img{
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
    }
    label{
      cursor: pointer;
      background-color: transparent;
    }
  </style>