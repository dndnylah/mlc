<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Home from './components/Home.vue';
import bg from './components/icons/bg.vue';
</script>

<template>
  <div class="app-wrap">
    <bg class="bg"/>
    <header>
      <div class="wrapper">
        <nav class="navbar">
          <router-link class="router" :to="{ path: '/' }">
            <button class="button delay1" style="background-color: transparent;">
               <img class="bluejelly" src="./assets/greenaura.png" alt="jelly" />
              ♡ Home ♡
            </button>
          </router-link>
          <router-link class="router" :to="{ path: '/Playlist' }">
            <button class="button delay2">
              <img class="bluejelly" src="./assets/bluejelly.png" alt="jelly" />
              ✰ Playlist ✰
            </button>
          </router-link>
          <router-link class="router" :to="{ path: '/Letters' }">
            <button class="button delay3">
              <img class="bluejelly" src="./assets/ greenstars.png" alt="jelly" />
              ۶ৎ Letters ۶ৎ
            </button>
          </router-link>
          <router-link class="router" :to="{ path: '/Surprise' }">
            <button class="button delay4">
              <img class="bluejelly" src="./assets/bluemiffy.png" alt="jelly" />
              ? ? ?
            </button>
          </router-link>
        </nav>
      </div>
    </header>
    <div class="wrapper">
      <div class="box">
      <RouterView class="import"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bitcount+Grid+Double:wght@100..900&display=swap');


@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}
.bluejelly {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* fills button */
  z-index: -1;
  border-radius: 50px;
}
.router:hover{
  background-color: transparent;
}
.button span,
.button {
  position: relative;
  z-index: 1; /* keeps text above image */
}

.bg{
  display: flex;
  position: fixed;
  width: 135%;
  height: 135%;
}
.import{
  z-index: 0;
}
.box{
  width: 80vw;
  height: 70%;
  border-radius: 30px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 0;
  top: 20%;
  left: 10%;
  border: 10px double black;
  box-shadow: 0px 0px 1px 3px white;
  overflow: hidden;
}
.app-wrap{
  width: 150vh;
  height: auto;
  justify-content: center;
  align-items: center;
  display: flex;
}
.wrapper{
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
}
.navbar{
  display: flex;
  flex-direction: row;
  gap: 10px;
  position: fixed;
  top: 25px;
  left: 0;
  width: 100%;
  margin-top: 20px;
  justify-content: center;

}
.button{
  font-family: Bitcount Grid Double, sans-serif;
  max-width: 200px;
  width: 20vw;
  height: 60px;
  border-radius: 50px;
  box-shadow: 4px 4px 0px #23361b;
  animation: float 3s ease-in-out 5s infinite alternate;
  position: relative;
  color: white;
  font-weight: bold;
  border-style: hidden;
}

.delay1 { animation-delay: 0s; }
.delay2 { animation-delay: 0.5s; }
.delay3 { animation-delay: 1s; }
.delay4 { animation-delay: 1.5s; }

</style>
