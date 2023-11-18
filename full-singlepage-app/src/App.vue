<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
</script>

<template>
  <header>
    <NavBar/>
  </header>

  <div class="center-container content d-flex flex-column">
    <div class = "row flex-column">
      <h1 class="text-center mb-5 logo">Recommer.AI</h1>
    </div>
    <RouterView />
  </div>

</template>

<style scoped>
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.content {
  max-width: 800px;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  height: auto; 
  margin: auto;
  padding-top: 150px;
  width: 100%;
}

</style>