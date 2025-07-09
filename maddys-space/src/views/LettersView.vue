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
    width: 200px;
    display: flex;
}
</style>
