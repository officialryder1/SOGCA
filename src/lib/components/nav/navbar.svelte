<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  
  let scrolled = false;
  let mobileMenuOpen = false; // State for mobile menu toggle

  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 10;
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const toggleMobileMenu = () => {
    mobileMenuOpen = !mobileMenuOpen;
  };

  // Define your navigation links
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Events', href: '/events' },
    { name: 'E-library', href: '/platform' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Platform', href: '/resource' },
  ];
</script>

<nav class={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-base-100/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      <!-- Logo/Brand -->
       <a href="/" class="group flex items-center gap-3">
        <!-- Image logo -->
        <img 
            src="/sogca_logo.png"
            alt="SOGCA Icon"
            class="w-15 h-15 transition-transform group-hover:scale-110"
        >
        </a>
      
      <!-- Desktop Navigation -->
      <ul class="hidden md:flex space-x-8">
        {#each navLinks as link}
          <li>
            <a 
              href={link.href} 
              class={`${$page.url.pathname === link.href ? 'text-orange-500 border-b-2 border-secondary' : 'text-base-content hover:text-orange-600/90'} px-3 py-2 font-medium`}
            >
              {link.name}
            </a>
          </li>
        {/each}
      </ul>
      
      <!-- Mobile menu button -->
      <div class="md:hidden flex items-center">
        <button 
          onclick={toggleMobileMenu}
          class="btn bg-orange-600/90 btn-square"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {#if mobileMenuOpen}
            <!-- Close icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          {:else}
            <!-- Hamburger icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          {/if}
        </button>
      </div>
    </div>
  </div>
  
  <!-- Mobile Navigation -->
  <div class={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${mobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
    <ul class="px-2 pt-2 pb-4 space-y-2 bg-base-200/95 backdrop-blur-sm">
      {#each navLinks as link}
        <li>
          <a 
            href={link.href} 
            class={`${$page.url.pathname === link.href ? 'bg-orange-600/90 text-primary-content' : 'text-base-content hover:bg-orange-400'} block px-3 py-2 rounded-md text-base font-medium`}
            onclick={() => mobileMenuOpen = false}
          >
            {link.name}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</nav>