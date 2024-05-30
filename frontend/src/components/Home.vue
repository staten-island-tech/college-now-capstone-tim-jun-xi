<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../stores/authStore';
import { useRouter } from 'vue-router';

const router = useRouter()
const authStore = useAuthStore();
const isAuthenticated = ref(authStore.isAuthenticated);
const Logout = () => {
  authStore.logout();
  isAuthenticated.value = authStore.isAuthenticated;
  router.push({ name: 'login' });
};
</script>

<template>
  <div class="greetings">
    <h3>Welcome to Monkey Radios. Find and stream all of your favorite pirated songs here!</h3>
    <button v-if="isAuthenticated" @click="Logout">Logout</button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>