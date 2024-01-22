<script>
  import  nitteLogo from "$lib/assets/nitte.svg";
  import { AppBar } from "@skeletonlabs/skeleton";
</script>

<AppBar>
  <svelte:fragment slot="lead">
    <img src={nitteLogo} alt="NMAMIT NITTE" />

  </svelte:fragment>
  <svelte:fragment slot="trail">
    <a href="/resources">resources</a>
  </svelte:fragment>
</AppBar>
