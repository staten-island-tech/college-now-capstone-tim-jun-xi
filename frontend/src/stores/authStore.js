import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    isAuthenticated: false,
    user: null,
    playlist: []
  }),
  actions: {
    async login({ username, password }) {
      try {
        const res = await fetch('http://localhost:3001/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password })
        })
        const data = await res.json()
        if (res.ok) {
          this.isAuthenticated = true
          this.user = data.user
          this.playlist = data.user.playlist
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
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password })
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
    async addSongToPlaylist(songId) {
      if (!this.isAuthenticated) return

      try {
        const res = await fetch('http://localhost:3001/playlist', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.user.token}` // Send token for authentication
          },
          body: JSON.stringify({ songId, username: this.user.username }) // Send username with the request
        })
        const data = await res.json()
        if (res.ok) {
          this.playlist = data.playlist
        } else {
          console.log('Failed to add song to playlist')
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
