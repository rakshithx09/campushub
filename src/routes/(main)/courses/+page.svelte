<script lang="ts">
    const subjects = [
      { name: 'DAA' },
      { name: 'DBMS' },
      { name: 'Algorithms' },
      { name: 'Web Development' },
      { name: 'Operating Systems' },
    ];
  </script>
  
  <section class="mt-16">
    {#each subjects as subject (subject.name)}
      <div class="py-6 px-8  flex items-center m-auto rounded-tl-0 rounded-br-[0.0625rem] rounded-tr-[2.4375rem] rounded-bl-[2.375rem] bg-[#3d414c]" style="width: 80%; height: 5.7rem;   margin-bottom: 1rem;">
        {subject.name}
      </div>
    {/each}
  </section>
  