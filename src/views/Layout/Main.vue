<template>
  <main class="container mx-auto grid gap-[50px] md:gap-[80px]">
    <HeroSection></HeroSection>
    <Technologies></Technologies>
    <AboutMe class="grid gap-[20px]"></AboutMe>
    <WorkExperience class="grid gap-[20px]"></WorkExperience>
    <Education class="grid gap-[20px]"></Education>
    <Board></Board>
  </main>
</template>

<script setup>
import HeroSection from "../Home/HeroSection.vue";
import Technologies from "../Home/Technologies.vue";
import AboutMe from "../Home/AboutMe.vue";
import WorkExperience from "../Home/WorkExperience.vue";
import Board from "../Chess/Board.vue";
import Education from "../Home/Education.vue";
</script>