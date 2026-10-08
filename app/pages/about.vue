<template>
  <div class="about-page bg-[#EAF9FF]">
    <!-- Hero Section with Background Image -->
    <section class="hero-section relative py-24 overflow-hidden border-b border-[#01ACF2]">
      <div class="container-custom text-center text-[#0B2545] relative z-10">
        <span class="inline-block bg-[#01ACF2] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 border border-[#01ACF2] backdrop-blur-sm">
          Established 2018
        </span>
        <h1 class="text-5xl md:text-6xl font-bold text-[#0B2545]">
          Excellence in <span class="text-[#2f7bc1]">Knowledge</span>
        </h1>
        <p class="text-[#234d77] mt-4 max-w-2xl mx-auto text-lg">
          Discover the heart of Mekdela Amba University's academic research and digital innovation.
        </p>
      </div>
    </section>

    <div class="container-custom py-16">
      <!-- Mission & Vision -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div class="bg-[#EAF9FF] p-8 rounded-2xl shadow-sm border-2 border-[#01ACF2] text-center">
          <div class="text-5xl mb-4">🎯</div>
          <h3 class="text-2xl font-bold text-[#0B2545] mb-3">Our Mission</h3>
          <p class="text-[#234d77] leading-relaxed">
            To provide high-quality information resources, expert instructions, and innovative services 
            that support the research and learning needs of the Mekdela Amba University community.
          </p>
        </div>
        <div class="bg-[#EAF9FF] p-8 rounded-2xl shadow-sm border-2 border-[#01ACF2] text-center">
          <div class="text-5xl mb-4">👁️</div>
          <h3 class="text-2xl font-bold text-[#0B2545] mb-3">Our Vision</h3>
          <p class="text-[#234d77] leading-relaxed">
            To be a premier digital academic library in Ethiopia, recognized globally for excellence 
            in information delivery, research support, and preserving academic heritage.
          </p>
        </div>
      </div>

      <!-- Split Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div class="rounded-2xl overflow-hidden shadow-2xl border-4 border-[#01ACF2]">
          <img :src="heroImage " alt="Library Interior" class="w-full h-80 object-cover hover:scale-105 transition-transform duration-700" />
        </div>
        <div>
          <span class="text-[#2f7bc1] font-semibold text-sm uppercase tracking-wider">Library Impact</span>
          <h2 class="text-3xl font-bold text-[#0B2545] mt-2">
            More Than Just <span class="text-[#2f7bc1]">Books</span>
          </h2>
          <p class="text-[#234d77] mt-4 leading-relaxed">
            Our library serves as a dynamic hub for collaboration. With over 12,000 physical volumes 
            and access to millions of digital journals, we empower students to transcend boundaries.
          </p>
          <div class="grid grid-cols-2 gap-4 mt-6">
            <div class="bg-[#EAF9FF] rounded-lg p-4 text-center border border-[#01ACF2]">
              <div class="text-2xl font-bold text-[#1b4f82]">2000+</div>
              <div class="text-sm text-[#234d77]">E-Journals</div>
            </div>
            <div class="bg-[#EAF9FF] rounded-lg p-4 text-center border border-[#01ACF2]">
              <div class="text-2xl font-bold text-[#1b4f82]">24/7</div>
              <div class="text-sm text-[#234d77]">Digital Access</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Core Values -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-center text-[#0B2545] mb-10">
          Our Core <span class="text-[#2f7bc1]">Values</span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-[#EAF9FF] p-6 rounded-2xl shadow-sm border border-[#01ACF2] text-center hover:-translate-y-1 transition-transform">
            <div class="w-16 h-16 bg-[#EAF9FF] rounded-xl flex items-center justify-center mx-auto mb-4 text-3xl">⚖️</div>
            <h4 class="text-xl font-bold text-[#0B2545]">Integrity</h4>
            <p class="text-[#234d77] text-sm mt-2">Maintaining the highest standards of academic honesty.</p>
          </div>
          <div class="bg-[#EAF9FF] p-6 rounded-2xl shadow-sm border border-[#01ACF2] text-center hover:-translate-y-1 transition-transform">
            <div class="w-16 h-16 bg-[#EAF9FF] rounded-xl flex items-center justify-center mx-auto mb-4 text-3xl">♿</div>
            <h4 class="text-xl font-bold text-[#0B2545]">Accessibility</h4>
            <p class="text-[#234d77] text-sm mt-2">Ensuring knowledge is available to every student.</p>
          </div>
          <div class="bg-[#EAF9FF] p-6 rounded-2xl shadow-sm border border-[#01ACF2] text-center hover:-translate-y-1 transition-transform">
            <div class="w-16 h-16 bg-[#EAF9FF] rounded-xl flex items-center justify-center mx-auto mb-4 text-3xl">💡</div>
            <h4 class="text-xl font-bold text-[#0B2545]">Innovation</h4>
            <p class="text-[#234d77] text-sm mt-2">Continuously evolving with digital trends.</p>
          </div>
        </div>
      </div>

      <!-- Footer Actions -->
      <div class="flex flex-wrap justify-center gap-4">
        <NuxtLink to="/search" class="px-8 py-3 bg-[#01ACF2] text-white rounded-xl font-bold hover:bg-[#0196d9] transition-all shadow-lg">Explore Books</NuxtLink>
        <NuxtLink to="/" class="px-8 py-3 bg-white text-[#1b4f82] border border-[#01ACF2] rounded-xl font-bold hover:bg-[#EAF9FF] transition-all">Back to Home</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import heroImage from '~/assets/images/library12.jpg'
import bgImage from '~/assets/images/library2.avif'
</script>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, rgba(1, 172, 242, 0.88), rgba(148, 214, 255, 0.8)), v-bind('`url(${bgImage})`');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
</style>