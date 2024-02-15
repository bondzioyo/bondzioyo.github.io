<template>
  <main class="container mx-auto grid gap-[50px] md:gap-[80px]">
    <HeroSection></HeroSection>
    <Technologies></Technologies>
    <AboutMe class="grid gap-[20px]"></AboutMe>
    <WorkExperience class="grid gap-[20px]"></WorkExperience>
    <Education class="grid gap-[20px]"></Education>
    <Interest class="grid gap-[20px]"></Interest>
    <div class="flex items-center justify-center">
      <div class="group/play-btn">
        <router-link
          to="/chess"
          class="flex items-center rounded-[8px] outline focus:ring-2 ring-accent ring-offset-1 px-[10px] py-[5px] outline-accent group-hover/play-btn:outline-accent/60"
        >
          <img
            src="../../assets/interest/knight.svg"
            alt="knight"
            lazy="loading"
            download="async"
            class="h-[30px]"
          />&nbsp;<span class="text-[25px]">{{ $t("Play chess") }}&nbsp;</span
          ><span class="text-[20px] group-hover/play-btn:text-accent"
            >&rarr;</span
          ></router-link
        >
      </div>
    </div>
  </main>
</template>

<script setup>
import HeroSection from "../Home/HeroSection.vue";
import Technologies from "../Home/Technologies.vue";
import AboutMe from "../Home/AboutMe.vue";
import WorkExperience from "../Home/WorkExperience.vue";
import Education from "../Home/Education.vue";
import Interest from "../Home/Interest.vue";
</script>