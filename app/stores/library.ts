// stores/library.ts
import { defineStore } from 'pinia'
import { useAuthStore } from './auth'
interface Book {
  id: number
  title: string
  author: string
  isbn: string
  status: string
  location: string
  is_closed: boolean
  shelf_number?: string
  barcode?: string
}

interface Borrow {
  id: number
  book_id: number
  user_id: number
  transaction_id: string
  book_title: string
  borrow_date: string
  due_date: string
  return_date: string | null
  status: string
  barcode: string
  shelf_number: string
  subject_category: string
}

interface LibraryState {
  books: Book[]
  searchResults: Book[]
  myBorrows: Borrow[]
  loading: boolean
}

export const useLibraryStore = defineStore('library', {
  state: (): LibraryState => ({
    books: [],
    searchResults: [],
    myBorrows: [],
    loading: false
  }),
  
  getters: {
    getBookById: (state) => (id: number) => {
      return state.books.find(book => book.id === id)
    },
    getAvailableBooks: (state) => {
      return state.books.filter(book => book.status === 'AVAILABLE')
    }
  },
  
  actions: {
    getApiUrl(path: string) {
      const config = useRuntimeConfig()
      const base = config.public.apiBase.endsWith('/') 
        ? config.public.apiBase.slice(0, -1) 
        : config.public.apiBase
      return `${base}${path}`
    },
    
    async searchBooks(query: string, type: string = 'title') {
      this.loading = true
      try {
        const res: any = await $fetch(this.getApiUrl(`/books/search?q=${query}&type=${type}`))
        this.searchResults = res.data || []
        return res
      } catch (error) {
        console.error('Search error:', error)
        return { data: [] }
      } finally {
        this.loading = false
      }
    },
    
    async getMyBorrows(userId: number) {
      this.loading = true
      try {
        const res: any = await $fetch(this.getApiUrl(`/borrows/my-borrows/${userId}`))
        this.myBorrows = res.data || []
        return res
      } catch (error) {
        console.error('Error fetching borrows:', error)
        return { data: [] }
      } finally {
        this.loading = false
      }
    },
    
    async requestBook(itemId: number) {
      try {
        const authStore = useAuthStore()
        const res: any = await $fetch(this.getApiUrl('/borrows/request'), {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${authStore.token}`
          },
          body: { item_id: itemId }
        })
        return res
      } catch (error) {
        console.error('Request error:', error)
        throw error
      }
    },
    
    async requestReturn(transactionId: string) {
      try {
        const authStore = useAuthStore()
        const res: any = await $fetch(this.getApiUrl('/borrows/return'), {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${authStore.token}`
          },
          body: { transaction_id: transactionId }
        })
        return res
      } catch (error) {
        console.error('Return request error:', error)
        throw error
      }
    }
  }
})