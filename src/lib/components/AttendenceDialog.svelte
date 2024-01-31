<script lang="ts">
  import { fetchAttendence, fetchStudents } from "$lib/db/pocketbase";
  import type { ServerModel } from "$lib/types";

  export let attendenceDialog: HTMLDialogElement;
  export let server: ServerModel;

  let date: string = new Date().toISOString().substring(0, 10);

  $: attendenceList = fetchAttendence(server.id, date);

  async function onCreateNew() {
    attendenceList = fetchStudents(server.id);
  }
</script>

<dialog bind:this={attendenceDialog}>
  <p>Create Channel</p>
  <form method="dialog">
    <label for="">
      <input type="date" bind:value={date} />
    </label>

    {#await attendenceList}
      <span>...loading</span>
    {:then students}
      {#if students.length == 0}
        <div>
          <span>No records found</span>
          <button on:click={onCreateNew} type="button">Create New</button>
        </div>
      {:else}
        <table>
          <tr>
            <th>student</th>
            <th>Present</th>
            <th>Note</th>
          </tr>

          <tbody>
            {#each students as student}
              <tr>
                <td>{student.name}</td>
                <td>
                  <input type="checkbox" />
                </td>
                <th>
                  <input type="text" />
                </th>
              </tr>
            {/each}
          </tbody>
        </table>
      {/if}
    {:catch err}
      <span>{err}</span>
    {/await}
    <button class="bg-red-700">Delete Channel</button>
  </form>
</dialog>
