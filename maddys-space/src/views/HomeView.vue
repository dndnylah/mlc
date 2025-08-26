<script setup>
import Home from '../components/Home.vue'
import greenstar from '@/components/icons/greenstar.vue'
import diskjelly from '@/components/icons/diskjelly.vue'
import miffybg from '@/components/icons/miffybg.vue'
import greenbg from '@/components/icons/greenbg.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <Home class="home" />
  <main class="wrapper">
    <greenstar class="star" />
    <greenstar class="star2" />
    <div class="disks">
      <router-link class="router" :to="{path: '/Playlist'}">
        <diskjelly class="jelly zoom" />
        <img class="cover1" src="../assets/wallows.png" />
      </router-link>
      <router-link class="router" :to="{path: '/Letters'}">
        <greenbg class="green zoom" />
        <img class="cover1" src="../assets/kingkrule.png" />
      </router-link>
      <router-link class="router" :to="{path: '/Surprise'}">
        <miffybg class="miffy zoom" />
        <img class="cover1" src="../assets/dpr.png" />
      </router-link>
    </div>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DynaPuff:wght@400..700&display=swap');

@keyframes spin {
  0% {
    transform: rotate(0px);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes counterspin {
  0% {
    transform: rotate(0px);
  }
  100% {
    transform: rotate(-360deg);
  }
}
.cover1{
  width: 60%;
  height: 80%;
  position: relative;
  z-index: 0;
  position: absolute;
  top: 10%;
  left: 35%;

}
.wrapper {
  display: flex;
  justify-content: space-between;
  position: absolute;
}
.star {
  width: 10vw;
  z-index: 0;
  position: fixed;
  top: 0vw;
  left: 20vw;
}
.star2 {
  width: 10vw;
  z-index: 0;
  position: fixed;
  top: 0vw;
  right: 18vw;
  transform: scaleX(-1);
}
.home {
  z-index: 1;
  display: flex;
  position: fixed;
  left: 32vw;
}
.router{
  width: 200%;
  height: auto;
  display: flex;
  position: relative;
}
.router:hover{
  background-color: transparent;
}
.disks {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15vh;
}
.jelly, .miffy {
  width: 200%;
  height: auto;
  display: flex;
  position: relative;
  animation: spin 20s linear infinite;
}
.green {
  width: 200%;
  height: auto;
  display: flex;
  animation: counterspin 20s linear infinite;
}
.zoom:hover{
  transform: scale(1.2);
  z-index: 2;
}
</style>
