<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="bigbox">
    <div class="textbox">
      <RouterView />
    </div>

    <nav class="headerbar">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/myplaylist">My Playlist</RouterLink>
      <RouterLink to="/songs">Songs</RouterLink>
      <RouterLink to="/explore">Explore Playlists</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/register">Register</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.bigbox {
  max-width: 100%;
  flex-direction: column;
}

.app {
  position: fixed;
  display: flex;
  top: 0px;
  flex-direction: column;
}

.headerbar {
  position: absolute;
  display: flex;
  top: 0px;
  flex-direction: row;
  align-items: center;
  text-align: center;
}

.textbox {
  display: flex;
  height: 90%;
  border: 3px solid #73ad21;
  padding: 10px;
  flex-direction: column;
  margin-top: 50px;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
