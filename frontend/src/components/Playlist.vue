<template>
  <ul>
    <div v-for="item in order.MyPlaylist" :key="item.name">
      <h1>{{ item.name }}</h1>
      <img :src="item.cover" alt="cover" class="cover" />
    </div>
  </ul>
</template>

<script setup>
import { addToPlaylist } from '../stores/Playlist'
const orderStore = addToPlaylist()
const order = orderStore.order
</script>

<style scoped>
.cover {
  height: 5rem;
  width: 5rem;
}
</style>
