<script setup>
import Playlist from '../components/Playlist.vue'
import dancingcat from '@/components/icons/dancingcat.vue';
import w2e1 from '@/components/icons/w2e1.vue';
</script>

<template>
  <main>
    <dancingcat class="cat" />
    <Playlist />
  </main>
</template>

<style>
.cat{
    width: 15vw;
    display: flex;
}
</style>
