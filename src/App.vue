<script setup>
import Nav from './components/Nav.vue'
</script>

<template>
  <div id="app" class="min-h-screen">
    <Nav />
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>