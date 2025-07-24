<script setup>
import Home from '../components/Home.vue'
import greenstar from '@/components/icons/greenstar.vue';
</script>

<template>
  <main class="wrapper">
    <h1 class="text">Welcome</h1>
    <greenstar class="star" />
    <h1 class="text">Madison <3</h1>
    <Home />
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=DynaPuff:wght@400..700&display=swap');

.wrapper{
  display: flex;
  flex-direction: row;
}
.text{
  font-family: "Bitcount Grid Double", sans-serif;
  color: black;
  display: flex;
  position: relative;
  font-weight: 600;
  font-size: 50px;
  text-shadow: 4px 4px 0px silver;
}
.star{
  width: 175px;
}
</style>
