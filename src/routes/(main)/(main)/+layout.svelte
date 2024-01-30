<script lang="ts">
  import { serverSelected, currentUser } from "$lib/stores";
  import ServerSidebar from "$lib/components/ServerSidebar.svelte";
  import ChannelSideBar from "$lib/components/ChannelSideBar.svelte";
  import Login from "$lib/components/Login.svelte";
    import { loginUser } from "$lib/db/pocketbase";

  $: user = $currentUser;
  $: server = $serverSelected;

  async function onLogin(email:string,password:string){
    try{
      await loginUser(email,password);
    }catch(err){
      return "invalid credentials"
    }
  }
</script>

<svelte:head>
</svelte:head>

<main>
  {#if user}
    <ServerSidebar {user} />
    {#if server}
      <ChannelSideBar {server} {user} />
    {/if}
    <div class="content">
      <slot />
    </div>
  {:else}
    <Login onLogin={onLogin}/>
  {/if}
</main>

<style>
  main {
    display: flex;
    width: 100%;
    /* height: 100vh; */
    height: calc(100vh - 80px);
  }

  .content {
    flex-grow: 1;
    width: 100%;
    overflow-y: scroll;
    min-height: 100%;
    
  }
</style>
