<script setup>
import Home from '../components/Home.vue'
import greenstar from '@/components/icons/greenstar.vue';
</script>

<template>
  <Home class="home"/>
  <main class="wrapper">
    <greenstar class="star" />
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=DynaPuff:wght@400..700&display=swap');

.wrapper{
  display: flex;
  justify-content: space-between;
  position: absolute;
}
.star{
  width: 15vw;
  z-index: 0;
  position: fixed;
  top: 10vw;
  left: 25vw;
}
.home{
  z-index: 1;
  display: flex;
  position: fixed;
  left: 35vw;
}
</style>
