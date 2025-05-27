<script lang="ts">
  import Nav from '$lib/components/nav/navbar.svelte';
</script>

<section class="relative h-screen flex flex-col mx-4 bg-cover bg-center bg-no-repeat " 
     style="background-image: url('/member2.jpg');">
  <Nav />
  
  <div class="mx-auto text-center px-4 max-w-4xl my-auto ">
    <h1 class="text-5xl font-bold mb-4 text-shadow-orange-600 text-shadow-2xs">WELCOME</h1>
    <p class="text-2xl mb-8">A place of total recovery</p>
    <button class="btn btn-secondary text-lg px-8 py-3 bg-orange-500 text-white hover:bg-orange-600/90 transition-all">
      Join us on sunday
    </button>
  </div>
</section>