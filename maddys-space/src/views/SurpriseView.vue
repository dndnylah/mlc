<script setup>
import Surprise from '../components/Surprise.vue'
import smiskicheer from '@/components/icons/smiskicheer.vue';
import bluejellybg from '@/components/icons/bluejellybg.vue';
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

onClicked(() => {
  // Re-run the onMounted logic to fetch a new movie
  onMounted()
})
</script>

<template>
  <main>
    <div class="wrapper">
      <smiskicheer class="smiski"/>
      <img class="cover1" src="../assets/strwbryplaid.png" />
      <div class="random-gen" v-if="movie">
        <h2>🎬 {{ movie.title }}</h2>
        <p><strong>Type:</strong> {{ movie.form }}</p>
        <p><strong>Platform:</strong> {{ movie.platform }}</p>
        <p><strong>Status:</strong> {{ movie.status }}</p>
      </div>
      <div v-else>
        <p class="random-gen">Loading surprise...</p>
      </div>
      <div class="but">
        <button @click="onClicked()">Generate New Surprise</button>
      </div>
    <Surprise />
    
  </div>
  </main>
</template>

<style>
.but{
  display: flex;
  position: absolute;
  justify-content: center;
  right: 50vb;
  top: 40vh;
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
.smiski{
  width: 15vw;
  display: flex;
  position: relative;
}
.wrapper{
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 0;
}
.random-gen{
  font-family: Bitcount Grid Double, sans-serif;
  color: black;
  font-size: 2vw;
}
</style>
