<template>
  <header class="relative w-full z-50 bg-[#0B2545] shadow-xl">
    
    <!-- DESKTOP HEADER -->
    <div class="hidden lg:block container-custom relative h-[100px] xl:h-[110px]">
      
      <!-- Top Utilities Row -->
      <div class="flex justify-end items-center pt-2 pb-1 text-white text-[11px] xl:text-xs font-medium gap-2 xl:gap-3 tracking-wide relative z-20">
        <!-- Search Bar -->
        <div class="relative mr-2 xl:mr-4">
          <input type="text" placeholder="Search..." 
                 class="bg-transparent border border-white/30 rounded-full px-4 py-1 w-48 xl:w-64 text-white focus:outline-none focus:border-white placeholder-gray-400 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        
        <NuxtLink to="#" class="hover:text-gold-400 transition-colors">News</NuxtLink>
        <span class="text-white/30">|</span>
        <NuxtLink to="#" class="hover:text-gold-400 transition-colors">Events</NuxtLink>
        <span class="text-white/30">|</span>
        <NuxtLink to="#" class="hover:text-gold-400 transition-colors">E-Learning</NuxtLink>
        <span class="text-white/30">|</span>
        <NuxtLink to="#" class="hover:text-gold-400 transition-colors">Email</NuxtLink>
        <span class="text-white/30">|</span>
        
        <!-- Language Selector -->
        <div class="flex items-center gap-1 cursor-pointer hover:text-gold-400 transition-colors ml-1">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
          EN
          <svg xmlns="http://www.w3.org/2000/svg" class="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <!-- Logo and University Name -->
      <div class="absolute left-0 top-3 flex items-start z-20">
        <!-- Diamond Logo Wrapper -->
        <div class="relative w-20 h-20 xl:w-24 xl:h-24 flex items-center justify-center mr-4 xl:mr-5">
          <div class="w-14 h-14 xl:w-16 xl:h-16 bg-white rotate-45 overflow-hidden border-[2px] border-[#5BC0EB] shadow-lg flex items-center justify-center">
             <!-- The image is counter-rotated so it stands straight inside the diamond -->
             <img src="~/assets/images/maus.jpg" class="w-[140%] h-[140%] -rotate-45 object-contain" alt="MAU Logo" />
          </div>
        </div>
        
        <!-- Text -->
        <div class="pt-0.5 xl:pt-1">
          <h1 class="text-white text-xl xl:text-2xl font-serif font-bold tracking-wide shadow-sm leading-tight">Mekdela Amba University</h1>
          <h2 class="text-gold-400 text-sm xl:text-base font-bold mt-0.5 font-serif tracking-wider shadow-sm">መቅደላ አምባ ዩኒቨርሲቲ</h2>
          
        </div>
      </div>
    </div>

    <!-- DESKTOP BOTTOM WHITE NAV BAR -->
    <div class="hidden lg:block absolute bottom-0 right-0 h-10 xl:h-11 bg-white shadow-lg z-10 w-[70%] xl:w-[75%]" 
         style="clip-path: polygon(25px 0, 100% 0, 100% 100%, 0 100%);">
      <div class="w-full h-full pl-8 xl:pl-12 pr-4 xl:pr-6">
        <ul class="flex items-center justify-between w-full h-full text-[#0B2545] font-bold text-[11px] xl:text-xs">
          <li v-for="link in navLinks" :key="link.path" class="h-full flex items-center">
            <NuxtLink :to="link.path" 
                      class="h-full flex items-center px-1.5 xl:px-2 hover:text-gold-500 transition-colors"
                      :class="{ 'border-b-[3px] border-gold-500 text-[#0B2545] pt-[3px]': $route.path === link.path, 'pt-[3px]': $route.path !== link.path }">
              {{ link.label }}
              <svg v-if="link.hasDropdown" xmlns="http://www.w3.org/2000/svg" class="h-2.5 w-2.5 ml-1 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </NuxtLink>
            <!-- Vertical Divider -->
            <span v-if="link.label !== 'Contact'" class="text-gray-300 ml-2 xl:ml-3 font-normal opacity-50">|</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- MOBILE HEADER (Unchanged from previous logic, just styled to match) -->
    <div class="lg:hidden bg-[#0B2545] border-b border-white/10">
      <div class="container-custom flex items-center justify-between h-20">
        <NuxtLink to="/" class="flex items-center gap-3">
          <div class="w-12 h-12 bg-white rotate-45 overflow-hidden border-2 border-[#5BC0EB] flex items-center justify-center">
             <img src="~/assets/images/maus.jpg" class="w-[140%] h-[140%] -rotate-45 object-contain" alt="MAU Logo" />
          </div>
          <div>
            <span class="block text-white font-serif font-bold text-lg leading-tight">Mekdela Amba</span>
            <span class="block text-gold-400 font-serif text-sm">ዩኒቨርሲቲ</span>
          </div>
        </NuxtLink>
        <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="p-2 text-white">
          <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
    </div>

    <!-- MOBILE MENU CONTENT -->
    <transition name="mobile-menu">
      <div v-if="isMobileMenuOpen" class="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl z-50">
        <div class="p-4 border-b border-gray-100">
          <input type="text" placeholder="Search..." class="w-full px-4 py-2 border border-gray-300 rounded-md" />
        </div>
        <div class="p-2">
          <NuxtLink v-for="link in navLinks" :key="link.path" :to="link.path" @click="isMobileMenuOpen = false"
            class="block px-4 py-3 text-[#0B2545] font-bold border-b border-gray-50 hover:bg-gray-50">
            {{ link.label }}
          </NuxtLink>
        </div>
      </div>
    </transition>
    
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
const isMobileMenuOpen = ref(false)

const navLinks = [
  { path: '/', label: 'Home', hasDropdown: false },
  { path: '/about', label: 'About', hasDropdown: true },
  { path: '/academics', label: 'Academics', hasDropdown: true },
  { path: '/admissions', label: 'Admissions', hasDropdown: true },
  { path: '/research', label: 'Research', hasDropdown: true },
  { path: '/search', label: 'Library', hasDropdown: true },
  { path: '/auth/login', label: 'Student Portal', hasDropdown: false },
  { path: '/contact', label: 'Contact', hasDropdown: false }
]
</script>

<style scoped>
.mobile-menu-enter-active, .mobile-menu-leave-active {
  transition: all 0.3s ease;
  max-height: 500px;
  overflow: hidden;
}
.mobile-menu-enter-from, .mobile-menu-leave-to {
  max-height: 0;
}
</style>