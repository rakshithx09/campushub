<script>
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { currentUser } from "$lib/stores";

  $: user = $currentUser;
</script>

<Header {user} />
<slot />
<Footer/>
