<script lang="ts">
  import { goto } from "$app/navigation";
  import { pb } from "$lib/db/pocketbase";
  import { admin } from "$lib/stores/admin";

  let email: string;
  let password: string;
  let message: string | null;

  async function login() {
    try {
      await pb.admins.authWithPassword(email, password);
      goto("/admin");
    } catch (err) {
      message = "invalid credentials";
    }
  }

  if ($admin) {
    goto("/admin");
  }
</script>

<section class="mt-20 h-full w-full">
  <form on:submit|preventDefault={login} class="space-y-4">
    {#if message}
      <div class="bg-red-800/70 p-4 w-full text-center">{message}</div>
    {/if}

    <label class="label">
      <span>Email</span>
      <input
        class="input"
        type="email"
        placeholder="example@mail.com"
        bind:value={email}
        required
      />
    </label>
    <label class="label">
      <span>Password</span>
      <input
        class="input"
        type="password"
        placeholder=""
        bind:value={password}
        required
      />
    </label>

    <button class="btn variant-filled w-full">Login</button>
  </form>
</section>

<style>
  form {
    width: 100%;
    max-width: 400px;
    margin: auto;
  }
</style>
