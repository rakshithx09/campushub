<script lang="ts">
  import { goto } from "$app/navigation";
  import Login from "$lib/components/Login.svelte";
  import { loginAdmin } from "$lib/db/pocketbase";

  async function login(email:string, password:string) {
    try {
      await loginAdmin(email, password);
      goto("/admin");
    } catch (err) {
      return "invalid credentials";
    }
  }
</script>



<main>
  <Login onLogin={login} />
</main>

<style>
  main {
    display: flex;
    width: 100%;
    /* height: 100vh; */
    height: calc(100vh - 80px);
  }
</style>
