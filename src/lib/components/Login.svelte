<script lang="ts">
    import { goto } from "$app/navigation";
  import { pb } from "$lib/db/pocketbase";

  let email: string;
  let password: string;

  async function login() {
    await pb.collection("users").authWithPassword(email, password);
  }
</script>

<section class="mt-20 h-full w-full">
  <form on:submit|preventDefault={login} class="space-y-4 ">
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

    <button  class="btn variant-filled w-full">Login</button>
  </form>
</section>

<style>


  form {
    width: 100%;
    max-width: 400px;
    margin: auto;
  }
</style>
