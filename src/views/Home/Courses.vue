<template>
  <div>
    <section-title>{{ $t("Courses") }}</section-title>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-[30px] mt-[10px]">
      <div
        class="course-card bg-white/10 rounded-[10px] p-[24px] overflow-hidden relative group cursor-pointer"
      >
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

        <div class="grid gap-[10px] relative z-10">
          <div class="flex items-center justify-between">
            <h3
              class="text-lg font-semibold uppercase group-hover:text-accent transition-colors duration-300"
            >
              {{ $t("Angular + TypeScript Training") }}
            </h3>
            <span
              class="px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-accent text-xs font-medium"
            >
              {{ $t("2 days") }}
            </span>
          </div>
          <div class="text-sm text-my-white/90 leading-relaxed">
            {{ $t("AngularTS_training_description") }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

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

.course-card {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}
.course-card:hover {
  transform: translateY(-6px);
  transition: transform 0.3s ease;
}
</style>
