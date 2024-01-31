<script lang="ts">
  import {
    fetchAttendence,
    fetchStudents,
  } from "$lib/db/pocketbase";
  import type { Server } from "$lib/types";

  export let attendenceDialog: HTMLDialogElement;
  export let server: Server;

  let date: string = new Date().toISOString().substring(0, 10);

  async function fetchList() {
    const result = await fetchAttendence(server.id, date);
    if (result.length == 0) return await fetchStudents(server);
    return result;
  }
</script>



<dialog bind:this={attendenceDialog}>
  <p>Create Channel</p>
  <form method="dialog">
    <label for="">
      <input type="date" bind:value={date} />
    </label>

    <table>
      <tr>
        <th>student</th>
        <th>Present</th>
        <th>Note</th>
      </tr>
    
      <tbody>
        {#await fetchList()}
          <span>...loading</span>
        {:then students}
          {#each students as student}
          {console.log(student)}
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
        {:catch err}
          <span>{err}</span>
        {/await}
      </tbody>
    </table>
    <button class="bg-red-700">Delete Channel</button>
  </form>
</dialog>


