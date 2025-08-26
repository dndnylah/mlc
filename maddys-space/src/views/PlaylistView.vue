<script setup>
import Playlist from '../components/Playlist.vue'
import dancingcat from '@/components/icons/dancingcat.vue';
import w2e1 from '@/components/icons/w2e1.vue';
</script>

<template>
  <main>
    <div class="wrapper">
      <dancingcat class="cat" />
      <Playlist />
      
    </div>
  </main>
</template>

<style>
.cat{
    width: 15vw;
    display: flex;
}
.wrapper{
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 0;
}
</style>
