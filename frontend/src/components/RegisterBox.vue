<template>
  <div class="about">
    <div class="registercard">
      <form @submit.prevent="handleRegister">
        <div class="form-group">
          <input v-model="username" class="form-control" id="registerUsername" name="registerUsername" placeholder="Username" required />
          <label class="form-control-label" for="registerUsername"></label>
        </div>
        <div class="form-group">
          <input v-model="password" class="form-control" id="registerPassword" name="registerPassword" placeholder="Password" required />
          <label class="form-control-label" for="registerPassword"></label>
        </div>
        <button type="submit">Register</button>
      </form>
      <p v-if="isRegistered">{{ "You have successfully registered" }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../stores/authStore';

const authStore = useAuthStore();
const username = ref("");
const password = ref("");
const isRegistered = ref(authStore.isRegistered);

async function handleRegister() {
  try {
    await authStore.register({ username: username.value, password: password.value });
    isRegistered.value = authStore.isRegistered;
  } catch (err) {
    alert("Try a different username");
  }
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:300);

.about {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}
.registercard {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.registercard input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.registercard button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4CAF50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.registercard button:hover,.registercard button:active,.registercard button:focus {
  background: #43A047;
}
</style>