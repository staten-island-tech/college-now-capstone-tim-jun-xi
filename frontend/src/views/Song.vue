<script setup>
import SongBox from '../components/SongBox.vue'
import { ref } from 'vue'
import { useAuthStore } from '../stores/authStore'
const authStore = useAuthStore()
const isAuthenticated = ref(authStore.isAuthenticated)
</script>

<template>
  <main>
    <SongBox v-if="isAuthenticated" />
    <p v-else>You must login before you access this part of the website</p>
  </main>
</template>
