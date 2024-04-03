<script setup>
import Header from "./views/Layout/Header.vue";
import Footer from "./views/Layout/Footer.vue";
// import { ref, watch } from "vue";
// import { z } from "zod";
// const str = ref("");
// function min(str, min = 1) {
//   let error = false;
//   try {
//     z.string()
//       .min(min, { message: `Min ${min} char.` })
//       .parse(str);
//   } catch (err) {
//     error = err.issues?.shift().message;
//   }
//   return error;
// }
// function max(str, max = 1) {
//   let error = false;
//   try {
//     z.string()
//       .max(max, { message: `Min ${max} char.` })
//       .parse(str);
//   } catch (err) {
//     error = err.issues?.shift().message;
//   }
//   return error;
// }
// const rules = [min(3), max(5)];
// watch(str, (value) => {
//   for (const rule of rules) console.log((rule = [rule[0]]));
// });
</script>

<template>
  <Header></Header>
  <router-view></router-view>
  <Footer></Footer>
</template>