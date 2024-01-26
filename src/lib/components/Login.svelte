<script lang="ts">
  import { pb } from "$lib/db/pocketbase";

  let email: string;
  let password: string;

  async function login() {
    await pb.collection("users").authWithPassword(email, password);
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
      <input
        type="password"
        bind:value={password}
        required
      />
    </label>

    <button>Login</button>
  </form>
</section>

<style>

  section{
    width: 100%;
    height: 100%;
    overflow-x: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button{
    background-color: var(--bg-accent);
    width: 100%;
    padding: .5rem;
    border-radius: var(--radius);
  }

</style>
