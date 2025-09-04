<template>
  <header
    ref="navBarRef"
    class="flex z-10 top-0 left-0 right-0 relative justify-center h-[55px] md:h-[70px] transition-all"
    :class="{
      'translate-y-[-110%]':
        scrollDirection === 'down' && scrollY > navbarHeight,
      'sticky bg-my-white/10 backdrop-blur-[5px]': scrollDirection === 'up',
      '!bg-transparent': scrollY < 1,
    }"
  >
    <div class="container flex justify-between items-center">
      <router-link :to="'/'">
        <div class="flex items-center">
          <img
            src="../../assets/gh-pages.png"
            alt="gh-pages"
            class="object-contain w-[50px] md:w-[65px] aspect-square"
          />
          <div class="text-[20px] md:text-[20px] font-extrabold font-mono">
            Portfolio
          </div>
        </div></router-link
      >
      <div>
        <LanguageSwitcher></LanguageSwitcher>
      </div>
    </div>
  </header>
</template>

<script setup>
import LanguageSwitcher from "./Header/LanguageSwitcher.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";

const scrollDirection = ref("");
const scrollY = ref(0);
const navBarRef = ref(null);
const navbarHeight = ref(0);

const updateHeight = () => {
  if (navBarRef.value) {
    navbarHeight.value = navBarRef.value.clientHeight;
  }
};

onMounted(() => {
  updateHeight();
  window.addEventListener("resize", updateHeight);
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateHeight);
  window.removeEventListener("scroll", handleScroll);
});

const handleScroll = () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > scrollY.value) {
    scrollDirection.value = "down";
  } else if (
    currentScrollY < scrollY.value &&
    currentScrollY - scrollY.value < -3
  ) {
    scrollDirection.value = "up";
  }

  scrollY.value = currentScrollY;
};
</script>