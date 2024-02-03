<script lang="ts">
  import { getCourseResources, getFileUrl } from "$lib/db/pocketbase";
  import { courseSelected, currentUser } from "$lib/stores";
  import { UsersRoleOptions } from "$lib/types/pb";
  import { pb } from "$lib/db/pocketbase";

  let user = $currentUser!;
  let uploadDialog: HTMLDialogElement;
  $: courseId = $courseSelected!.id;
  $: courses = getCourseResources(courseId);
  let title: string;
  let files: FileList;

  async function uploadFiles() {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("course", courseId);
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i], files[i].name);
    }
    try {
      await pb.collection("resources").create(formData);
      courses = getCourseResources(courseId);
    } catch (error) {
      console.error("Error uploading files:", error);
      // Handle error, if needed
    }
    uploadDialog.close();
  }
</script>

{#if $courseSelected}
  {#if user.role == UsersRoleOptions.LECTURER}
    <button class="upload-button" on:click={() => uploadDialog.showModal()}>
      Upload
    </button>
    <dialog bind:this={uploadDialog} class="dialog">
      <p class="font-bold text-lg mb-4">Upload Files</p>
      <form
        method="dialog"
        on:submit|preventDefault={uploadFiles}
        enctype="multipart/form-data"
        class="upload-form"
      >
        <label class="form-label">
          <span>Title</span>
          <input type="text" required bind:value={title} class="form-input" />
        </label>
        <label class="form-label">
          <span>Files</span>
          <input type="file" multiple required bind:files class="form-input" />
        </label>
        <button type="submit" class="submit-button">Upload</button>
      </form>
    </dialog>
  {/if}

  {#await courses}
    <span class="loading-span">...loading</span>
  {:then resources}
    {#if resources.length}
      {#each resources as resource (resource.id)}
        <div class="resource-container">
          <h1 class="resource-title">{resource.title}</h1>
          {#each resource.files as file (file)}
            <a href={getFileUrl(resource, file)} class="file-link">{file}</a>
          {/each}
        </div>
      {/each}
    {:else}
      <span class="text-center">No resources yet</span>
    {/if}
  {/await}
{/if}

<style>
  /* Style for the upload button */
  .upload-button {
    margin: 30px;
    background-color: #2ecc71;
    padding: 1rem;
    padding-left: 30px;
    padding-right: 30px;
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 30px;
    transition: background-color 0.3s ease-in-out;
    margin-top: 15px;
    margin-bottom: 0px;
  }

  .upload-button:hover {
    background-color: #1d7943;
  }

  /* Style for the dialog */
  .dialog {
    padding: 2rem;
    background-color: #27262698;
    box-shadow: 0 0 10px rgba(255, 254, 254, 0.1);
    border-radius: 30px;
  }

  /* Style for the form inside the dialog */
  .upload-form {
    margin-top: 1.5rem;
  }

  /* Style for the labels in the form */
  .form-label {
    display: block;
    color: #f8f8f8;
    margin-top: 1rem;
  }

  /* Style for the input fields in the form */
  .form-input {
    width: 100%;
    padding: 1rem;
    border: 1px solid #f8f8f8;
    border-radius: 0.25rem;
    margin-top: 0.5rem;
    transition: border-color 0.3s ease-in-out;
  }

  .form-input:focus {
    border-color: #3498db;
  }

  /* Style for the submit button in the form */
  .submit-button {
    background-color: #3498db;
    color: white;
    padding: 1rem;
    margin-top: 1.5rem;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
  }

  .submit-button:hover {
    background-color: #2980b9;
  }

  /* Style for the loading span */
  .loading-span {
    color: #777;
  }

  /* Style for the resource container */
  .resource-container {
    padding: 1.5rem;
    background: linear-gradient(to top left, #20212277, rgb(95, 95, 97));
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 0.25rem;
    margin: 1.5rem;
    margin-top: 2rem;
    border-radius: 10px;
  }

  /* Style for the resource title */
  .resource-title {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #080808;
  }

  /* Style for the file links */
  .file-link {
    display: block;
    color: #12b2e2;
    text-decoration: none;
    transition: color 0.3s ease-in-out;
  }

  .file-link:hover {
    color: #2980b9;
  }
</style>
