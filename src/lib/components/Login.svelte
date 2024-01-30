<script lang="ts">
  import { showToast } from "$lib/utils";

  export let onLogin: (email: string, password: string) => Promise<string>;

  let email: string;
  let password: string;
  let form: HTMLFormElement;

  async function login() {
    const errMessage = await onLogin(email, password);
    showToast("error", errMessage, "error");
    form.reset();
  }
</script>

<div class="container">
  <form
    bind:this={form}
    on:submit|preventDefault={login}
    class="bg-transparent space-y-2 w-full max-w-[350px]"
  >
    <h1>Log in To Continue</h1>
    <input type="text" bind:value={email} placeholder="xyz@mail.com" />
    <input type="password" bind:value={password} placeholder="Password" />

    <button type="submit">Login</button>
  </form>
</div>
<div class="pic"></div>

<style>
  .container {
    width: 50%;
    height: 100%;
    background: linear-gradient(to top left, #51535577, rgb(24, 30, 61));
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }

  .pic {
    position: relative;
    width: 50%;
    height: 100%;
    overflow: hidden;
    background-image: url($lib/assets/college.jpg);
    /* background-image: url("https://cache.careers360.mobi/media/colleges/social-media/media-gallery/3633/2018/8/18/NMAM-Institute-of-Technology-Karkala-Taluk-(3).jpg"); */
    background-size: cover;
    background-position: center;
  }

  input {
    width: 100%;
    height: 50px;
    background-color: transparent;
    border: 2px solid #d0d0d3;
    border-radius: 10px;
    outline: none;
    transition: 0.4s;
    color: #fff;
    padding: 0 1rem;
  }

  input:focus {
    border: 2px solid #1f1fff;
    box-shadow:
      #080841 0px 1px 1px,
      #6767ff 0px 0px 0px 1px;
  }

  button {
    width: 100%;
    height: 50px;
    background-color: #0a0a61;
    border-radius: 50px;
    outline: none;
    transition: 0.4s;
    color: #fff;
    padding-left: 20px;
    padding-right: 20px;
    cursor: pointer;
  }

  button:hover {
    background-color: #1717c2;
  }

  h1 {
    font-weight: bold;
    font-size: 20px;

    color: #fff;
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 750px) {
    .pic {
      display: none;
    }

    .container {
      width: 100%;
    }
  }

  @media only screen and (max-height: 450px) {
    .pic {
      display: none;
    }

    .container {
      width: 100%;
    }
  }
</style>
