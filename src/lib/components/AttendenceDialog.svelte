<script lang="ts">
  import { fetchAttendence, fetchStudents, getCourse } from "$lib/db/pocketbase";
  import type {Server } from "$lib/types";

  export let attendenceDialog: HTMLDialogElement;
  export let server: Server;

  let date: string = new Date().toISOString().substring(0, 10);
</script>

<dialog bind:this={attendenceDialog}>
  <p>Create Channel</p>
  <form method="dialog">
    <label for="">
      <input type="date" bind:value={date} />
    </label>

    {#await fetchAttendence(server.id,date)}
      <span>...loading</span>
    {:then students}
      {#each students as student}
        <span>{student.name}</span>
      {/each}

    {:catch err}
    <span>{err}</span>
    {/await}
    <button class="bg-red-700">Delete Channel</button>
  </form>
</dialog>
