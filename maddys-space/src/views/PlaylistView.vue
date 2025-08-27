<script setup>
import Playlist from '../components/Playlist.vue'
import dancingcat from '@/components/icons/dancingcat.vue';
import w2e1 from '@/components/icons/w2e1.vue';
</script>

<template>
  <main>
    <div class="wrapper">
      <img class="cover1" src="../assets/playlistbg.png" />
      <dancingcat class="cat" />
      <Playlist class="play"/>
    </div>
  </main>
</template>

<style>
@keyframes dance {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(20deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-20deg);
  }
 
}
@keyframes walk {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(10px, -10px);
  }
  50% {
    transform: translate(0, 0);
  }
  75% {
    transform: translate(-10px, 10px);
  }
  100% {
    transform: translate(0, 0);
  }
  
}
.play{
  z-index: 1;
}
.cover1{
     position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: fill; /* fills button */
    z-index: -1;
}
.cat{
    width: 25vw;
    display: flex;
    z-index: 1;
    animation: dance 3s infinite;
   /* animation: walk 3s infinite; */
}
.wrapper{
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 0;
  gap: 3vw;
}
</style>
