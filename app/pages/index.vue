<template>
  <div class="home-page overflow-x-hidden">
    <HomeHeroSlider />
    <HomeStatsBar />
    <HomeFacultiesSection />
    <HomeDigitalLibrarySection />
    
    <section class="py-16 bg-white border-t border-gray-100">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div class="lg:col-span-2">
            <HomeNewsEvents />
          </div>
          <div class="lg:col-span-1">
            <HomeQuickServices />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Components will be auto-imported by Nuxt
useHead({
  title: 'Home | Mekdela Amba University',
  meta: [
    { name: 'description', content: 'Welcome to Mekdela Amba University' }
  ]
})
</script>