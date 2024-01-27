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

  let serverType: ServersTypeOptions = ServersTypeOptions.SUBJECT;
  let serverName: string;
  let ownerId: string;
  let branch: string;
  let sem: string;
  let section: string;
  let message: string;
  let files: any;

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
        message = "unknown server type";
      }
    } catch (err) {
      message = err as any as string;
    }
  }
</script>

<form action="">
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
    max-width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-around;
  }
</style>
