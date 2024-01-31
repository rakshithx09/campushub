<script lang="ts">
  import img from "$lib/assets/Nitte-bg.png";
  import { currentUser } from "$lib/stores";
  $: user = $currentUser!;
</script>

<section class="landing flex">
  <div class="headings m-auto">
    <h1 class="text-[50px] font-extrabold text-center">Welcome {user.name}</h1>
    <div class="flex mx-auto mb-6 items-center">
      <h1 class="text-[35px] font-bold mr-2">Campushub:</h1>
      <span class="text-[30px] text-center"
        >Connecting Minds, Empowering Futures.</span
      >
    </div>
    <div class="grid grid-rows-2 grid-cols-2 w-[20rem] gap-2 m-auto">
      <a href="/courses"
        ><button class="btn btn-neutral">
          Courses
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            /></svg
          >
        </button></a
      >
      <a href="/resources"
        ><button class="btn btn-neutral">
          Resources
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            /></svg
          >
        </button></a
      >
      <a href="/">
        <button class="btn btn-neutral">
          Smart Buddy
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            /></svg
          >
        </button></a
      >
      <a href="/"
        ><button class="btn btn-neutral">
          Messages
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            /></svg
          >
        </button></a
      >
    </div>
  </div>
  <img class="h-full w-auto ml-auto" src={img} alt="Nitte bg" />
</section>

<style>
  .landing {
    position: relative;
    height: 100%;
    width: 100%;
    background: linear-gradient(to top left, #51535577, rgb(24, 30, 61));
}

.headings {
    /* position: absolute;
    width: 60%;
    top: 50%;
    transform: translate(0, -50%);
    left: 5%; */
}

a, button {
    width: 100%;
    transition: background-color 0.3s ease; /* Add transition for a smooth effect */
}

a:hover, button:hover {
    background-color: rgba(255, 255, 255, 0.171); /* Change the background color on hover */
}
</style>
