<script setup>
import Home from '../components/Home.vue'
import greenstar from '@/components/icons/greenstar.vue';
</script>

<template>
  <main>
    <greenstar class="star" />
    <Home />
  </main>
</template>

<style>
.star{
  width: 175px;
}
</style>
