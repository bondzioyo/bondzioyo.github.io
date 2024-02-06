<template>
  <div>
    <div>Play chass with me!</div>
    <TheChessboard
      @board-created="handleBoardCreated"
      :board-config="boardConfig"
      @move="handleMove"
      @checkmate="handleCheckmate"
    />
  </div>
</template>

<script setup>
import { TheChessboard, BoardApi } from "vue3-chessboard";
import "vue3-chessboard/style.css";
import { Engine } from "./Engine";
const boardConfig = {
  coordinates: false,
};

let boardAPI;
let engine;

function handleBoardCreated(boardApi = BoardApi) {
  boardAPI = boardApi;

  engine = new Engine(boardApi);
}

function handleCheckmate(isMated) {
  if (isMated === "w") {
    alert("Black wins!");
  } else {
    alert("White wins!");
  }
}
function handleMove() {
  const history = boardAPI?.getHistory(true);

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
}
</script>