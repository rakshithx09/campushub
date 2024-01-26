<script lang="ts">
    import { currentUser } from "$lib/stores";
    import { admin } from "$lib/stores/admin";

  // import "../app.postcss";
  import "../app.css"


  $: console.log("user",$currentUser)
  $: console.log("admin",$admin)
</script>

<slot />