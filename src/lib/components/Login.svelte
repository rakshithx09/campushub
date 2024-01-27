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
      <input class="input"
        type="email"
        placeholder="example@mail.com"
        bind:value={email}
        required
      />
    </label>
    <label>
      <span>Password</span>
      <input class="input"
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
    background: linear-gradient(to top left,  #83878a77 , #021942);
  }

  button{
    background-color: var(--bg-accent);
    width: 50%;
    padding: .5rem;
    border-radius: 40px;
    font-family: 'Courier New', Courier, monospace;
  }
  form {
	margin:2% auto 0 auto;
	padding:30px;
	width:400px;
	height:auto;
	overflow:hidden;
	background:rgba(241, 241, 241, 0.123);
	border-radius:10px;
}
form label {
	font-size:20px;
	color:rgb(252, 252, 252);
	cursor:pointer;
  font-family: 'Courier New', Courier, monospace;
}
.input
{
  background-color: #0c3c64d2;
  border-radius: 10px;
}

</style>
