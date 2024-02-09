<template>
  <WinnerModal v-if="showModal" :winner="winner" @closeModal="showModal = false" @rematch="rematch">
  </WinnerModal>
  <div class="grid gap-[20px]">
    <div>{{ $t("Play chess with me!") }}</div>
    <div class="flex items-baseline gap-[3px]"><span class="py-[4px]">{{ $t("Moves") }}:</span>
      <div id="chess-move-notation" class="max-w-[250px] w-full overflow-x-scroll">
        <div class="flex items-baseline gap-[3px] moves-holder">
          <div :class="`player-move player-${move.color}`" v-for="move, i in movesHistory">{{ move.san }}</div>
        </div>
      </div>
    </div>
    <TheChessboard @board-created="handleBoardCreated" :board-config="boardConfig" @move="handleMove()"
      @checkmate="handleCheckmate" />
  </div>
</template>

<script setup>
import { TheChessboard, BoardApi } from "vue3-chessboard";
import WinnerModal from './WinnerModal.vue'
import { ref } from 'vue';
import "vue3-chessboard/style.css";
import { Engine } from "./Engine";
const boardConfig = {
  coordinates: true,
  width: 300,
  svg: "vite.svg",
};

const showModal = ref(false);
const winner = ref(null);

let boardAPI;
let engine;

function handleBoardCreated(boardApi = BoardApi) {
  boardAPI = boardApi;

  engine = new Engine(boardApi);
  engine._setOption("Skill Level", 10);
  const board = document.getElementsByTagName("cg-board");
  board[0].style.background = `url(https://i.postimg.cc/j5H70b6C/chessboard.png)`;
  board[0].style.backgroundSize = 'contain';
}

function rematch() {
  showModal.value = false;
  movesHistory.value = null;
  boardAPI?.resetBoard()
  handleBoardCreated()
}

function handleCheckmate(isMated) {
  if (isMated === "w") {
    winner.value = 'w'
  } else {
    winner.value = 'b'
  }
  setTimeout(() => {
    showModal.value = true;
  }, 2000)
}
const movesHistory = ref(null);
const handleMove = () => {
  const history = boardAPI?.getHistory(true);
  movesHistory.value = history?.map(move => { return { san: move.san, color: move.color } });
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
  scrollNotation()
}


function scrollNotation() {
  setTimeout(() => {
    const notation = document.querySelector('#chess-move-notation')
    const holder = document.querySelector('.moves-holder')
    notation.scrollLeft = holder.getClientRects()[0].width;
  }, 1)
}

</script>