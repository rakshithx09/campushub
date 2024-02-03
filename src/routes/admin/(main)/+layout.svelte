<script lang="ts">
  import { admin} from "$lib/stores/admin";
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";

  onMount(() => {
    if (!$admin) {
      goto("/admin/login");
    }
  });

</script>

<main>
  <section class="sidebar">
    <a href="/admin/servers">servers</a>
    <a href="/admin/students">students</a>
  </section>
  <div class="content">
    <slot />
  </div>
</main>

<style>
  main {
    display: flex;
    width: 100%;
    height: calc(100% - 80px);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .content {
    flex-grow: 1;
    width: 100%;
    overflow-y: scroll;
    min-height: 100%;
    padding: 20px;
    background: linear-gradient(to top left, #51535577, rgb(24, 30, 61));
    transition: background-color 0.3s ease;
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    background-color: rgb(31, 37, 68);
    color: #ecf0f1;
    padding: 20px;
    width: 130px;
    box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.1);
    text-align: center;
    gap:1rem;
    
  }

  .sidebar a {
    padding: 10px 0;
    transition: background-color 0.3s ease;
    border-radius: 10px;
  }

  .sidebar a:hover {
    background-color: #6d7883;
  }
</style>
