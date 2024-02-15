<template>
  <div class="grid md:grid-cols-6 gap-[20px] mg:gap-auto mt-[20px]">
    <div
      class="md:col-span-3 flex justify-center items-center md:justify-start text-my-white"
    >
      <div class="flex flex-col-reverse md:flex-row gap-[35px]">
        <div class="flex gap-[50px] flex-row md:flex-col justify-center">
          <a
            v-for="(social, key) in socials"
            :key="key"
            :href="social.link"
            target="_blank"
            class="group/test"
          >
            <div
              class="rounded-full shadow-[0_0_10px_1px_rgba(0,0,0,0.3)] group-hover/test:shadow-accent"
            >
              <div
                class="fill-accent group-hover/test:fill-accent"
                v-html="social.icon"
              ></div>
            </div>
          </a>
        </div>
        <div class="grid gap-[20px] text-center md:text-start">
          <div class="text-[2.5em] leading-[105%]">{{ $t("Hello, I am") }}</div>
          <div class="text-[3.5em] font-extrabold leading-[105%]">
            Wojciech Świątek
          </div>
          <div
            class="bg-accent rounded-[2px] mx-auto md:mx-0 text-my-black shadow-sm w-fit h-fit p-[4px]"
          >
            Frontend Developer
          </div>
        </div>
      </div>
    </div>

    <div class="md:col-span-3 flex justify-center">
      <img
        class="max-h-[400px] md:max-h-[500px]"
        src="../../assets/me2.png"
        alt="me"
        loading="lazy"
        decoding="async"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import fb from "../../assets/socials/fb.js";
import gh from "../../assets/socials/gh.js";
import linkedin from "../../assets/socials/linkedin.js";

const socials = ref([
  {
    icon: linkedin,
    link: "https://www.linkedin.com/in/wojciech-%C5%9Bwi%C4%85tek-5ab587211/",
  },
  { icon: gh, link: "https://github.com/bondzioyo" },
  { icon: fb, link: "https://www.facebook.com/" },
]);
</script>