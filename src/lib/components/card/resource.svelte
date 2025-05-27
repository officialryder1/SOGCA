<script>
    let {title, subtext, image, href} = $props();
</script>

 <!-- Card 2 -->
<div class="relative h-64 rounded-xl overflow-hidden group">
    <a href="{href}"><div class="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110" 
        style="background-image: url({image})">
    <!-- <div class="absolute inset-0 bg-purple-900 bg-opacity-40 group-hover:bg-opacity-20 transition-all"></div> -->
    </div>
    <div class="relative h-full flex flex-col items-center justify-center p-6 text-center text-white">
    <h3 class="text-2xl font-bold mb-2 transform group-hover:scale-105 transition-all text-shadow-2xs text-shadow-orange-800">{title}</h3>
    <p class="opacity-90 group-hover:opacity-100 transition-all">{subtext}</p>
    </div></a>
</div>