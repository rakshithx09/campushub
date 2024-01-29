<script lang="ts">
  import { serverSelected } from "$lib/stores";
  import { onMount } from "svelte";
  import SubjectCard from "$lib/components/SubjectCard.svelte";
  onMount(() => {
    serverSelected.set(null);
  });
  let subjects = [
    { name: "Maths", resources: { textbook: "", textbookName: "" } },
    "DAA",
    "MP",
    "DBMS",
    "SEPM",
    "Python",
    "ESC",
    "EIC",
  ];
</script>

<main>
  {#each subjects as subject (subject)}
    <SubjectCard {subject} />
  {/each}
</main>

<style>
</style>
