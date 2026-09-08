<template>
  <div class="about-page">
    <!-- Hero Section with Background Image -->
    <section class="hero-section relative py-24 overflow-hidden">
      <div class="container-custom text-center text-white relative z-10">
        <span class="inline-block bg-gold-500/20 text-gold-300 px-4 py-1 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
          Established 2018
        </span>
        <h1 class="text-5xl md:text-6xl font-bold">
          Excellence in <span class="text-gold-400">Knowledge</span>
        </h1>
        <p class="text-primary-100 mt-4 max-w-2xl mx-auto text-lg">
          Discover the heart of Mekdela Amba University's academic research and digital innovation.
        </p>
      </div>
    </section>

    <div class="container-custom py-16">
      <!-- Mission & Vision -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
          <div class="text-5xl mb-4">🎯</div>
          <h3 class="text-2xl font-bold text-primary-800 mb-3">Our Mission</h3>
          <p class="text-gray-600 leading-relaxed">
            To provide high-quality information resources, expert instructions, and innovative services 
            that support the research and learning needs of the Mekdela Amba University community.
          </p>
        </div>
        <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
          <div class="text-5xl mb-4">👁️</div>
          <h3 class="text-2xl font-bold text-primary-800 mb-3">Our Vision</h3>
          <p class="text-gray-600 leading-relaxed">
            To be a premier digital academic library in Ethiopia, recognized globally for excellence 
            in information delivery, research support, and preserving academic heritage.
          </p>
        </div>
      </div>

      <!-- Split Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div class="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          <!-- ምስሉ እዚህ ጋር አስተካክለነዋል -->
          <img :src="heroImage " alt="Library Interior" class="w-full h-80 object-cover hover:scale-105 transition-transform duration-700" />
        </div>
        <div>
          <span class="text-gold-500 font-semibold text-sm uppercase tracking-wider">Library Impact</span>
          <h2 class="text-3xl font-bold text-primary-800 mt-2">
            More Than Just <span class="text-gold-500">Books</span>
          </h2>
          <p class="text-gray-600 mt-4 leading-relaxed">
            Our library serves as a dynamic hub for collaboration. With over 12,000 physical volumes 
            and access to millions of digital journals, we empower students to transcend boundaries.
          </p>
          <div class="grid grid-cols-2 gap-4 mt-6">
            <div class="bg-primary-50 rounded-lg p-4 text-center border border-primary-100">
              <div class="text-2xl font-bold text-primary-700">2000+</div>
              <div class="text-sm text-gray-600">E-Journals</div>
            </div>
            <div class="bg-primary-50 rounded-lg p-4 text-center border border-primary-100">
              <div class="text-2xl font-bold text-primary-700">24/7</div>
              <div class="text-sm text-gray-600">Digital Access</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Core Values -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-center text-primary-800 mb-10">
          Our Core <span class="text-gold-500">Values</span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition-transform">
            <div class="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-4 text-3xl">⚖️</div>
            <h4 class="text-xl font-bold text-gray-800">Integrity</h4>
            <p class="text-gray-500 text-sm mt-2">Maintaining the highest standards of academic honesty.</p>
          </div>
          <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition-transform">
            <div class="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-4 text-3xl">♿</div>
            <h4 class="text-xl font-bold text-gray-800">Accessibility</h4>
            <p class="text-gray-500 text-sm mt-2">Ensuring knowledge is available to every student.</p>
          </div>
          <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition-transform">
            <div class="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-4 text-3xl">💡</div>
            <h4 class="text-xl font-bold text-gray-800">Innovation</h4>
            <p class="text-gray-500 text-sm mt-2">Continuously evolving with digital trends.</p>
          </div>
        </div>
      </div>

      <!-- Footer Actions -->
      <div class="flex flex-wrap justify-center gap-4">
        <NuxtLink to="/search" class="px-8 py-3 bg-primary-700 text-white rounded-xl font-bold hover:bg-primary-800 transition-all shadow-lg">Explore Books</NuxtLink>
        <NuxtLink to="/" class="px-8 py-3 bg-white text-primary-700 border border-primary-200 rounded-xl font-bold hover:bg-gray-50 transition-all">Back to Home</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
// ✅ Import image from assets for the hero background
import heroImage from '~/assets/images/library12.jpg'
import bgImage from '~/assets/images/library2.avif'
// You can use it in the style with v-bind
</script>

<style scoped>
.hero-section {
  background:v-bind('`url(${bgImage})`');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
</style>