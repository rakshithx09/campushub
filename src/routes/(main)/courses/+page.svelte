<script lang="ts">
  import {
    getEnrolledCourses,
  } from "$lib/db/pocketbase";
  import { currentUser, courseSelected } from "$lib/stores";
</script>

<section class="mt-16">
  {#if $currentUser}
    {#await getEnrolledCourses($currentUser.id)}
      <span>...loading</span>
    {:then courses}
      {#each courses as course (course.name)}
        <a
          class="py-6 px-8 flex items-center m-auto rounded-tl-0 rounded-br-[0.0625rem] rounded-tr-[2.4375rem] rounded-bl-[2.375rem] bg-[#3d414c]"
          style="width: 80%; height: 5.7rem;   margin-bottom: 1rem;"
          on:click={() => {
            courseSelected.set(course);
          }}
          href={`courses/${course.name}`}
        >
          {course.name}
        </a>
      {/each}
    {/await}
  {/if}
</section>
