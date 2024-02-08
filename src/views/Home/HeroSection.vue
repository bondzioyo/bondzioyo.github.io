<template>
  <div class="grid md:grid-cols-6">
    <div class="md:col-span-3 flex justify-center items-center text-my-white">
      <div class="grid gap-[20px] text-center md:text-start">
        <div class="text-[2.5em]">{{ $t("Hello, I am") }}</div>
        <div class="text-[3.5em] font-extrabold">Wojciech Świątek</div>
        <div class="bg-accent rounded-[2px] mx-auto md:mx-0 text-my-black shadow-sm w-fit h-fit p-[4px]">
          Frontend Developer
        </div>
      </div>
    </div>

    <div class="md:col-span-3 flex justify-center">
      <img class="max-h-[400px] md:max-h-[500px]" src="../../assets/me.png" alt="me" />
    </div>
  </div>
</template>

<script setup>
</script>