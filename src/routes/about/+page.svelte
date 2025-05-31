<!-- /src/routes/about/+page.svelte -->
<script>
    const leadershipTeam = [
    {
        name: 'Pst Uche',
        role: 'Head of Administration',
        image: '/pst_uche.jpeg'
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

    const coreValues = [
        {
            title: "Biblical Truth",
            icon: "📖",
            description: "Sanctuary of God is a place of God's inner revelation to his people."
        },
        {
            title: "Authentic Community",
            icon: "👥",
            description: "Sanctuary of God is a place to obtain help from God."
        },
        {
            title: "Spiritual Growth",
            icon: "🌱",
            description: "Sanctuary of God is a place to discover the ways of God."
        },
        
        {
            title: "Joyful Worship",
            icon: "🎵",
            description: "There is strength, honor and beauty in the sanctuary of God."
        },
    ];
</script>

<section class="bg-white">
    <!-- Hero Section -->
    <div class="relative bg-gray-900">
        <div class="absolute inset-0">
            <img class="w-full h-full object-cover opacity-40" src="/member2.jpg" alt="Church building" loading="lazy"/>
        </div>
        <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
            <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Our Story
            </h1>
            <p class="mt-6 text-xl text-orange-300 max-w-3xl mx-auto">
                Raising Great Men abd Women of Power for the Kingdom
            </p>
        </div>
    </div>

    <!-- Our Story -->
    <div class="py-16 bg-white overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                <div class="mb-8 lg:mb-0">
                    <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Welcome to Sanctuary of God Christian Assembly
                    </h2>
                    <div class="mt-6 prose prose-orange text-gray-500 max-w-3xl">
                        <p>
                            Sanctuary of God Christian Assembly int'l is an interdenominational church with a global mandate to raise strong Kingdom ambassadors, equip belivers for transformational impact, and touc lives through the aboundant resources of the kingdom, Our mission is to restore destinies empower discipies, and expand God's kingdom worldwide.
                        </p>
                        <p>
                            We are a church called to raise strong men and women who will evangelize the world, lead with Kingdom authority, and create lasting impact, We believe in the power of the word of God to deliver and set-free lives and bring about total recovery and divine restoration, ensuring that everyone fulfils their God-given purpose, because there is no small person in our midst.
                        </p>
                    </div>
                </div>
                <div class="relative">
                    <div class="relative rounded-lg shadow-lg overflow-hidden">
                        <img class="w-full h-auto" src="/church.jpeg" alt="Church early days" loading="lazy"/>
                        <div class="absolute inset-0 bg-orange-300 mix-blend-multiply"></div>
                    </div>
                    <div class="relative mt-8 rounded-lg shadow-lg overflow-hidden">
                        <img class="w-full h-auto" src="/member5.jpg" alt="Current congregation" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Set Man Section - Insert this before the Leadership Team section -->
    <div class="py-16 bg-orange-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                <!-- Pastor's Photo -->
                <div class="mb-12 lg:mb-0">
                    <div class="relative rounded-xl overflow-hidden shadow-2xl">
                        <img 
                            class="w-full h-auto" 
                            src="/apts.jpeg" 
                            alt="Set Man" 
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-orange-900/80 via-orange-900/20 to-transparent"></div>
                        <div class="absolute bottom-0 left-0 p-6 text-white">
                            <p class="text-sm font-medium">Set Man of Sogca</p>
                            <h3 class="text-2xl font-bold mt-1">Amb Prof Apostle Ken Nwakanma</h3>
                        </div>
                    </div>
                </div>

                <!-- Pastor's Bio -->
                <div>
                    <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Our Set Man
                    </h2>
                    <div class="mt-6 prose prose-orange prose-lg text-gray-600">
                        <p>
                            <strong>AMBASSADOR PROFESSOR KEN NWAKANMA</strong> is a respected minister of the gospel, peace ambassador, and philanthropist, He answered the call to ministry in 1993 after training at Dimension Seminary School, Lagos.
                        </p>
                        <p>
                            He holds an honorary doctorate from cornerstone university, USA, He is the founder and lead Pastor of the Sanctuary of God Christian Assembly and President of the Christian Association for African Ministers, Through The Sanctuary Wealth MultiPurpose Foundation, he Leads impactful humanitarian work across communities.
                        </p>
                        <p>
                            Under his leadership, the Sanctuary of God Christian Assembly has grown into a vibrant community dedicated
                        </p>
                    </div>

                    <!-- Key Messages -->
                    <div class="mt-8">
                        <h4 class="text-lg font-medium text-gray-900">Key Messages:</h4>
                        <ul class="mt-3 space-y-2">
                            <li class="flex items-start">
                                <svg class="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>
                                <span class="text-gray-600">Breaking faulty foundation.</span>
                            </li>
                            <li class="flex items-start">
                                <svg class="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>
                                <span class="text-gray-600">You need a Man.</span>
                            </li>
                            <li class="flex items-start">
                                <svg class="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>
                                <span class="text-gray-600">Obedience and Instruction</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Call to Action -->
                    <div class="mt-8 flex flex-col sm:flex-row gap-3">
                        <a 
                            href="/platform" 
                            class="btn bg-orange-600"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            Watch Messages
                        </a>
                        <a 
                            href="/contact" 
                            class="btn btn-outline"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Contact Pastor
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Core Values -->
    <div class="relative bg-gray-900">   
        <div class="absolute inset-0">
            <img class="w-full h-full object-cover opacity-40" src="/church.jpeg" alt="Church building" loading="lazy"/>
        </div> 
        <div class="py-16 relative">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center">
                    <h2 class="text-3xl font-extrabold text-whute sm:text-4xl">
                        Our Core Values
                    </h2>
                    <p class="mt-4 max-w-2xl text-xl text-gray-50 mx-auto">
                        These principles guide everything we do as a church family
                    </p>
                </div>

                <div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    
                    {#each coreValues as value}
                        <div class="pt-6">
                            <div class="flow-root bg-white rounded-lg px-6 pb-8 h-full shadow-md hover:shadow-lg transition-shadow">
                                <div class="-mt-6">
                                    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white text-xl mx-auto">
                                        {value.icon}
                                    </div>
                                    <h3 class="mt-4 text-lg font-medium text-gray-900 text-center">{value.title}</h3>
                                    <p class="mt-2 text-base text-gray-500">
                                        {value.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
    <!-- Leadership Team -->
    <div class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
                <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    Our Leadership Team
                </h2>
                <p class="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                    Meet the people who guide our church community
                </p>
            </div>

            <div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {#each leadershipTeam as member}
                    <div class="pt-6">
                        <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                            <div class="-mt-6 text-center">
                                <div class="flex items-center justify-center h-24 w-24 rounded-full bg-white shadow-md overflow-hidden border-2 border-orange-500 mx-auto">
                                    <img class="h-full w-full object-cover" src={member.image} alt={member.name} loading="lazy"/>
                                </div>
                                <h3 class="mt-4 text-lg font-medium text-gray-900">{member.name}</h3>
                                <p class="mt-1 text-sm text-orange-600">{member.role}</p>
                                <p class="mt-2 text-base text-gray-500">
                                    {member.bio}
                                </p>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>

    <!-- Call to Action -->
    <div class="bg-orange-700">
        <div class="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
                <span class="block">Ready to visit us?</span>
                <span class="block">We'd love to meet you.</span>
            </h2>
            <p class="mt-4 text-lg leading-6 text-orange-200">
                Join us this Sunday for worship and fellowship.
            </p>
            <a href="/contact" class="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-orange-600 bg-white hover:bg-orange-50 sm:w-auto">
                Get Directions
            </a>
        </div>
    </div>
</section>