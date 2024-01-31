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

  $: admin = $adminStore!;
</script>

<main>
  <section class="sidebar">
    <a href="/admin/servers">servers</a>
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

  body {
    background-color: #232323; /* Dark background color */
    color: #ffffff; /* White text color */
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
    
  }

  .sidebar h1 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  .sidebar nav {
    display: flex;
    flex-direction: column;
  }

  .sidebar a {
    color: #ecf0f1;
    text-decoration: none;
    padding: 10px 0;
    font-size: 16px;
    transition: background-color 0.3s ease;
  }

  .sidebar a:hover {
    background-color: #6d7883;
    border-radius: 10px;
    width: 75px;
  }

  .servers {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1rem;
    justify-content: space-evenly;
  }

  .card {
    width: 12rem;
    background-color: #3f3c3c; /* Darker gray card background */
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    aspect-ratio: 16/9;
    border-radius: 4px;
    margin-bottom: 0.5rem;
  }

  .delete-btn {
    background: #e74c3c; /* Red color */
    color: #ffffff;
    width: 100%;
    padding: 0.5rem;
    text-align: center;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .delete-btn:hover {
    background: #c0392b; /* Darker red on hover */
  }

  .activity-bar {
    display: flex;
    width: 100%;
    margin-top: 1rem;
    transition: margin-top 0.3s ease;
  }

  input {
    height: 2.5rem;
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #555; /* Darker gray border color */
    border-radius: 4px;
    transition: box-shadow 0.3s ease, border-color 0.3s ease;
  }

  input:focus {
    outline: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-color: #4c8bf5; /* Bootstrap focus border color */
  }
</style>
