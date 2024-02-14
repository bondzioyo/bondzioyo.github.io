<template>
  <div>
    <section-title>{{ $t("Education") }}</section-title>
    <div class="grid grid-cols-2 gap-[30px]">
      <div
        class="col-span-2 md:col-span-1 bg-white/10 rounded-[10px] p-[30px] overflow-hidden relative before:bg-[url(/pwr-logo-bw.png)] before:block before:absolute before:w-full before:h-full before:top-[50%] before:translate-y-[-50%] before:opacity-10 before:right-[-50%] before:grayscale before:bg-contain before:bg-no-repeat"
      >
        <div class="grid gap-[8px] relative">
          <div class="text-md font-semibold text-accent text-center">
            2021-2020
          </div>
          <div class="text-lg uppercase font-medium">
            {{ $t("Systems Engineering") }}
          </div>
          <div class="text-md">
            {{ $t("Wroclaw University of Science And technology") }}
          </div>
          <div class="text-sm">
            {{ $t("Faculty of Information Technology and Management") }}
          </div>
          <div class="text-sm">
            {{ $t("Master of Science") }}
          </div>
        </div>
      </div>
      <div
        class="col-span-2 md:col-span-1 bg-white/10 rounded-[10px] p-[30px] overflow-hidden relative before:bg-[url(/pwr-logo-bw.png)] before:block before:absolute before:w-full before:h-full before:top-[50%] before:translate-y-[-50%] before:opacity-10 before:right-[-50%] before:grayscale before:bg-contain before:bg-no-repeat"
      >
        <div class="grid gap-[8px] relative">
          <div class="text-md font-semibold text-accent text-center">
            2020-2016
          </div>
          <div class="text-lg uppercase font-medium">
            {{ $t("Automation Control and Robotics") }}
          </div>
          <div class="text-md">
            {{ $t("Wroclaw University of Science And technology") }}
          </div>
          <div class="text-sm">
            {{ $t("Faculty of Electrical Engineering") }}
          </div>
          <div class="text-sm">
            {{ $t("Bachelor of Science") }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>