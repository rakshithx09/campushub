<script>
    /* import img from '../assets/Nitte-bg.png' */
    import { currentUser } from "$lib/stores";
    $: user = $currentUser;
</script>
<section class="landing flex">
    <div class="headings m-auto">
        <h1 class="text-[50px] font-extrabold"> Welcome {user?.username}</h1>
        <div class="flex ps-[5rem]">
            <h1 class="text-[35px] font-bold mr-2">Campushub:</h1>
            <span class="flex items-center text-[30px]">Connecting Minds, Empowering Futures.</span>
        </div>
        <div class="grid grid-rows-2 grid-cols-2 w-[20rem] gap-2 m-auto">
            <a href="/courses"><button class="btn btn-neutral">
                Courses
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </button></a>
              <a href="/resources"><button class="btn btn-neutral">
                Resources
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </button></a>
             <a href="/"> <button class="btn btn-neutral">
                Smart Buddy
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </button></a>
              <a href="/"><button class="btn btn-neutral">
                Messages
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </button></a>
        </div>
        
    </div>
    <img class="h-full w-auto ml-auto" src="src/lib/assets/Nitte-bg.png" alt="">
</section>

<style>
    .landing{
        position: relative;
        height: 100%;
        width: 100%;
        background: linear-gradient(180deg, rgba(80, 93, 98, 0.62) 0%, rgba(75, 90, 96, 0.61) 0.01%, rgba(23, 134, 176, 0.33) 100%);
    }
    .headings{
        /* position: absolute;
        width: 60%;
        top: 50%;
        transform: translate(0, -50%);
        left: 5%; */
    }
    a,button{
        width: 100%;
    }
    
    
</style>