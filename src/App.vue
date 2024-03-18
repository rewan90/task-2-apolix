<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
// import Slider from './components/Slider.vue'


</script>

<template>
  <Header/>
  <RouterView />
  <Footer/>
</template>

<style>

body {
  margin: 0;
  padding: 0;
  background: #c7dbe6;
  font-weight: 400;
  line-height: 1.5;
  color: #0b2545;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Object Sans", Helvetica, Roboto, Arial, sans-serif;
  overflow-x: hidden;
}

a{
  text-decoration: none;

}

.white{
 color: #f1f6f9;
}

</style>