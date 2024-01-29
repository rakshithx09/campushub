<script lang="ts">
  import { pb } from "$lib/db/pocketbase";

  let email: string;
  let password: string;

  async function login() {
    await pb.collection("users").authWithPassword(email, password);
  }
</script>

<div class="container">
  <div class="pic2"></div>

  <form
    on:submit|preventDefault={login}
    style="border-radius: 20px; background-color:rgb(0,0,0,0)"
  >
    <h1>Log in To Continue</h1>
    <div class="inp">
      <input
        type="text"
        id="username"
        bind:value={email}
        placeholder="xyz@mail.com"
        style="font-family: 'Courier New', Courier, monospace;"
      />
    </div>
    <div></div>

    <div class="inp">
      <input
        type="password"
        id="password"
        bind:value={password}
        placeholder="Password"
        style="font-family: 'Courier New', Courier, monospace;"
      />
    </div>

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
  }

  .pic::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(14, 5, 68, 0.384);
    z-index: 1;
  }

  .pic::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: url("https://cache.careers360.mobi/media/colleges/social-media/media-gallery/3633/2018/8/18/NMAM-Institute-of-Technology-Karkala-Taluk-(3).jpg");
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    z-index: 0; /* Ensure the background image is behind the overlay */
  }

  .inp {
    width: 350px;
    height: 50px;
    max-height: 50px;
    min-height: 50px;
    display: flex;
    align-items: center;
    position: relative;
  }

  label {
    position: absolute;
    left: 20px;
    color: #ffffff;
    height: 20px;
    transform: translateY(2.5px);
    padding-left: 5px;
    cursor: text;
    padding-right: 5px;
    transition: 0.2s;
    font-family: "Courier New", Courier, monospace;
  }

  input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: 2px solid #d0d0d3;
    border-radius: 10px;
    outline: none;
    transition: 0.4s;
    color: #fff;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 15px;
  }

  input:focus {
    border: 2px solid #1f1fff;
    box-shadow:
      #080841 0px 1px 1px,
      #6767ff 0px 0px 0px 1px;
  }

  input:focus + label {
    left: 20px;
    transform: translateY(-50px);
    font-size: 12px;
    background-color: #24242c00;
  }

  .up {
    left: 20px;
    transform: translateY(-22px);
    font-size: 12px;
    background-color: #24242c;
  }

  button {
    width: 350px;
    height: 50px;
    min-height: 50px;
    max-height: 50px;
    background-color: #0a0a61;
    border: 2px solid #0a0a61;
    border-radius: 50px;
    outline: none;
    transition: 0.4s;
    color: #fff;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 15px;
    cursor: pointer;
    font-family: "Courier New", Courier, monospace;
  }

  button:hover {
    background-color: #1717c2;
    border: 2px solid #1717c2;
  }

  h1 {
    font-family: "Courier New", Courier, monospace;
    font-weight: bold;
    font-size: 20px;

    color: #fff;
    margin-bottom: 20px;
  }

  a {
    color: #bbbbbb;
    text-decoration: none;
    font-size: 12px;
    font-family: "Courier New", Courier, monospace;
  }

  a:hover {
    text-decoration: underline;
  }

  img {
    width: 70px;
    border-radius: 10px;
    border: 1px solid #494954;
  }

  @media only screen and (max-width: 750px) {
    .pic {
      display: none;
    }

    /* .pic2 {
        display: block;
    } */

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

    body {
      padding-bottom: 10px;
      overflow: scroll;
      height: 100%;
    }
    p {
      font-family: "Courier New", Courier, monospace;
    }
  }
</style>
