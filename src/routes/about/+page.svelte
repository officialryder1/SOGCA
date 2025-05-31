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
            description: "Sancturay of God is a place to ontain help from God."
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
            <img class="w-full h-full object-cover opacity-40" src="/member1.jpg" alt="Church building" loading="lazy"/>
        </div>
        <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
            <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Our Story
            </h1>
            <p class="mt-6 text-xl text-orange-300 max-w-3xl mx-auto">
                A community of faith, hope, and love serving Abuja since 2005
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
                            Founded in 2005, Living Faith Church began as a small gathering of believers in a home in Kubwa. 
                            Through God's faithfulness, we've grown into a vibrant community impacting lives across Abuja.
                        </p>
                        <p>
                            Our mission is to lead people into a growing relationship with Jesus Christ through authentic worship, 
                            biblical teaching, and compassionate service. We believe church should be a place where everyone 
                            feels welcomed, valued, and challenged to grow spiritually.
                        </p>
                        <p>
                            Whether you're exploring faith or looking for a church home, we invite you to join us as we 
                            journey together in discovering God's purpose for our lives.
                        </p>
                    </div>
                </div>
                <div class="relative">
                    <div class="relative rounded-lg shadow-lg overflow-hidden">
                        <img class="w-full h-auto" src="/church.jpeg" alt="Church early days" loading="lazy"/>
                        <div class="absolute inset-0 bg-orange-300 mix-blend-multiply"></div>
                    </div>
                    <div class="relative mt-8 rounded-lg shadow-lg overflow-hidden">
                        <img class="w-full h-auto" src="/church-congregation.jpg" alt="Current congregation" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Core Values -->
    <div class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
                <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    Our Core Values
                </h2>
                <p class="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
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