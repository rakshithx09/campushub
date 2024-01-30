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

<Login onLogin={login} />
