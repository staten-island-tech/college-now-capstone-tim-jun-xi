<template>
  <div class="about">
    <div class="logincard">
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <input v-model="username" class="form-control" id="firstName" name="firstName" placeholder="Username" required />
          <label class="form-control-label" for="firstName"></label>
        </div>
        <div class="form-group">
          <input v-model="password" class="form-control" id="lastName" name="lastName" placeholder="Password" required />
          <label class="form-control-label" for="lastName"></label>
        </div>
        <button type="submit">Login</button>
      </form>
      <p v-if="isAuthenticated">{{ "You have successfully logged in" }}</p>
    </div>
  </div>
  <h2 id="loginRes"></h2>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../stores/authStore';
const authStore = useAuthStore();
const username = ref("");
const password = ref("");
const isAuthenticated = ref(authStore.isAuthenticated);

async function handleLogin() {
  await authStore.login({ username: username.value, password: password.value });
  isAuthenticated.value = authStore.isAuthenticated;
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:300);

.about {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}
.logincard {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.logincard input {
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
.logincard button {
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
.logincard button:hover,.logincard button:active,.logincard button:focus {
  background: #43A047;
}
.logincard .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.logincard .message a {
  color: #4CAF50;
  text-decoration: none;
}
.logincard .register-form {
  display: none;
}

</style>