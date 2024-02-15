<template>
  <WinnerModal
    v-if="showModal"
    :winner="winner"
    @closeModal="showModal = false"
    @rematch="rematch"
  >
  </WinnerModal>
  <div class="grid gap-[20px]">
    <div class="flex items-baseline gap-[3px]">
      <span class="py-[4px]">{{ $t("Moves") }}:</span>
      <div
        id="chess-move-notation"
        class="max-w-[250px] w-full overflow-x-scroll"
      >
        <div class="flex items-baseline gap-[3px] moves-holder">
          <div
            :class="`player-move player-${move.color}`"
            v-for="(move, i) in movesHistory"
            :key="i"
          >
            {{ move.san }}
          </div>
        </div>
      </div>
    </div>
    <div
      class="overflow-hidden flex gap-[5px] items-center bg-gray-600 max-w-[300px] min-w-[100px] p-3 rounded-lg"
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4ZM15.641 12.7694C17.075 11.673 18 9.94452 18 8C18 4.68629 15.3137 2 12 2C8.68629 2 6 4.68629 6 8C6 9.94452 6.92501 11.673 8.35901 12.7694C7.35354 13.2142 6.4285 13.8436 5.63604 14.636C5.02411 15.248 4.50935 15.939 4.10177 16.6851C3.34966 18.0619 3.65638 19.4657 4.50339 20.4584C5.3188 21.414 6.62502 22 8 22H16C17.375 22 18.6812 21.414 19.4966 20.4584C20.3436 19.4657 20.6503 18.0619 19.8982 16.6851C19.4907 15.939 18.9759 15.248 18.364 14.636C17.5715 13.8436 16.6465 13.2142 15.641 12.7694ZM12 14C10.1435 14 8.36301 14.7375 7.05025 16.0503C6.57425 16.5263 6.17394 17.0637 5.85696 17.6439C5.54999 18.2058 5.64902 18.7198 6.02481 19.1602C6.4322 19.6376 7.16584 20 8 20H16C16.8342 20 17.5678 19.6376 17.9752 19.1602C18.351 18.7198 18.45 18.2058 18.143 17.6439C17.8261 17.0637 17.4258 16.5263 16.9497 16.0503C15.637 14.7375 13.8565 14 12 14Z"
          fill="black"
        />
      </svg>
      <span class="w-fit">{{ $t("Stockfish") }}:</span>
      <div class="flex overflow-scroll">
        <img
          v-for="(piece, key) in capturedPieces.black"
          :key="key"
          :src="`/chessboard/w_${piece}.svg`"
          :alt="piece"
          class="w-[30px]"
        />
      </div>
    </div>
    <TheChessboard
      id="chessboard-id"
      @board-created="handleBoardCreated"
      :board-config="boardConfig"
      @move="handleMove()"
      @checkmate="handleCheckmate"
    />
    <div
      class="overflow-hidden flex gap-[5px] items-center bg-gray-600 max-w-[300px] min-w-[100px] p-3 rounded-lg"
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4ZM15.641 12.7694C17.075 11.673 18 9.94452 18 8C18 4.68629 15.3137 2 12 2C8.68629 2 6 4.68629 6 8C6 9.94452 6.92501 11.673 8.35901 12.7694C7.35354 13.2142 6.4285 13.8436 5.63604 14.636C5.02411 15.248 4.50935 15.939 4.10177 16.6851C3.34966 18.0619 3.65638 19.4657 4.50339 20.4584C5.3188 21.414 6.62502 22 8 22H16C17.375 22 18.6812 21.414 19.4966 20.4584C20.3436 19.4657 20.6503 18.0619 19.8982 16.6851C19.4907 15.939 18.9759 15.248 18.364 14.636C17.5715 13.8436 16.6465 13.2142 15.641 12.7694ZM12 14C10.1435 14 8.36301 14.7375 7.05025 16.0503C6.57425 16.5263 6.17394 17.0637 5.85696 17.6439C5.54999 18.2058 5.64902 18.7198 6.02481 19.1602C6.4322 19.6376 7.16584 20 8 20H16C16.8342 20 17.5678 19.6376 17.9752 19.1602C18.351 18.7198 18.45 18.2058 18.143 17.6439C17.8261 17.0637 17.4258 16.5263 16.9497 16.0503C15.637 14.7375 13.8565 14 12 14Z"
          fill="var(--accent-color)"
        />
      </svg>
      <span>{{ $t("You") }}:</span>
      <div class="flex overflow-scroll">
        <img
          v-for="(piece, key) in capturedPieces.white"
          :key="key"
          :src="`/chessboard/b_${piece}.svg`"
          :alt="piece"
          class="w-[30px]"
        />
      </div>
    </div>
    <div class="flex gap-[40px] justify-center">
      <button
        class="rounded-[8px] bg-accent/30 outline focus:ring-2 ring-accent ring-offset-1 px-[10px] py-[5px] outline-accent hover:outline-accent/60"
        type="button"
        @click="rematch"
      >
        {{ $t("New game") }}
      </button>
      <button
        class="rounded-[8px] outline focus:ring-2 ring-accent ring-offset-1 px-[10px] py-[5px] outline-accent hover:outline-accent/60"
        type="button"
        @click="undoLastMove()"
      >
        {{ $t("Undo") }}
      </button>
    </div>
    <!-- // BUG: something is wrong with undo buton, game sometimes get crushed -->
  </div>
