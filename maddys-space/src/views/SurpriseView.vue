<script setup>
import Surprise from '../components/Surprise.vue'
import smiskicheer from '@/components/icons/smiskicheer.vue';
import { ref, onMounted } from 'vue'

const movie = ref(null)

onMounted(async () => {
  try {
    const response = await fetch('https://max-movie-nine.vercel.app/api/movies')
    const data = await response.json()

    if (Array.isArray(data) && data.length > 0) {
      // Filter for unwatched movies
      const unwatched = data.filter(m => m.status === 'unwatched')
      // Pick one at random
      movie.value = unwatched[Math.floor(Math.random() * unwatched.length)]
    } else {
      console.error('No movies found')
    }
  } catch (error) {
    console.error('Failed to fetch movie:', error)
  }
})
</script>

<template>
  <main>
    <div class="wrapper">
      <smiskicheer class="smiski"/>
      <div class="random-gen" v-if="movie">
        <h2>🎬 {{ movie.title }}</h2>
        <p><strong>Type:</strong> {{ movie.type }}</p>
        <p><strong>Platform:</strong> {{ movie.platform }}</p>
        <p><strong>Status:</strong> {{ movie.status }}</p>
      </div>
      <div v-else>
        <p class="random-gen">Loading surprise...</p>
      </div>
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
.random-gen{
  font-family: Bitcount Grid Double, sans-serif;
  color: black;
}
</style>
