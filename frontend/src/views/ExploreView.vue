<script setup>
import Explore from '../components/Explore.vue'
import { ref } from 'vue'
import { useAuthStore } from '../stores/authStore'
const authStore = useAuthStore()
const isAuthenticated = ref(authStore.isAuthenticated)
</script>

<template>
  <main>
    <Explore v-if="isAuthenticated" />
    <p v-else>You must login before you access this part of the website</p>
  </main>
</template>
