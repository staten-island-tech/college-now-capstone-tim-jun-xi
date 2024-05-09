<template>
  <div v-for="song in songs" :key="song.id">
    <h1 class="song">{{ song.name }}</h1>
    <img class="cover" :src= "song.Cover" />
  </div>
  <input type="text" v-model="songChoice" />
  <button @click="addPlaylist">Add To Playlist</button>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { addToPlaylist } from '../stores/Playlist'
import MyPlaylist from '@/views/MyPlaylist.vue'

const playlistStore = addToPlaylist()
const songChoice = ref('')

const addPlaylist = () => {
  playlistStore.addSong(songChoice.value)
  console.log(songChoice.value)
  console.log(MyPlaylist)
}

const songs = ref([])
const songsID = ref([])

async function getSongs() {
  let res = await fetch('http://localhost:3001')
  let data = await res.json()
  songs.value = data
  console.log(data)
}
onMounted(() => {
  getSongs()
})

// function addToPlaylist() {
// console.log(songsID.value)
// console.log()
// //   try {
// //     const response = await fetch("http://localhost:3001/songs", {
// //       method: "POST",
// //       body: JSON.stringify({ songId: songsID.value }),
// //       headers: {
// //         "Content-Type": "application/json"
// //       }
// //     });

// //     if (!response.ok) {
// //       throw new Error("Failed to add song to playlist");
// //     }

// // } catch (error) {
// //     console.error("Error adding song to playlist:", error);
// //   }
// }
</script>

<style scoped>
/*** FONTS ***/
@import url(https://fonts.googleapis.com/css?family=Montserrat:900|Raleway:400,400i,700,700i);

/*** VARIABLES ***/
/* Colors */
$black: #1d1f20;
$blue: #83e4e2;
$green: #a2ed56;
$yellow: #fddc32;
$white: #fafafa;

/*** EXTEND ***/
/* box-shadow */
%boxshadow {
  box-shadow:
    0.25rem 0.25rem 0.6rem rgba(0, 0, 0, 0.05),
    0 0.5rem 1.125rem rgba(75, 0, 0, 0.05);
}

/*** STYLE ***/
*,
*:before,
*:after {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
}

body {
  background-color: $white;
  color: $black;
  font-family: 'Raleway', sans-serif;
}

main {
  display: block;
  margin: 0 auto;
  max-width: 40rem;
  padding: 1rem;
}

.songs {
  background-color: aquamarine;
}

.container {
  counter-reset: gradient-counter;
  list-style: none;
  margin: 1.75rem 0;
  padding-left: 1rem;
  .songs {
    background: white;
    border-radius: 0 0.5rem 0.5rem 0.5rem;
    @extend %boxshadow;
    counter-increment: gradient-counter;
    margin-top: 1rem;
    min-height: 3rem;
    padding: 1rem 1rem 1rem 3rem;
    position: relative;
    &::before,
    &::after {
      background: linear-gradient(135deg, $blue 0%, $green 100%);
      border-radius: 1rem 1rem 0 1rem;
      content: '';
      height: 3rem;
      left: -1rem;
      overflow: hidden;
      position: absolute;
      top: -1rem;
      width: 3rem;
    }
    &::before {
      align-items: flex-end;
      @extend %boxshadow;
      content: counter(gradient-counter);
      color: $black;
      display: flex;
      font: 900 1.5em/1 'Montserrat';
      justify-content: flex-end;
      padding: 0.125em 0.25em;
      z-index: 1;
    }
    @for $i from 1 through 5 {
      &:nth-child(10n + #{$i}):before {
        background: linear-gradient(
          135deg,
          rgba($green, $i * 0.2) 0%,
          rgba($yellow, $i * 0.2) 100%
        );
      }
    }
    @for $i from 6 through 10 {
      &:nth-child(10n + #{$i}):before {
        background: linear-gradient(
          135deg,
          rgba($green, 1 - (($i - 5) * 0.2)) 0%,
          rgba($yellow, 1 - (($i - 5) * 0.2)) 100%
        );
      }
    }
    + .songs {
      margin-top: 2rem;
    }
  }
}
.cover {
  height: 5rem;
  width: 5rem ;
}

</style>
