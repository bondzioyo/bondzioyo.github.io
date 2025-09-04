<template>
  <div>
    <section-title>{{ $t("Education") }}</section-title>
    <div class="grid grid-cols-2 gap-[30px]">
      <div
        class="education-card col-span-2 md:col-span-1 bg-white/10 rounded-[10px] p-[30px] overflow-hidden relative group cursor-pointer"
        style="animation-delay: 0.2s"
      >
        <div
          class="absolute w-full h-full top-[50%] translate-y-[-50%] right-[-50%] opacity-10 grayscale bg-contain bg-no-repeat bg-[url(/pwr-logo-bw.png)] transition-all duration-700 group-hover:opacity-20 group-hover:scale-110"
        ></div>
        <div
          class="absolute -top-2 -right-2 w-6 h-6 bg-accent/20 rounded-full animate-pulse"
        ></div>
        <div
          class="absolute -bottom-3 -left-3 w-4 h-4 bg-accent/30 rounded-full animate-bounce"
        ></div>
        <div
          class="absolute top-1/2 -left-4 w-3 h-3 bg-accent/25 rounded-full animate-ping"
        ></div>
        <div
          class="absolute inset-0 rounded-[10px] bg-gradient-to-r from-accent/30 via-transparent to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"
        ></div>

        <div class="grid gap-[8px] relative z-10">
          <div
            class="text-md font-semibold text-accent text-center group-hover:text-accent/80 transition-colors duration-300"
          >
            <span
              class="px-3 py-1 bg-accent/20 border border-accent/40 rounded-full"
            >
              2021-2020
            </span>
          </div>
          <div
            class="text-lg uppercase font-medium group-hover:text-accent transition-colors duration-300"
          >
            {{ $t("Systems Engineering") }}
          </div>
          <div
            class="text-md group-hover:text-accent/80 transition-colors duration-300"
          >
            {{ $t("Wroclaw University of Science And technology") }}
          </div>
          <div
            class="text-sm group-hover:text-accent/70 transition-colors duration-300"
          >
            {{ $t("Faculty of Information Technology and Management") }}
          </div>
          <div
            class="text-sm group-hover:text-accent/70 transition-colors duration-300"
          >
            {{ $t("Master of Science") }}
          </div>
        </div>
      </div>

      <div
        class="education-card col-span-2 md:col-span-1 bg-white/10 rounded-[10px] p-[30px] overflow-hidden relative group cursor-pointer"
        style="animation-delay: 0.4s"
      >
        <div
          class="absolute w-full h-full top-[50%] translate-y-[-50%] right-[-50%] opacity-10 grayscale bg-contain bg-no-repeat bg-[url(/pwr-logo-bw.png)] transition-all duration-700 group-hover:opacity-20 group-hover:scale-110"
        ></div>

        <div
          class="absolute -top-2 -left-2 w-6 h-6 bg-accent/20 rounded-full animate-pulse"
        ></div>
        <div
          class="absolute -bottom-3 -right-3 w-4 h-4 bg-accent/30 rounded-full animate-bounce"
        ></div>
        <div
          class="absolute top-1/2 -right-4 w-3 h-3 bg-accent/25 rounded-full animate-ping"
        ></div>

        <div
          class="absolute inset-0 rounded-[10px] bg-gradient-to-l from-accent/30 via-transparent to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"
        ></div>

        <div class="grid gap-[8px] relative z-10">
          <div
            class="text-md font-semibold text-accent text-center group-hover:text-accent/80 transition-colors duration-300"
          >
            <span
              class="px-3 py-1 bg-accent/20 border border-accent/40 rounded-full"
            >
              2020-2016
            </span>
          </div>
          <div
            class="text-lg uppercase font-medium group-hover:text-accent transition-colors duration-300"
          >
            {{ $t("Automation Control and Robotics") }}
          </div>
          <div
            class="text-md group-hover:text-accent/80 transition-colors duration-300"
          >
            {{ $t("Wroclaw University of Science And technology") }}
          </div>
          <div
            class="text-sm group-hover:text-accent/70 transition-colors duration-300"
          >
            {{ $t("Faculty of Electrical Engineering") }}
          </div>
          <div
            class="text-sm group-hover:text-accent/70 transition-colors duration-300"
          >
            {{ $t("Bachelor of Science") }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
@keyframes slideInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInFromRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

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

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.education-card {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
  transition: all 0.3s ease;
}

.education-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(255, 205, 64, 0.2);
}

.education-card:nth-child(1) {
  animation: slideInFromLeft 0.8s ease-out forwards;
}

.education-card:nth-child(2) {
  animation: slideInFromRight 0.8s ease-out forwards;
}
</style>
