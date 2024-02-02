<script>
  import { goto } from "$app/navigation";
  import Header from "$lib/components/Header.svelte";
  import { admin } from "$lib/stores/admin";

  $: user = $admin;

  $: {
    if (!user) {
      goto("/admin/login");
    }
  }
</script>

<Header user={user} />

<slot />
