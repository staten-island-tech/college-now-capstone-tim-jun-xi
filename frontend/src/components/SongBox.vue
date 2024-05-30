<template>
  <div v-for="song in songs" :key="song.id">
    <h1 class="song">{{ song.name }}</h1>
    <img class="cover" :src="song.Cover" />
  </div>
  <input type="text" v-model="songChoice" />
  <button @click="addPlaylist">Add To Playlist</button>
  <br>
  <input type="text" v-model="songName" />
  <button @click="getSongId">Get SongID By Name</button>
  <br>
  <input type="text" v-model="songId" />
  <button @click="deleteSongById">Delete Song by ID</button>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { addToPlaylist } from '../stores/Playlist'
import { useRouter } from 'vue-router';

const playlistStore = addToPlaylist()
const songChoice = ref('')
const songName = ref('')
const songId = ref('')
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

const getSongId = () => {
  const song = songs.value.find(s => s.name.toLowerCase() === songName.value.toLowerCase())
  if (song) {
    songName.value = song._id
    alert(`Success! The song ID is ${song._id}`)
  } else {
    alert('Error: the song you entered does not match a song in our database. Check if the song is spelled correctly or if it exists in our database.')
  }
  songName.value = ''
}

const deleteSongById = async () => {
  if (!songId.value) {
    alert('Please enter a song ID to delete.')
    return
  }

  try {
    const res = await fetch(`http://localhost:3001/songs/${songId.value}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const contentType = res.headers.get('content-type')
    if (contentType && contentType.includes('application/json')) {
      const data = await res.json()
      if (res.ok) {
        songs.value = songs.value.filter(song => song._id !== songId.value)
        alert('Song deleted successfully!')
      } else {
        alert(`Error: ${data.message}`)
      }
    } else {
      const errorText = await res.text()
      alert(`${errorText}`)
    }
  } catch (error) {
    console.log(error)
    alert('Error deleting song')
  }
  songId.value = ''
}
</script>

  <style scoped>
  .cover {
    height: 5rem;
    width: 5rem;
  }


  </style>
