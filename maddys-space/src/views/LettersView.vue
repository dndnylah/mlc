<script setup>
import Miffyletters from '@/components/icons/miffyletters.vue';
import Letters from '../components/Letters.vue'
</script>

<template>
  <main>
    <img class="cover1" src="../assets/greenplaid.png"/>
    <Miffyletters class="miffy"/>
    <Letters />
  </main>
</template>
<style>
.cover1{
     position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: fill; /* fills button */
    z-index: -1;
}
.miffy{
    width: 15vw;
    display: flex;
}
</style>
