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
    <button class="bg-green-700 p-4" on:click={() => uploadDialog.showModal()}>
      Upload</button
    >
    <dialog bind:this={uploadDialog}>
      <p>Upload Files</p>
      <form
        method="dialog"
        on:submit|preventDefault={uploadFiles}
        enctype="multipart/form-data"
      >
        <label>
          <span>title</span>
          <input type="text" required bind:value={title} />
        </label>
        <label>
          <span>files</span>
          <input type="file" multiple required bind:files />
        </label>
        <button type="submit">Upload</button>
      </form>
    </dialog>
  {/if}

  {#await courses}
    <span>...loading</span>
  {:then resources}
    {#each resources as resource (resource.id)}
      <div>
        <h1>{resource.title}</h1>
        {#each resource.files as file (file)}
          <a href={getFileUrl(resource, file)}>{file}</a>
        {/each}
      </div>
    {/each}
  {/await}
{/if}
