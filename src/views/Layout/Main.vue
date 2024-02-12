<template>
  <main class="container mx-auto grid gap-[50px] md:gap-[80px]">
    <HeroSection></HeroSection>
    <AboutMe></AboutMe>
    <Education></Education>
    <Board></Board>
  </main>
</template>

<script setup>
import HeroSection from "../Home/HeroSection.vue";
import Board from "../Chess/Board.vue";
import Education from "../Home/Education.vue";
import AboutMe from "../Home/AboutMe.vue";
</script>