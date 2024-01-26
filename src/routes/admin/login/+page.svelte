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

<section>
  <form on:submit|preventDefault={login}>
    <label>
      <span>Email</span>
      <input
        type="email"
        placeholder="example@mail.com"
        bind:value={email}
        required
      />
    </label>
    <label>
      <span>Password</span>
      <input type="password" bind:value={password} required />
    </label>

    <button>Login</button>
  </form>
</section>

<style>
  section {
    width: 100%;
    height: 100%;
    overflow-x: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  form {
    width: 100%;
    max-width: 400px;
    flex-grow: 1;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: color-mix(in srgb, currentColor 20%, transparent);
    border-radius: var(--radius);
  }

  label {
    display: block;
    width: 100%;
  }

  input {
    height: 2.5rem;
    width: 100%;
    padding: 0.2rem;
  }

  button {
    background-color: var(--bg-accent);
    width: 100%;
    padding: 0.5rem;
    border-radius: var(--radius);
  }
</style>
