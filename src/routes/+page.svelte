<script>
    import Hero from '$lib/components/hero/hero.svelte';
    import Resource from '$lib/components/card/resource.svelte';
    import UpComingEvent from '$lib/components/calender/upComingEvent.svelte';
    import Sermon from '$lib/components/sermons/sermon.svelte';
    import {fade} from 'svelte/transition';

    let { data } = $props();

    const teamMembers = [
    {
        name: 'Pst Uche',
        role: 'Head of Administration',
        image: '/pst_uche2.jpeg'
    },
    {
        name: 'Apts Ken Nwakanma',
        role: 'Founder & CEO',
        image: '/apts.jpeg'
      
    },
    {
        name: 'Pst Issac Sunday',
        role: 'Dean Facilities',
        image: '/pst_issac.jpeg'
    }
  ];

  let cards = [
    {
        title: 'Mission & Vision',
        subtext: "Our core value.",
        image: "/member1.jpg",
        href: "about"
    },
    {
        title: 'Ministries Calender',
        subtext: "Church program plans.",
        image: "/member3.jpg",
        href: "event"
    },
    {
        title: 'E-Library',
        subtext: "Feed your spirit with sermons.",
        image: "/member2.jpg",
        href: "resource"
    },
    {
        title: 'Resource',
        subtext: "Ministry resource for you. ",
        image: "/member5.jpg",
        href: "platform"
    }
  ]
</script>

<div>
<Hero />
</div>

<br>
<!-- Call to Action -->
<section>
    <div class="container mx-auto px-4 py-16">
  <!-- Section Header -->
  <div class="text-center mb-12">
    <h2 class="text-3xl md:text-4xl font-bold text-orange-500 mb-4">Our Services & Ministries</h2>
    <p class="text-lg text-gray-200 max-w-2xl mx-auto">Join us for worship, fellowship, and spiritual growth</p>
  </div>

  <!-- Main Service Card (Left Image + Right Details) -->
  <div class="flex flex-col m-10 lg:flex-row gap-8 mb-12 bg-white rounded-xl shadow-lg overflow-hidden">
    <!-- Left - Image -->
    <div class="lg:w-1/2 h-64 lg:h-auto bg-cover bg-center" 
         style="background-image: url('/member1.jpg')">
    </div>
    
    <!-- Right - Content -->
    <div class="lg:w-1/2 p-8 flex flex-col justify-center">
      <h3 class="text-2xl font-bold text-gray-800 mb-2">Weekly Services</h3>
      <div class="space-y-4 mb-6">
        <div class="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-500 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h4 class="font-semibold text-lg text-orange-300">Sunday Worship</h4>
            <p class="text-gray-600">9:00 AM - 11:00 AM</p>
          </div>
        </div>
        <div class="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-500 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h4 class="font-semibold text-lg text-orange-300">Tuesday Communion Service</h4>
            <p class="text-gray-600">6:00 PM - 8:00 PM</p>
          </div>
        </div>
      </div>
      <button class="btn bg-orange-500 hover:bg-orange-600 text-white w-full lg:w-auto transform hover:-translate-y-1 transition-all duration-300">
        Plan Your Visit
      </button>
    </div>
  </div>

  <!-- Ministry Cards (4 Cards with Background Images) -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {#each cards as card }
        <Resource {...card}/>
    {/each}
  </div>
</div>
</section>

<!-- E-Library -->
<div>
  <Sermon/>
</div>

<!-- Who we Are -->
<div class="container mx-auto px-4 py-12">
  <div class="flex flex-col lg:flex-row items-center gap-8">
    <!-- Text Content -->
    <div class="lg:w-1/2">
      <div class="flex items-center gap-3 mb-6">
        <!-- Cross Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-orange-500/90" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <h2 class="text-2xl md:text-3xl font-bold text-orange-500/90">Who We Are</h2>
      </div>
      <div class="prose max-w-none m-5">

        <small>
            <p class="text-sm text-orange-500 mb-2">Our Vision</p>
        </small>
        <p class="text-lg mb-4">
          To equip, train, and empower individuals for effective Christian ministry, ensuring they are deeply rooted in the Word of God and prepared to serve with integrity and excellence.
        </p>
        <small>
            <p class="text-sm text-orange-500 mb-2">Our Mission</p>
        </small>
        <p class="text-lg mb-4">
          To provide a structured and comprehensive training program that integrates theological education, leadership development, spiritual discipline, and pastoral mentorship to raise competent ministers for the kingdom of God.
        </p>
        
      </div>
      <div>
        <a href="/about" class="btn bg-orange-600/90 transform-3d hover:bg-orange-700 transition-all sm:float-start lg:float-end m-5">About</a>
      </div>
    </div>
    
    <!-- Image -->
    <div class="lg:w-1/2">
      <div class="card bg-base-100 shadow-xl">
        <figure>
          <img 
            src="/member3.jpg" 
            alt="Church congregation worshiping" 
            class="w-full h-auto rounded-lg"
            loading="lazy"
          />
        </figure>
        <div class="card-body">
          <p>Join us in worship every Sunday at 09:00 AM</p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Event calender -->
 <section class="py-8">
    <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-center mb-8 text-orange-600/90">Upcoming Programs</h1>
        
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-1">
            <!-- Main content column -->
            <div class="lg:col-span-2">
                <!-- Your main content here -->
                <div class="prose max-w-none">
                    <p>Welcome to our church family! We're glad you're here.</p>
                    <!-- More content -->
                </div>
            </div>
            
            <!-- Sidebar with upcoming events -->
            <div class="lg:col-span-1">
                <UpComingEvent events={data.upcomingEvents} maxEvents={5} />
                
                <!-- Additional sidebar content can go here -->
            </div>
        </div>
    </div>
</section>

<!-- Church Head -->
<section class="py-16 ">
  <div class="container mx-auto px-4 text-center mb-12">
    <h2 class="text-4xl font-bold mb-4 text-orange-600/90">Who We Are</h2>
    <p class="max-w-2xl mx-auto text-lg text-white">
     We are a church called to raise strong men and women who will evangelize the world, lead with Kingdom authority, and create lasting impact, We believe in the power of the word of God to deliver and set-free lives and bring about total recovery and divine restoration, ensuring that everyone fulfils their God-given purpose, because there is no small person in our midst.
    </p>
  </div>

  <div class="grid md:grid-cols-3 gap-8 px-4">
    {#each teamMembers as member}
      <div class="bg-gray-200 rounded-lg shadow hover:shadow-lg transition duration-300 p-6 flex flex-col items-center text-center">
        <div class="w-32 h-32 mb-4 overflow-hidden rounded-full border-4 border-orange-600/90">
          <img src={member.image} alt={member.name} class="w-full h-full object-cover" loading="lazy" />
        </div>
        <h3 class="text-xl font-semibold mb-2 text-orange-700">{member.name}</h3>
        <p class="text-gray-600">{member.role}</p>
      </div>
    {/each}
  </div>
</section>
