<script>
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { currentUser } from "$lib/stores";
  import Profile from "$lib/components/Profile.svelte";

  $: user = $currentUser;
</script>

<Header {user} />

<slot />
<Footer/>
