<script>
    import Header from "$lib/components/Header.svelte";
    import { admin } from "$lib/stores/admin";


</script>

<Header user={$admin}/>
<slot/>