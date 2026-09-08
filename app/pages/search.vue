<!-- pages/search.vue -->
<template>
  <div class="search-page">
    <!-- Hero Search -->
    <section class="gradient-hero py-20">
      <div class="container-custom text-center text-white">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Mekdela Amba University Library</h1>
        <p class="text-primary-100 mb-8">Search our collection of thousands of books and resources</p>
        
        <form @submit.prevent="handleSearch" class="max-w-3xl mx-auto">
          <div class="flex flex-col sm:flex-row gap-3">
            <select v-model="searchType" class="input-field !bg-white !text-gray-800 sm:w-40">
              <option value="title">Title</option>
              <option value="author">Author</option>
              <option value="isbn">ISBN</option>
            </select>
            <input 
              v-model="searchTerm"
              type="text"
              placeholder="Search books..."
              class="input-field !bg-white !text-gray-800 flex-1"
              required
            />
            <button type="submit" class="btn-gold px-8 py-3 text-lg">
              Search Now
            </button>
          </div>
        </form>
      </div>
    </section>

    <!-- Results -->
    <section class="container-custom py-12" v-if="searched">
      <div class="flex justify-between items-center mb-6">
        <h3 class="text-xl font-bold text-gray-800">
          Found {{ results.length }} items
        </h3>
        <button @click="resetSearch" class="text-gray-500 hover:text-gray-700 text-sm">
          Clear Results
        </button>
      </div>

      <div class="table-wrapper">
        <table class="table-custom">
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
              <th>Location</th>
              <th>Shelf Access</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in results" :key="item.id">
              <td>
                <strong>{{ item.title }}</strong>
                <div class="text-xs text-gray-400">ISBN: {{ item.isbn }}</div>
              </td>
              <td>
                <span :class="item.status === 'AVAILABLE' ? 'badge-available' : 'badge-borrowed'">
                  {{ item.status }}
                </span>
              </td>
              <td>{{ item.location || 'Main Library' }}</td>
              <td>
                <span :class="item.is_closed ? 'text-red-500' : 'text-green-500'">
                  {{ item.is_closed ? '🔒 Hidden until Approved' : '🔓 Open Access' }}
                </span>
              </td>
              <td>
                <template v-if="item.is_closed">
                  <button 
                    @click="requestBook(item.id)"
                    class="btn-primary text-sm px-4 py-1.5"
                    :disabled="item.status === 'BORROWED' || loading"
                  >
                    {{ loading ? 'Processing...' : (item.status === 'BORROWED' ? 'Out of Stock' : 'Request Access') }}
                  </button>
                </template>
                <template v-else>
                  <span class="badge-available">✅ Open Access</span>
                </template>
              </td>
            </tr>
            <tr v-if="results.length === 0">
              <td colspan="5" class="text-center py-8 text-gray-500">
                No items found matching your search.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useLibraryStore } from '~/stores/library'
import { useAuthStore } from '~/stores/auth'

const libraryStore = useLibraryStore()
const authStore = useAuthStore()

const searchTerm = ref('')
const searchType = ref('title')
const results = ref([])
const searched = ref(false)
const loading = ref(false)

const handleSearch = async () => {
  await libraryStore.searchBooks(searchTerm.value, searchType.value)
  results.value = libraryStore.searchResults
  searched.value = true
}

const requestBook = async (itemId) => {
  if (!authStore.isAuthenticated) {
    alert('⚠️ Please login to request books from Closed Shelf.')
    navigateTo('/auth')
    return
  }

  loading.value = true
  try {
    const res = await libraryStore.requestBook(itemId)
    if (res.success) {
      alert('✅ Your request has been sent to the librarian. You will find the shelf number in "My Borrows" once approved.')
      // Refresh results
      await handleSearch()
    } else {
      alert('❌ ' + (res.message || 'Request failed. Please try again.'))
    }
  } catch (error) {
    alert('❌ Server error. Please try again.')
    console.error('Request error:', error)
  } finally {
    loading.value = false
  }
}

const resetSearch = () => {
  searchTerm.value = ''
  results.value = []
  searched.value = false
}
</script>

<style scoped>
.search-page {
  @apply bg-gray-50 min-h-screen;
}
</style>