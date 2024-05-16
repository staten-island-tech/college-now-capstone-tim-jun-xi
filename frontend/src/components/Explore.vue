<template>
  <div>
    <h1>Add Song</h1>
    <form @submit.prevent="addSong">
      <label>Song Name:</label>
      <input type="text" v-model="songData.name" required><br>
      <label>Artist:</label>
      <input type="text" v-model="songData.artist" required><br>
      <label>Release Year:</label>
      <input type="number" v-model="songData.release" required><br>
      <label>Duration:</label>
      <input type="text" v-model="songData.duration" required><br>
      <label>Cover Link:</label>
      <input type="text" v-model="songData.Cover" required><br>
      <button type="submit">Add Song</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const songData = ref({
  name: '',
  artist: '',
  release: '',
  duration: '',
  Cover: '',
});

const addSong = async () => {
  try {
    const res = await fetch('http://localhost:3001/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(songData.value)
    });
    console.log(await res.json())
    if (!res.ok) {
  console.log("Failed to add song")    
}
    alert('Song added successfully!');
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
};
</script>