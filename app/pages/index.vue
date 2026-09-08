<template>
  <div class="home-page overflow-x-hidden">
    <!-- 1. Hero Section with Animated Image Slider -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Background Images Container -->
      <div class="absolute inset-0 z-0">
        <transition-group name="fade">
          <div 
            v-for="(image, index) in heroImages" 
            :key="image"
            v-show="currentImageIndex === index"
            class="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] scale-110"
            :class="{ 'scale-100': currentImageIndex === index }"
            :style="{ backgroundImage: `url(${image})` }"
          >
            <!-- Overlay - ጽሁፉ ጎልቶ እንዲታይ የተጠናከረ ጥላ -->
            <div class="absolute inset-0 bg-black/50 bg-gradient-to-t from-mau-dark via-mau-dark/40 to-black/50"></div>
          </div>
        </transition-group>
      </div>

      <!-- Hero Content -->
      <div class="container-custom relative z-10 text-white mt-20 px-4">
        <div class="max-w-4xl space-y-8 " >
          <!-- Welcome Badge -->
          <span class="inline-block ml-20 px-5 max-w-500 py-5 md:text-3xl lg:text-4xl bg-mau-gold text-mau-dark rounded-full text-sm font-black tracking-widest uppercase shadow-2xl animate-pulse">
            Welcome to MAU Library
          </span>

          <!-- Main Title - እጅግ ቦልድ እና ጥላ ያለው -->
          <h1 class="text-5xl md:text-5xl lg:text-5xl font-black leading-none tracking-tighter drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)]">
            Knowledge is the Gateway to the Future
           
          </h1>

          <!-- Subtext - መነበብ እንዲችል በሳጥን የተከበበ -->
          <div class="max-w-2xl bg-black/20 backdrop-blur-sm p-6 rounded-2xl border-l-4 border-mau-gold shadow-2xl">
            <p class="text-xl md:text-3xl text-gray-100 leading-relaxed font-bold drop-shadow-md">
              The official heart of academic excellence at Mekdela Amba University. 
              Explore thousands of resources with ease, precision, and global access.
            </p>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-wrap gap-6 pt-6">
            <NuxtLink to="/search" class="group bg-mau-gold hover:bg-yellow-400 text-mau-dark px-12 py-5 rounded-2xl font-black text-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(248,198,83,0.3)] flex items-center">
              Explore Books Now
              <span class="ml-3 group-hover:translate-x-3 transition-transform text-2xl">→</span>
            </NuxtLink>
            <NuxtLink to="/research" class="bg-white/10 hover:bg-white/20 backdrop-blur-xl border-2 border-white/30 text-black px-12 py-5 rounded-2xl font-black text-xl transition-all transform hover:-translate-y-2 shadow-2xl">
              Research Portal
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Decorative Bottom Wave -->
      <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" class="relative block w-full h-[80px] fill-mau-gray">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.47,113.43,143.61,124.27,210.86,112.91c67.24-11.36,110.53-45.67,110.53-45.67Z"></path>
        </svg>
      </div>
    </section>

    <!-- 3. Borrowing Journey (Animated Steps) -->
    <section class="py-24 bg-mau-gray overflow-hidden">
      <div class="container-custom">
        <div class="text-center mb-20">
          <span class="text-mau-gold font-bold tracking-widest uppercase text-sm">How it works</span>
          <h2 class="text-4xl md:text-6xl font-black text-mau-dark mt-2 leading-tight">
            The Borrowing Journey
          </h2>
          <div class="w-24 h-2 bg-mau-gold mx-auto mt-6 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <!-- Connecting Line (Desktop) -->
          <div class="hidden md:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-gray-300 -z-0"></div>
          
          <div v-for="(step, index) in journeySteps" :key="index" 
               class="relative bg-white p-10 rounded-[40px] shadow-lg border border-gray-100 group hover:bg-mau-dark transition-colors duration-500 z-10 text-center">
            <div class="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-mau-gold text-mau-dark rounded-2xl flex items-center justify-center font-black text-xl shadow-lg transform rotate-45 group-hover:rotate-0 transition-transform duration-500">
              <span class="transform -rotate-0">{{ index + 1 }}</span>
            </div>
            <div class="text-6xl mb-6 group-hover:scale-110 transition-transform duration-500">{{ step.icon }}</div>
            <h4 class="text-2xl font-bold mb-4 group-hover:text-mau-gold transition-colors">{{ step.title }}</h4>
            <p class="text-gray-500 group-hover:text-gray-300 transition-colors leading-relaxed">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Research Repository Highlight -->
    <section class="py-24 relative">
      <div class="container-custom">
        <div class="bg-mau-dark rounded-[50px] overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center">
          <div class="lg:w-2/3 p-12 md:p-20 space-y-8">
            <h2 class="text-4xl md:text-6xl font-bold text-white">
              Digital Research <span class="text-mau-gold">Repository</span>
            </h2>
            <p class="text-gray-300 text-xl leading-relaxed">
              Currently, we have <strong>{{ stats.research }} research projects</strong> uploaded by students. 
              These resources are available for reference to help you in your academic journey.
            </p>
            <NuxtLink to="/research" class="inline-flex items-center text-mau-gold text-2xl font-bold hover:underline group">
              Go to Research Portal 
              <span class="ml-3 group-hover:translate-x-3 transition-transform">→</span>
            </NuxtLink>
          </div>
          <div class="lg:w-1/3 bg-mau-gold/10 w-full h-full p-20 flex flex-col items-center justify-center border-l border-white/10">
            <div class="text-8xl font-black text-mau-gold mb-2">{{ stats.research }}</div>
            <span class="text-white font-bold tracking-[0.2em] uppercase text-sm">Total Uploads</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// ምስሎችን ከ Assets ማስገባት (Importing Assets)
