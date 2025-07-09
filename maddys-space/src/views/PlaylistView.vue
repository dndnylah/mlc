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
  <div class="wrapper">
        <w2e1 class="w2e1"/>
    </div>
</template>

<style>
.cat{
    width: 200px;
    display: flex;
    position: fixed;
    top: 0px;
}

.w2e1{
    width: 150px;
}
</style>
