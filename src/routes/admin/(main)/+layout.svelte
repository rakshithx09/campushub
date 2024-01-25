<script lang="ts">
    import { AppShell } from "@skeletonlabs/skeleton";
    import { admin as adminStore } from "$lib/stores/admin";
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
  
    onMount(() => {
      if (!$adminStore) {
        goto("/admin/login");
      }
    });
  
    $: admin = $adminStore!;
  </script>
  
  <AppShell>
    <svelte:fragment slot="sidebarLeft">
      <section
        class="flex flex-col gap-4 align-middle p-4 bg-surface-50-900-token h-full"
      >
        <a href="/admin/servers">servers</a>
      </section>
    </svelte:fragment>
  
    <slot />
  
    <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
  </AppShell>