import lib1 from '~/assets/images/library1.avif'
import lib2 from '~/assets/images/library2.avif'
import lib4 from '~/assets/images/library4.avif'
import lib7 from '~/assets/images/library7.avif'
import lib11 from '~/assets/images/library9.avif'
import lib12 from '~/assets/images/library6.avif'

const currentImageIndex = ref(0)
const heroImages = [lib11, lib12, lib7, lib1, lib2, lib4]
const stats = reactive({ students: 0, books: 0, research: 0 })

// የጀርባ ምስሉን በየ 6 ሰከንዱ መቀየር
let timer = null
onMounted(() => {
  timer = setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % heroImages.length
  }, 6000)
  fetchStats()
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})

const fetchStats = async () => {
  try {
    const data = await $fetch('http://localhost/library/get_stats.php')
    stats.students = data.studentCount || 3200
    stats.books = data.bookCount || 12000
    stats.research = data.researchCount || 450
  } catch (e) {
    // Fallback numbers for UI demo
    stats.students = 3200; stats.books = 12000; stats.research = 450;
  }
}

const statsCards = computed(() => [
  { icon: '📚', value: stats.books.toLocaleString(), label: 'Academic Books', borderColor: 'border-mau-gold' },
  { icon: '📁', value: stats.research.toLocaleString(), label: 'Research Papers', borderColor: 'border-blue-500' },
  { icon: '🎓', value: stats.students.toLocaleString(), label: 'Active Students', borderColor: 'border-green-500' },
  { icon: '🌐', value: '24/7', label: 'Digital Access', borderColor: 'border-purple-500' }
])

const journeySteps = [
  { icon: '📍', title: 'Locate on Shelf', description: 'Find the book\'s Shelf Number from our intelligent search terminals.' },
  { icon: '🎟️', title: 'Present MAU ID', description: 'Bring the resource to the Circulation Desk with your university ID.' },
  { icon: '✍️', title: 'Physical Signature', description: 'Complete the digital-physical hybrid checkout with a signature.' }
]
</script>

<style>
/* CSS Variables & Global Styles */
:root {
  --mau-dark: #022c22;
  --mau-gold: #f8c653;
  --mau-gray: #f8fafc;
}

.bg-mau-dark { background-color: var(--mau-dark); }
.text-mau-dark { color: var(--mau-dark); }
.bg-mau-gold { background-color: var(--mau-gold); }
.text-mau-gold { color: var(--mau-gold); }
.bg-mau-gray { background-color: var(--mau-gray); }
.fill-mau-gray { fill: var(--mau-gray); }

.container-custom {
  @apply max-w-7xl mx-auto px-6;
}

/* Background Slider Fade Effect */
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s ease-in-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Smooth Entrance Animations */
.animate-fade-in {
  animation: fadeInUp 1.2s ease-out forwards;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

h1 {
  /* በምስሉ ላይ ጽሁፉ "Pop" እንዲያደርግ ይረዳል */
  text-shadow: 4px 4px 15px rgba(0, 0, 0, 0.9);
}

.home-page {
  background-color: var(--mau-gray);
}

/* Background Slider Fade Effect */
.fade-enter-active, .fade-leave-active {
  transition: opacity 2.5s ease-in-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Button Hover Glow */
.btn-gold-glow:hover {
  box-shadow: 0 0 30px rgba(248, 198, 83, 0.6);
}
</style>