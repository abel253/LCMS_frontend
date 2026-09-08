import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
    future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2026-09-08',
  devtools: { enabled: true },
  
  css: [
    '~/assets/css/tailwind.css'  // ✅ Make sure this path is correct
  ],
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt'
  ],
  
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:8000'
    }
  },
  
  nitro: {
    preset: 'node-server'
  },
  
  app: {
    head: {
      title: 'MAU Library System',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Mekdela Amba University Library Circulation System' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})