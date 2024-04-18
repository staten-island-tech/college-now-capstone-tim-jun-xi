import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const addToPlaylist = defineStore('order', {
  state: () => {
    return {
      order: {
        MyPlaylist: [],
        address: '',
        delivery: false
      }
    }
  },
  actions: {
    addSong(song) {
      this.order.MyPlaylist.push(song)
    }
  }
})
