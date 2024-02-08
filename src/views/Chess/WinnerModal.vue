<template>
    <div id="modalEl" tabindex="-1" aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-[400px] max-h-full">
            <div class="relative bg-[#414141] ring-accent ring-2 rounded-lg shadow dark:bg-gray-700">
                <div class="flex relative items-start justify-between p-5 rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-bold text-center w-full text-my-white lg:text-2xl dark:text-white">
                        {{ winner === 'b' ? $t("You lost!") : $t("You Won!") }}
                    </h3>
                    <button type="button" @click="closeModal"
                        class="text-my-white absolute top-[50%] translate-y-[calc(-50%)] right-5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- <div class="p-6 space-y-6">
                    <p class="text-base leading-relaxed text-my-white dark:text-gray-400">
                        {{ $t("New game") }}
                    </p>
                </div> -->
                <div class="flex justify-center items-center p-6 space-x-2 rounded-b dark:border-gray-600">
                    <button type="button" @click="rematch"
                        class="text-white bg-accent hover:bg-accent/80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        {{ $t("New game") }}</button>
                    <button type="button" @click="closeModal"
                        class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600">{{
                            $t("Close") }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { Modal } from 'flowbite'

const props = defineProps({
    showModal: {
        type: Boolean,
        default: false
    },
    winner: {
        type: String,
        default: null
    }
})

const modal = ref(null)

onMounted(() => {
    const $targetEl = document.getElementById('modalEl');
    const options = {
        backdrop: 'dynamic',
        backdropClasses: 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
        closable: false,
    };
    modal.value = new Modal($targetEl, options);
    modal.value.toggle()
})



const emit = defineEmits();

function rematch() {
    modal.value.hide()
    emit('rematch');
}

function closeModal() {
    modal.value.hide()
    emit('closeModal');
}
</script>