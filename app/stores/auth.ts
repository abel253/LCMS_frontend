// stores/auth.ts
import { defineStore } from 'pinia'

interface User {
  id: number
  name: string
  email: string
  phone?: string
  user_type: 'student' | 'librarian' | 'admin'
  role?: string
}

interface AuthState {
  user: User | null
  token: string | null
  tempEmail: string
  tempPhone: string
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    token: null,
    tempEmail: '',
    tempPhone: ''
  }),
  
  getters: {
    isAuthenticated: (state) => !!state.token,
    isLibrarian: (state) => state.user?.user_type === 'librarian' || state.user?.role === 'librarian',
    isStudent: (state) => state.user?.user_type === 'student' || state.user?.role === 'student',
    userFullName: (state) => state.user?.name || 'User'
  },
  
  actions: {
    init() {
      if (process.client) {
        const token = window.localStorage.getItem('auth_token')
        const user = window.localStorage.getItem('auth_user')
        if (token) this.token = token
        if (user) this.user = JSON.parse(user)
      }
    },
    
    logout() {
      this.token = null
      this.user = null
      this.tempEmail = ''
      this.tempPhone = ''
      
      if (process.client) {
        localStorage.removeItem('auth_token')
        localStorage.removeItem('auth_user')
        localStorage.removeItem('userRole')
      }
      navigateTo('/auth')
    }
  }
})