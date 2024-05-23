import { defineStore } from 'pinia'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    isAuthenticated: false,
    isRegistered: false,
    user: null
  }),
  actions: {
    async login({ username, password }) {
      try {
        const res = await fetch('http://localhost:3001/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: username.toLowerCase(),
            password: password
          })
        })
        const data = await res.json()
        if (res.ok) {
          this.isAuthenticated = true
          this.user = data.user
        } else {
          console.log('Login failed')
        }
      } catch (error) {
        console.log(error)
      }
    },
    async register({ username, password }) {
      try {
        const res = await fetch('http://localhost:3001/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: username.toLowerCase(),
            password: password
          })
        })
        const data = await res.json()
        if (res.ok && data.success) {
          this.isRegistered = true
        } else {
          console.log('Registration failed')
          alert('Enter a unique username')
        }
      } catch (error) {
        console.log(error)
      }
    },
    logout() {
      this.isAuthenticated = false
      this.user = null
    }
  }
})
