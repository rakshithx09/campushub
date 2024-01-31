<script lang="ts">
  import { admin as adminStore } from "$lib/stores/admin";
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";

  console.log($adminStore)

  onMount(() => {
    if (!$adminStore) {
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
  }

  .content {
    flex-grow: 1;
    width: 100%;
    overflow-y: scroll;
    min-height: 100%;
  }

  .sidebar{
    display: flex;
    flex-direction: column;
    background-color: var(--bg-secondary);
    border-right: 2px solid var(--border);
    width: 10rem;
    text-align: center;
    color: var(--secondary);
  }
</style>
