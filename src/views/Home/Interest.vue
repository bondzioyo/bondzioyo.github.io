<template>
  <div>
    <section-title>{{ $t("Interests") }}</section-title>
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
      <div class="flex gap-[30px] items-center">
        <img
          src="../../assets/interest/code.svg"
          alt="code"
          class="h-[50px]"
          loading="lazy"
          decoding="async"
        />
        <div class="text-lg font-semibold">{{ $t("Programming") }}</div>
      </div>
      <div class="flex gap-[30px] items-center">
        <img
          src="../../assets/interest/knight.svg"
          alt="knight"
          class="h-[50px]"
          loading="lazy"
          decoding="async"
        />
        <div class="text-lg font-semibold">{{ $t("Chess") }}</div>
      </div>
      <div class="flex gap-[30px] items-center">
        <img
          src="../../assets/interest/pitch.svg"
          alt="pitch"
          class="h-[50px]"
          loading="lazy"
          decoding="async"
        />
        <div class="text-lg font-semibold">{{ $t("Football") }}</div>
      </div>
      <div class="flex gap-[30px] items-center">
        <img
          src="../../assets/interest/map.svg"
          alt="map"
          class="h-[50px]"
          loading="lazy"
          decoding="async"
        />
        <div class="text-lg font-semibold">{{ $t("Travel") }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>