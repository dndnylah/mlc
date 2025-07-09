<script setup>
import Surprise from '../components/Surprise.vue'
import smiskicheer from '@/components/icons/smiskicheer.vue';
</script>

<template>
  <main>
    <div class="wrapper">
      <smiskicheer class="smiski"/>
    
    <Surprise />
  </div>
  </main>
</template>

<style>
.smiski{
  width: 200px;
  display: flex;
}
.wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