</template>

<script setup>
import { TheChessboard } from "vue3-chessboard";
import WinnerModal from "./WinnerModal.vue";
import { computed, ref } from "vue";
import "vue3-chessboard/style.css";
import { Engine } from "./Engine";
const boardConfig = {
  coordinates: true,
};

const showModal = ref(false);
const winner = ref(null);

let boardAPI;
let engine;

function handleBoardCreated(api) {
  boardAPI = api;
  engine = new Engine(api);
  engine._setOption("Skill Level", 10);
  const board = document.getElementsByTagName("cg-board");
  board[0].style.background = `url(https://i.postimg.cc/j5H70b6C/chessboard.png)`;
  board[0].style.backgroundSize = "contain";
  // const chessboard = document.getElementById("chessboard-id");
  // chessboard.style.maxWidth = "300px";
  // board[0].style.maxWidth = "300px";
}

const capturedPieces = ref({});

function rematch() {
  // handleBoardCreated(boardAPI);
  showModal.value = false;
  movesHistory.value = null;
  boardAPI.resetBoard();
  capturedPieces.value = {};
}

function handleCheckmate(isMated) {
  if (isMated === "w") {
    winner.value = "w";
  } else {
    winner.value = "b";
  }
  setTimeout(() => {
    showModal.value = true;
  }, 2000);
}
const movesHistory = ref(null);
const handleMove = (api) => {
  console.log(boardAPI);
  const history = boardAPI.getHistory(true);
  movesHistory.value = history.map((move) => {
    return { san: move.san, color: move.color };
  });
  const moves = history?.map((move) => {
    if (typeof move === "object") {
      return move.lan;
    } else {
      return move;
    }
  });

  if (moves) {
    engine?.sendPosition(moves.join(" "));
  }
  scrollNotation();
  capturedPieces.value = boardAPI.getCapturedPieces();
};

function scrollNotation() {
  setTimeout(() => {
    const notation = document.querySelector("#chess-move-notation");
    const holder = document.querySelector(".moves-holder");
    notation.scrollLeft = holder.getClientRects()[0].width;
  }, 1);
}
const undoLastMove = () => {
  // do it twice due to play with stockfish
  boardAPI.undoLastMove();
  boardAPI.undoLastMove();
  capturedPieces.value = boardAPI.getCapturedPieces();
};
</script>