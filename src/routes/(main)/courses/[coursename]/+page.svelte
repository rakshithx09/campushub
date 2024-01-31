<script lang="ts">
    import { getCourseResources,getFileUrl } from "$lib/db/pocketbase";
  import { courseSelected } from "$lib/stores";
</script>

{#if $courseSelected}
  {#await getCourseResources($courseSelected.id)}
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
