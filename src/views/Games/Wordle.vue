<template>
  <WinnerModal
    v-if="showModal"
    :winner="winner"
    @closeModal="showModal = false"
    @rematch="setNewGame"
  >
  </WinnerModal>
  <div class="m-auto grid gap-[20px]">
    <div>
      <div class="flex justify-center" v-if="error">
        Problem occured, get new word
        <button
          type="button"
          class="flex items-center rounded-[8px] outline focus:ring-2 ring-accent ring-offset-1 px-[10px] py-[5px] outline-accent group-hover/play-btn:outline-accent/60"
          @click.prevent="setWord"
        >
          {{ $t("Draw word") }}
        </button>
      </div>
      <div v-for="row in guessRows" :key="row" class="row">
        <div
          v-for="(letter, i) in row"
          :key="letter"
          class="cell"
          :class="checkLetter(letter, i)"
        >
          {{ letter.toUpperCase() }}
        </div>
      </div>
    </div>
    <form
      @submit.prevent="sendAnswer"
      class="flex justify-center gap-[20px]"
      :style="{ display: newGame || error ? 'none' : 'flex' }"
    >
      <input
        ref="input"
        class="rounded-lg p-2 text-my-black bg-my-white ring-0 outline-none"
        v-model.trim="answer"
        minlength="5"
        maxlength="5"
      />
      <button
        type="submit"
        class="flex items-center rounded-[8px] outline focus:ring-2 ring-accent ring-offset-1 px-[10px] py-[5px] outline-accent group-hover/play-btn:outline-accent/60"
      >
        {{ $t("Check") }}
      </button>
    </form>
    <div
      class="flex justify-center items-center gap-[20px]"
      :style="{ display: !newGame ? 'none' : 'flex' }"
    >
      {{ $t("Start new game") }}
      <button
        type="button"
        class="flex items-center rounded-[8px] outline focus:ring-2 ring-accent ring-offset-1 px-[10px] py-[5px] outline-accent group-hover/play-btn:outline-accent/60"
        @click.prevent="setNewGame"
      >
        {{ $t("New game") }}
      </button>
    </div>
    <div
      class="flex flex-col items-center"
      :style="{ display: newGame || error ? 'none' : 'flex' }"
    >
      {{ $t("The word to guess is") }}:&nbsp;
      <span class="uppercase text-accent text-xl font-bold">{{
        wordToGuess.slice(hint, 5).padStart(5, "*")
      }}</span
      ><button
        type="button"
        class="flex items-center rounded-[8px] outline focus:ring-2 ring-accent ring-offset-1 px-[10px] py-[5px] outline-accent group-hover/play-btn:outline-accent/60"
        @click.prevent="getHint"
      >
        {{ $t("Get hint") }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import WinnerModal from "../Chess/WinnerModal.vue";
import words_pl from "./words_pl";
import words_en from "./words_en";
import { userLocale } from "../../plugins/i18n-config";

const wordToGuess = ref("");
const answer = ref("");
const guessRows = ref([]);
const input = ref(null);
const currentRow = ref(0);
const error = ref(false);
const newGame = ref(false);
const hint = ref(5);
const showModal = ref(false);
const winner = ref(null);

const getWord = () => {
  // return fetch("https://random-word-api.herokuapp.com/word?length=5").then(
  //   (response) => response.json()
  // );
  return new Promise((resolve, reject) => {
    if (userLocale === "pl")
      resolve(words_pl.at(Math.random() * words_pl.length + 1));
    else resolve(words_en.at(Math.random() * words_en.length + 1));
  });
};

const sendAnswer = () => {
  if (answer.value.length === 5 && currentRow.value < 6) {
    guessRows.value[currentRow.value] = [...answer.value];
    if (answer.value.toLowerCase() === wordToGuess.value.toLowerCase()) {
      showModal.value = true;
      winner.value = "w";
      newGame.value = true;
    } else if (currentRow.value === 5) {
      showModal.value = true;
      winner.value = "b";
      newGame.value = true;
    }

    answer.value = "";
    currentRow.value++;
  }
};
const clearAll = () => {
  wordToGuess.value = "";
  answer.value = "";
  guessRows.value = [];
  input.value = null;
  currentRow.value = 0;
  error.value = false;
  newGame.value = false;
  hint.value = 5;
  for (let i = 0; i < 6; i++) {
    const arr = Array.from({ length: 5 }, () => "");
    guessRows.value.push(arr);
  }
};
const setNewGame = () => {
  clearAll();
  setWord();
  showModal.value = false;
};
const checkLetter = (letter, position) => {
  if (letter !== "") {
    if (wordToGuess.value.at(position).toLowerCase() === letter.toLowerCase())
      return "backgroundGreen";
    else if (wordToGuess.value.includes(letter)) return "backgroundYellow";
    else return "backgroundGray";
  }
};

const getHint = () => {
  hint.value--;
};

const setWord = () => {
  getWord()
    .then((res) => {
      wordToGuess.value = res;
      error.value = false;
    })
    .catch((e) => {
      error.value = true;
      console.log(e, "catch");
      clearAll();
    });
};
onMounted(() => {
  setWord();
  for (let i = 0; i < 6; i++) {
    const arr = Array.from({ length: 5 }, () => "");
    guessRows.value.push(arr);
  }
  // input.value.focus();
});
</script>

<style scoped>
.row {
  display: flex;
}

.cell {
  width: 60px;
  height: 60px;
  border: 1px solid rgb(70, 70, 70);
  background: white;
  margin: 2px;
  font-size: 50px;
  line-height: 60px;
  text-align: center;
  border-radius: 5px;
}

.backgroundGray {
  background: #939393;
}

.backgroundGreen {
  background: #5db74f;
}

.backgroundYellow {
  background: #e0be39;
}
</style>
