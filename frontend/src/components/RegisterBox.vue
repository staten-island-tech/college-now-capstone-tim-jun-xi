<template>
    <div class="about">
      <div class="registercard">
        <form @submit.prevent="register">
          <div class="form-group">
            <input v-model="username" class="form-control" id="firstName" name="firstName" placeholder="Username" required />
            <label class="form-control-label" for="firstName"></label>
          </div>
          <div class="form-group">
            <input v-model="password" class="form-control" id="lastName" name="lastName" placeholder="Password" required />
            <label class="form-control-label" for="lastName"></label>
          </div>
          <button type="submit">Register</button>
        </form>
        <h1 class="register">This is a register page</h1> 
      </div>
    </div>
    <h2 id="registerRes"></h2>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const username = ref("");
  const password = ref("");
  
  async function register() { 
    try {
      const res = await fetch("http://localhost:3001/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username.value.toLowerCase(),
          password: password.value,
        }),
      });
      const user = await res.json();
      console.log(user);
      if (res.ok) {
        localStorage.setItem("token", user.token)
      }
      else {
        console.log("no works")
      }
    } catch (error) {
      console.log(error);
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
  .registercard .message {
    margin: 15px 0 0;
    color: #b3b3b3;
    font-size: 12px;
  }
  .registercard .message a {
    color: #4CAF50;
    text-decoration: none;
  }
  .registercard .register-form {
    display: none;
  }
  
  </style>