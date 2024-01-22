<script lang="ts">
    import {serverSelected } from "$lib/stores";
    import { onMount } from "svelte";
    onMount(()=>{
        serverSelected.set(null);
    })

</script>

<main>
     <!-- TODO: resorces page goes here -->
</main>

<style>
    /* if any custom css needed insert here */
</style>