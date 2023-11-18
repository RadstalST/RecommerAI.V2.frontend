<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
</script>

<template>
  <header>
    <NavBar/>
  </header>
  <RouterView />
</template>

<style scoped>

</style>
