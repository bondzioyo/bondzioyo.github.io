<template>
  <div class="grid gap-[15px] text-xl font-bold uppercase">
    <slot></slot>
    <div class="h-[4px] w-[60px] bg-accent"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  black: {
    type: Boolean,
    default: false,
  },
  white: {
    type: Boolean,
    default: true,
  },
});
</script>