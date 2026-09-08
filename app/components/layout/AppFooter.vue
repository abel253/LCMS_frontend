<!-- components/layout/AppFooter.vue -->
<template>
  <footer class="bg-primary-900 text-white mt-auto">
    <div class="container-custom py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Brand -->
        <div>
          <h3 class="text-xl font-bold mb-3">Mekdela Amba University</h3>
          <p class="text-primary-200 text-sm leading-relaxed">
            The official library circulation system dedicated to academic excellence 
            and research innovation.
          </p>
        </div>
        
        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold mb-3">Quick Links</h4>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.path">
              <NuxtLink 
                :to="link.path"
                class="text-primary-200 hover:text-white transition-colors duration-200 text-sm"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        
        <!-- Contact -->
        <div>
          <h4 class="text-lg font-semibold mb-3">Contact Us</h4>
          <ul class="space-y-2 text-primary-200 text-sm">
            <li>📍 Tulu Awulia, Ethiopia</li>
            <li>📧 library@mkau.edu.et</li>
            <li>📞 +251 11 XXX XXXX</li>
          </ul>
        </div>
      </div>
      
      <!-- Bottom -->
      <div class="border-t border-primary-800 mt-8 pt-6 text-center text-sm text-primary-300">
        <p>
          &copy; {{ new Date().getFullYear() }} Mekdela Amba University Library System 
          | Developed by CS and SFE Department Students
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const quickLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/search', label: 'Search Books' },
  { path: '/research', label: 'Research Portal' }
]
</script>