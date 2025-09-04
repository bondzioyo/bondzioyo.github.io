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
          <div
            class="text-[2.5em] leading-[105%] animate-fade-in-up"
            style="animation-delay: 0.2s"
          >
            {{ $t("Hello, I am") }}
          </div>
          <div
            class="text-[3.5em] font-extrabold leading-[105%] animate-fade-in-up"
            style="animation-delay: 0.4s"
          >
            <span
              class="bg-gradient-to-r from-my-white via-accent to-my-white bg-clip-text text-transparent animate-gradient"
            >
              Wojciech Świątek
            </span>
          </div>
          <div
            class="bg-accent rounded-[2px] mx-auto md:mx-0 text-my-black shadow-sm w-fit h-fit p-[4px] animate-fade-in-up hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105"
            style="animation-delay: 0.6s"
          >
            Frontend Developer
          </div>
        </div>
      </div>
    </div>

    <div class="md:col-span-3 flex justify-center">
      <div class="relative group">
        <div
          class="absolute -top-4 -right-4 w-8 h-8 bg-accent/20 rounded-full animate-pulse"
        ></div>
        <div
          class="absolute -bottom-6 -left-6 w-6 h-6 bg-accent/30 rounded-full animate-bounce"
        ></div>
        <div
          class="absolute top-1/2 -left-8 w-4 h-4 bg-accent/25 rounded-full animate-ping"
        ></div>
        <div class="relative overflow-hidden rounded-2xl">
          <img
            class="max-h-[400px] md:max-h-[500px] transition-all duration-700 group-hover:scale-105 group-hover:rotate-1"
            src="../../assets/me2.png"
            alt="me"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
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
    link: "https://www.linkedin.com/in/swiatek-wojciech",
  },
  { icon: gh, link: "https://github.com/bondzioyo" },
  // { icon: fb, link: "https://www.facebook.com/" },
]);
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes gradient {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
}
</style>
