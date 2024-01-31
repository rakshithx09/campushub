<script lang="ts">
  import {
    getAllLecturers,
    getAllUsers,
    serverTypes,
  } from "$lib/db/pocketbase";
  import { ServersTypeOptions } from "$lib/types/pb";
  import {
    getUniqueSems,
    getUniqueBranchs,
    getUniqueSections,
    createClubServer,
    createGeneralServer,
    createSubjectServer,
  } from "$lib/db/pocketbase";
    import { showToast } from "$lib/utils";

  let serverType: ServersTypeOptions = ServersTypeOptions.SUBJECT;
  let serverName: string;
  let ownerId: string;
  let branch: string;
  let sem: string;
  let section: string;
  let message: string;
  let files: any;
  let form:HTMLFormElement;

  function createServer() {
    if (!serverName) {
      message = "server name is missing";
      return;
    }

    const image = files && files.length ? files[0] : null;

    try {
      if ((serverType = ServersTypeOptions.SUBJECT)) {
        createSubjectServer(serverName, ownerId, branch, sem, section, image);
      } else if ((serverType = ServersTypeOptions.CLUB)) {
        createClubServer(serverName, ownerId, image);
      } else if ((serverType = ServersTypeOptions.GENERAL)) {
        createGeneralServer(serverName, ownerId, image);
      } else {
        throw "unknown server type";
      }
      showToast("sucess","server created sucessfully","success")
      form.reset()
    } catch (err) {
      message = err as any as string;
      showToast("error",message,"error")
    }
  }
</script>

<form bind:this={form}>
  {#if message}
    {message}
  {/if}
  <label>
    <span>Server Name</span>
    <input type="text" bind:value={serverName} />
  </label>

  <label>
    <span>Server Image</span>
    <input accept="image/png, image/jpeg" bind:files type="file" />
  </label>

  <label>
    <span>Server Type</span>
    <select bind:value={serverType}>
      {#each serverTypes as type}
        <option value={type}>{type}</option>
      {/each}
    </select>
  </label>
  {#if serverType == ServersTypeOptions.SUBJECT}
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label>
      <span>Lecturer</span>
      {#await getAllLecturers()}
        <span>Loading...</span>
      {:then lecturers}
        <select bind:value={ownerId}>
          {#each lecturers as lecturer}
            <option value={lecturer.id}>{lecturer.email}</option>
          {/each}
        </select>
      {/await}
    </label>

    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label>
      <span>Branch</span>
      {#await getUniqueBranchs()}
        <span>Loading...</span>
      {:then branches}
        <select bind:value={branch}>
          {#each branches as branch}
            <option value={branch}>{branch}</option>
          {/each}
        </select>
      {/await}
    </label>

    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label>
      <span>Section</span>
      {#await getUniqueSections()}
        <span>loading...</span>
      {:then sections}
        <select bind:value={section}>
          {#each sections as section}
            <option value={section}>{section}</option>
          {/each}
        </select>
      {/await}
    </label>

    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label>
      <span>Sem</span>
      {#await getUniqueSems()}
        <span>loading...</span>
      {:then sems}
        <select bind:value={sem}>
          {#each sems as sem}
            <option value={sem}>{sem}</option>
          {/each}
        </select>
      {/await}
    </label>
  {:else if serverType == ServersTypeOptions.GENERAL}
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label>
      <span>Owner</span>
      {#await getAllUsers()}
        <span>Loading...</span>
      {:then users}
        <select bind:value={ownerId}>
          {#each users as user}
            <option value={user.id}>{user.email}</option>
          {/each}
        </select>
      {/await}
    </label>

    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label>
      <span>Branch</span>
      {#await getUniqueBranchs()}
        <span>Loading...</span>
      {:then branches}
        <select bind:value={branch}>
          {#each branches as branch}
            <option value={branch}>{branch}</option>
          {/each}
          <option value="all" selected>all</option>
        </select>
      {/await}
    </label>

    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label>
      <span>Section</span>
      {#await getUniqueSections()}
        <span>loading...</span>
      {:then sections}
        <select bind:value={section}>
          {#each sections as section}
            <option value={section}>{section}</option>
          {/each}

          <option value="all" selected>all</option>
        </select>
      {/await}
    </label>

    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label>
      <span>Sem</span>
      {#await getUniqueSems()}
        <span>loading...</span>
      {:then sems}
        <select bind:value={sem}>
          {#each sems as sem}
            <option value={sem}>{sem}</option>
          {/each}
          <option value="all" selected>all</option>
        </select>
      {/await}
    </label>
  {:else if serverType == ServersTypeOptions.CLUB}
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label>
      <span>Owner</span>
      {#await getAllUsers()}
        <span>Loading...</span>
      {:then users}
        <select bind:value={ownerId}>
          {#each users as user}
            <option value={user.id}>{user.email}</option>
          {/each}
        </select>
      {/await}
    </label>
  {/if}

  <button type="button" on:click={createServer}>Create Server</button>
</form>

<style>
  form {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 40px;
    box-sizing: border-box;
    background: linear-gradient(45deg, #2c3e50, #1f2c38);
    border-radius: 15px;
    display: grid;
    gap: 1.5rem;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.6);
    animation: fadeIn 0.5s ease;
    margin-top: 50px;
    align-items: end;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: #fff;
  }

  span {
    font-weight: bold;
  }

  input,
  select {
    padding: 1rem;
    border: none;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.2);
    font-size: 1rem;
    color: #fff;
    transition: background-color 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;
  }

  input:hover,
  select:hover,
  input:focus,
  select:focus {
    background-color: rgba(255, 255, 255, 0.4);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
  }

  input[type="file"] {
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff;
    cursor: pointer;
  }

  input[type="file"]:hover,
  input[type="file"]:focus {
    background-color: rgba(255, 255, 255, 0.4);
  }

  button {
    padding: 1rem;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #2980b9;
  }

  /* Responsive Grid */
  @media screen and (min-width: 768px) {
    form {
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }
  }

  option{
    color: black;
  }


</style>
