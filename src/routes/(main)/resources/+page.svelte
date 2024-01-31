<script lang="ts">
    import SubjectCard from "$lib/components/SubjectCard.svelte";
    import { reset } from "$lib/utils";
    import { onMount } from "svelte";
    onMount(()=>reset())
</script>

<main>
    <SubjectCard/>
</main>

