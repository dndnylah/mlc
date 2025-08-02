<script setup>
import Miffyletters from '@/components/icons/miffyletters.vue';
import Letters from '../components/Letters.vue'
</script>

<template>
  <main>
    <Miffyletters class="miffy"/>
    <Letters />
  </main>
</template>
<style>
.miffy{
    width: 15vw;
    display: flex;
}
</style>
