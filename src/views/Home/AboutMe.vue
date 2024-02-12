<template>
  <div class="grid gap-[20px]">
    <div class="w-fit border border-white bg-white/10 px-3 py-1 rounded-full">
      {{ $t("About me") }}
    </div>
    <div class="leading-7" v-html="$t('about_me')"></div>
  </div>
</template>

<script setup>
</script>

