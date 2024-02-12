<template>
  <div class="text-xl font-bold uppercase">
    {{ text }}
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