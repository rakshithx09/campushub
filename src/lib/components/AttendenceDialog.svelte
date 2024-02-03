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
  <h2>Create Attendance</h2>
  <form method="dialog">
    <label for="date">Select Date</label>
    <input id="date" type="date" bind:value={date} />

    {#await attendenceList}
      <span class="loading">Loading...</span>
    {:then students}
      {#if students.length == 0}
        <div>
          <span>No records found</span>
          <button on:click={onCreateNew} type="button" class="createnew">Create New</button>
        </div>
      {:else}
        <table>
          <thead>
            <tr>
              <th>Student</th>
              <th>Present</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            {#each students as student}
              <tr>
                <td>{student.name}</td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="text" />
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      {/if}
    {:catch err}
      <span class="error">{err}</span>
    {/await}
    <button >Mark Attendance</button>
  </form>
</dialog>
<style>
  /* Basic Reset */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Body Styles */
  body {
    font-family: 'Arial', sans-serif;
    background-color: #394977;
  }

  /* Dialog Styles */
  dialog {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    background-color: #3537a56e;
    border-radius: 30px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  /* Form Styles */
  form {
    display: flex;
    flex-direction: column;
    width: 100%px;
    z-index: 2;
  }

  label {
    font-size: 0.875rem;
    margin-bottom: 6px;
  }

  input[type="date"],
  input[type="text"],
  button {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #4b3b3b;
    border-radius: 4px;
  }

  input[type="checkbox"] {
    margin-right: 6px;
  }

  /* Table Styles */
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
  }

  th,
  td {
    border: 1px solid rgb(14, 14, 14)d7d;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #363333;
  }

  /* Loading Styles */
  span.loading {
    display: block;
    margin-top: 10px;
  }

  /* Error Styles */
  span.error {
    display: block;
    margin-top: 10px;
    color: #ff0000;
    
  }
  button{
    width: 300px;
    border-radius: 30px;
  }
  .createnew{
    background-color: #394977;
  }
</style>