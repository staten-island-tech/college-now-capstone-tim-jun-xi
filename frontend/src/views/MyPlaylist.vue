<template>
  <div>

<h1 v-for="song in songs">{{ song.name }}</h1>

  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const songs = ref("");
async function getShops() {
  let res = await fetch("http://localhost:3001");

  let data = await res.json();
  songs.value = data;
  console.log(data);
}

onMounted(() => {
  getShops();
});
</script>

<style scoped></style>