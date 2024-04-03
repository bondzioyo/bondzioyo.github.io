<template>
  <main class="container mx-auto grid gap-[50px] md:gap-[80px]">
    <HeroSection></HeroSection>
    <Technologies></Technologies>
    <AboutMe class="grid gap-[20px]"></AboutMe>
    <WorkExperience class="grid gap-[20px]"></WorkExperience>
    <Education class="grid gap-[20px]"></Education>
    <Interest class="grid gap-[20px]"></Interest>
    <div v-if="!showChessboard" class="flex items-center justify-center">
      <div class="group/play-btn">
        <button
          @click="unhideChessboard"
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
          >
        </button>
      </div>
    </div>
    <div v-if="!showWordle" class="flex items-center justify-center">
      <div class="group/play-btn">
        <button
          @click="unhideWordle"
          class="flex items-center rounded-[8px] outline focus:ring-2 ring-accent ring-offset-1 px-[10px] py-[5px] outline-accent group-hover/play-btn:outline-accent/60"
        >
          <span class="text-[25px]">{{ $t("Play Wordle") }}&nbsp;</span
          ><span class="text-[20px] group-hover/play-btn:text-accent"
            >&rarr;</span
          >
        </button>
      </div>
    </div>
    <transition
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
      enter-active-class="transition-all duration-[500ms]"
      leave-active-class="transition-all duration-[500ms]"
    >
      <Board v-if="showChessboard"></Board>
    </transition>
    <Wordle v-if="showWordle"></Wordle>
  </main>
</template>

<script setup>
import HeroSection from "../Home/HeroSection.vue";
import Technologies from "../Home/Technologies.vue";
import AboutMe from "../Home/AboutMe.vue";
import WorkExperience from "../Home/WorkExperience.vue";
import Education from "../Home/Education.vue";
import Interest from "../Home/Interest.vue";
import Board from "../Chess/Board.vue";
import Wordle from "../Games/Wordle.vue";
import { ref } from "vue";

const showChessboard = ref(false);
const showWordle = ref(false);
const unhideChessboard = () => {
  showChessboard.value = !showChessboard.value;
};
const unhideWordle = () => {
  showWordle.value = !showWordle.value;
};
</script>