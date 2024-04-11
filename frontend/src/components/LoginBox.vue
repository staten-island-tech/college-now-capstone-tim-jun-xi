<template>
  <div class="about">
    <div class="logincard">
      <form @submit.prevent="login">
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
      <h1 class="login">This is a Login page</h1> 
    </div>
  </div>
  <h2 id="loginRes"></h2>
</template>

<script setup>
import { ref } from 'vue'

const username = ref("");
const password = ref("");
const user = true;
function notLogin(username, password) {
  console.log(username);
  console.log(password);
}
function change() {
  user = false;
}
async function login(username, password) {
  try {
    const res = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const user = await res.json();
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}

function displayUser() {
  displayMessage.value = true;
  message.value = `Your username is ${username.value} and your password is ${password.value}`;
}
</script>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    text-align: center;
  }
}

.logincard {
  background-color: green;
  padding: 20px;
  border-radius: 10px;
}

.login {
}

.form-group {
  position: relative;
  min-height: 3.5em;
}

input.form-control {
  height: 3em;
  position: absolute;
  top: 0;
  left: 0;
}

label.form-control-label {
  position: absolute;
  font-size: .8em;
  top: 0;
  left: 5px;
  text-transform: uppercase;
}
</style>