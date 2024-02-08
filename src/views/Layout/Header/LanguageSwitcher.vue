<template>
    <div>
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
            class="text-white bg-accent/25 hover:bg-accent/50 focus:ring-2 focus:outline-none focus:ring-accent/60 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"><img v-if="userLocale === 'pl'" src="../../../assets/locales/pl.svg" alt="pl"><img
                v-else-if="userLocale === 'en'" src="../../../assets/locales/en.svg" alt="en"><svg class="w-2.5 h-2.5 ms-3"
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 4 4 4-4" />
            </svg>
        </button>
        <!-- Dropdown menu -->
        <div id="dropdown"
            class="w-auto z-10 hidden bg-[#414141] divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
            <ul class="text-smtext-my-white" aria-labelledby="dropdownDefaultButton">
                <li v-if="userLocale !== 'pl'">
                    <button @click="setLocale('pl')"
                        class="flex gap-2 items-center w-full px-2 py-2 text-xs hover:bg-white-/30"><img
                            src="../../../assets/locales/pl.svg" alt="pl">
                        <span>{{ $t("Polish") }}</span>
                    </button>
                </li>
                <li v-if="userLocale !== 'en'">
                    <button @click="setLocale('en')"
                        class="flex gap-2 items-center w-full px-2 py-2 text-xs hover:bg-white-/30">
                        <img src="../../../assets/locales/en.svg" alt="en">
                        <span>{{ $t("English") }}</span>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { initDropdowns } from 'flowbite';
import { setLocale, userLocale } from '../../../plugins/i18n-config';
// import { Dropdown } from 'flowbite';

onMounted(() => {
    initDropdowns();
    // const target = document.getElementById('dropdown');
    // const triger = document.getElementById('dropdownDefaultButton');
    // const dropdown = new Dropdown(target, triger);
});

// const drop = new Dropdown()


</script>