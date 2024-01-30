<script lang="ts">
  import { goto } from "$app/navigation";
  import Login from "$lib/components/Login.svelte";
  import { loginAdmin } from "$lib/db/pocketbase";

  let email: string;
  let password: string;

  async function login() {
    try {
      await loginAdmin(email, password);
      goto("/admin");
    } catch (err) {
      return "invalid credentials";
    }
    return "";
  }
</script>

<Login onLogin={login} />
