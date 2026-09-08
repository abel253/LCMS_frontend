<template>
  <header class="bg-white/70 backdrop-blur-xl shadow-sm sticky top-0 z-50 border-b border-gray-100/50">
    <!-- Top Progress Bar (Visual enhancement) -->
    <div class="h-1 w-full bg-gradient-to-r from-primary-600 via-indigo-500 to-primary-800"></div>

    <nav class="container-custom mx-auto px-4 lg:px-8">
      <div class="flex items-center justify-between h-20">
        
        <!-- Logo Section -->
        <NuxtLink to="/" class="flex items-center space-x-3 group outline-none">
          <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary-200 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            M
          </div>
          <div class="hidden sm:block">
            <span class="block text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary-900 to-indigo-800 tracking-tight">MAU Library</span>
            <div class="flex items-center space-x-1">
              <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span class="block text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">Circulation System</span>
            </div>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation (Center) -->
        <ul class="hidden lg:flex items-center bg-gray-50/50 p-1.5 rounded-2xl border border-gray-100">
          <li v-for="link in navLinks" :key="link.path">
            <NuxtLink 
              :to="link.path"
              class="px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 relative"
              :class="[$route.path === link.path ? 'text-primary-700 bg-white shadow-sm' : 'text-gray-500 hover:text-primary-600 hover:bg-white/50']"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>

        <!-- Right Side Actions -->
        <div class="flex items-center space-x-3">
          <!-- Quick Search Icon (Desktop) -->
          <button class="hidden md:flex p-2.5 rounded-xl bg-gray-50 text-gray-400 hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          <!-- Authentication Logic with ClientOnly to fix Hydration Errors -->
          <ClientOnly>
            <div v-if="authStore.isAuthenticated" class="flex items-center space-x-3 pl-3 border-l border-gray-200">
              <div class="hidden md:flex flex-col items-end leading-tight">
                <span class="text-xs font-black text-gray-800">{{ authStore.user?.name || 'User' }}</span>
                <span class="text-[9px] px-1.5 py-0.5 rounded bg-primary-100 text-primary-700 font-bold uppercase tracking-tighter">{{ authStore.user?.user_type }}</span>
              </div>
              
              <!-- Profile Circle -->
              <div class="w-10 h-10 rounded-full bg-indigo-50 border-2 border-white shadow-sm flex items-center justify-center text-indigo-600 font-bold ring-2 ring-indigo-100/50">
                {{ authStore.user?.name?.charAt(0).toUpperCase() || 'U' }}
              </div>

              <!-- Logout Button -->
              <button @click="authStore.logout()" class="p-2.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all" title="Logout">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </button>
            </div>

            <div v-else class="flex items-center space-x-2">
              <NuxtLink to="/auth/login" class="hidden sm:block px-5 py-2.5 text-sm font-bold text-gray-600 hover:text-primary-600 transition-colors">
                Sign In
              </NuxtLink>
              <NuxtLink to="/auth/register" class="px-6 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-bold hover:bg-black transition-all shadow-lg shadow-gray-200 active:scale-95">
                Join Now
              </NuxtLink>
            </div>
          </ClientOnly>

          <!-- Mobile Menu Button -->
          <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="lg:hidden p-2.5 rounded-xl bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors">
            <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu Content -->
      <transition name="mobile-menu">
        <div v-if="isMobileMenuOpen" class="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl overflow-hidden">
          <div class="p-4 space-y-1">
            <NuxtLink v-for="link in navLinks" :key="link.path" :to="link.path" @click="isMobileMenuOpen = false"
              class="block px-4 py-4 rounded-xl text-base font-bold text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors">
              {{ link.label }}
            </NuxtLink>
            <div v-if="authStore.user?.user_type === 'librarian'" class="pt-2 border-t border-gray-50">
                <NuxtLink to="/librarian/dashboard" @click="isMobileMenuOpen = false" class="block px-4 py-4 rounded-xl bg-primary-600 text-white font-bold text-center">
                    Go to Admin Panel
                </NuxtLink>
            </div>
          </div>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
const isMobileMenuOpen = ref(false)

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/search', label: 'Search Books' },
  { path: '/research', label: 'Research' }
]
</script>

<style scoped>
/* Mobile Menu Animation */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  max-height: 500px;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-10px);
}

/* Glassmorphism adjustment */
header {
  -webkit-backdrop-filter: blur(20px);
}
</style>