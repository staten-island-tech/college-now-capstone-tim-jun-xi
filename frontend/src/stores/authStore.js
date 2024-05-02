import { defineStore } from 'pinia'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    isAuthenticated: false
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
        const user = await res.json()
        console.log(user)
        if (res.ok) {
          this.isAuthenticated = true
        } else {
          console.log('no works')
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
})
