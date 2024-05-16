<template>
  <div v-for="song in songs" :key="song.id">
    <h1 class="song">{{ song.name }}</h1>
    <img class="cover" :src="song.Cover" />
  </div>
  <input type="text" v-model="songChoice" />
  <button @click="addPlaylist">Add To Playlist</button>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { addToPlaylist } from '../stores/Playlist'

const playlistStore = addToPlaylist()
const songChoice = ref('')
const songs = ref([])

async function getSongs() {
  let res = await fetch('http://localhost:3001')
  let data = await res.json()
  songs.value = data
}

onMounted(() => {
  getSongs()
})

const addPlaylist = () => {
  const song = songs.value.find(s => s.name.toLowerCase() === songChoice.value.toLowerCase())
  if (song) {
    playlistStore.addSong({ name: song.name, cover: song.Cover })
    alert('Success!')
  } else {
    alert('Error: the song you entered does not match a song in our database. Check if the song is spelled correctly or if it exists in our database.')
  }
  songChoice.value = ''
}
</script>

  <style scoped>
  .cover {
    height: 5rem;
    width: 5rem;
  }


  </style>
