<template>
  <div class="space-y-8">
    <div class="flex flex-wrap justify-center items-center gap-[30px]">
      <img
        v-for="tech in technologies"
        :key="tech.name"
        :src="tech.src"
        :class="tech.class"
        loading="lazy"
        :alt="tech.name"
      />
    </div>

    <div class="flex flex-wrap justify-center items-center gap-3">
      <span
        v-for="(tech, index) in techStack"
        :key="tech"
        class="tech-tag px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-my-white hover:bg-accent/20 hover:border-accent/40 transition-all duration-300 cursor-default"
        :style="{ animationDelay: `${index * 100}ms` }"
      >
        {{ tech }}
      </span>
    </div>
  </div>
</template>

<script setup>
import vueImg from "../../assets/tech/vue.png";
import jsImg from "../../assets/tech/js.png";
import htmlImg from "../../assets/tech/html.png";
import cssImg from "../../assets/tech/css.png";
import reactImg from "../../assets/tech/react.png";
import tailwindImg from "../../assets/tech/tailwind.png";
import figmaImg from "../../assets/tech/figma.png";
import laravelImg from "../../assets/tech/laravel.png";
import dockerImg from "../../assets/tech/docker.png";
import gitImg from "../../assets/tech/git.png";

const technologies = [
  {
    name: "vue",
    src: vueImg,
    class:
      "h-[45px] md:h-[60px] transition-all duration-300 grayscale hover:grayscale-0",
  },
  {
    name: "js",
    src: jsImg,
    class:
      "h-[45px] md:h-[60px] transition-all duration-300 grayscale hover:grayscale-0",
  },
  {
    name: "html",
    src: htmlImg,
    class:
      "h-[45px] md:h-[60px] transition-all duration-300 grayscale hover:grayscale-0",
  },
  {
    name: "css",
    src: cssImg,
    class:
      "h-[45px] md:h-[60px] transition-all duration-300 grayscale hover:grayscale-0",
  },
  {
    name: "react",
    src: reactImg,
    class:
      "h-[45px] md:h-[60px] transition-all duration-300 grayscale hover:grayscale-0",
  },
  {
    name: "tailwind",
    src: tailwindImg,
    class:
      "h-[45px] md:h-[60px] transition-all duration-300 max-w-[70px] object-contain grayscale hover:grayscale-0",
  },
  {
    name: "figma",
    src: figmaImg,
    class:
      "h-[45px] md:h-[60px] transition-all duration-300 grayscale hover:grayscale-0",
  },
  {
    name: "laravel",
    src: laravelImg,
    class:
      "h-[45px] md:h-[60px] transition-all duration-300 grayscale hover:grayscale-0",
  },
  {
    name: "docker",
    src: dockerImg,
    class:
      "h-[45px] md:h-[60px] transition-all duration-300 grayscale hover:grayscale-0",
  },
  {
    name: "git",
    src: gitImg,
    class:
      "h-[45px] md:h-[60px] transition-all duration-300 grayscale hover:grayscale-0",
  },
];

const techStack = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Vue",
  "HTML5",
  "CSS3",
  "Zustand",
  "Redux",
  "Mantine",
  "Tailwind",
  "Material UI",
  "Ag Grid",
  "PHP",
  "Laravel",
  "Node.js",
];
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.tech-tag {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}
</style>
