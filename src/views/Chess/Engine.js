export class Engine {
  constructor(boardApi) {
    this._stockfish;
    this._boardApi = boardApi;
    this.bestMove;
    this.engineName;

    const wasmSupported =
      typeof WebAssembly === "object" &&
      WebAssembly.validate(
        Uint8Array.of(0x0, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00)
      );

    this._stockfish = new Worker(
      wasmSupported ? "stockfish.wasm.js" : "stockfish.js"
    );

    this._setupListeners();

    this._stockfish.postMessage("uci");
  }

  _setupListeners() {
    this._stockfish.addEventListener("message", (data) =>
      this._handleEngineStdout(data)
    );

    this._stockfish.addEventListener("error", (err) => console.error(err));

    this._stockfish.addEventListener("messageerror", (err) =>
      console.error(err)
    );
  }

  _handleEngineStdout(data) {
    const uciStringSplitted = data.data.split(" ");

    if (uciStringSplitted[0] === "uciok") {
      this._setOption("UCI_AnalyseMode", "true");
      this._setOption("Analysis Contempt", "Off");

      this._stockfish.postMessage("ucinewgame");
      this._stockfish.postMessage("isready");
      return;
    }

    if (uciStringSplitted[0] === "readyok") {
      this._stockfish.postMessage("go movetime 1500");
      return;
    }

    if (uciStringSplitted[0] === "bestmove" && uciStringSplitted[1]) {
      if (uciStringSplitted[1] !== this.bestMove) {
        this.bestMove = uciStringSplitted[1];
        if (this._boardApi.getTurnColor() === "black") {
          this._boardApi.move({
            from: this.bestMove.slice(0, 2),
            to: this.bestMove.slice(2, 4),
          });
        }
      }
    }
  }

  _setOption(name, value) {
    this._stockfish.postMessage(`setoption name ${name} value ${value}`);
  }

  sendPosition(position) {
    this._stockfish.postMessage(`position startpos moves ${position}`);
    this._stockfish.postMessage("go movetime 500");
  }
}

// const boardApiInstance = new BoardApi();
// const engine = new Engine(boardApiInstance);
// engine.sendPosition(/* dostarcz odpowiednią pozycję */);
