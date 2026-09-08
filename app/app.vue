<!-- app.vue -->
<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
<script setup>
// Initialize auth on app start
if (process.client) {
  const authStore = useAuthStore()
  authStore.init()
}
</script>