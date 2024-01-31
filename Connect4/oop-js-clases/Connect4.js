import GameView from "./Views/GameView.js";
import Messages from "./Views/Messages.js";
import Game from "./Models/Game.js";
import { Console } from "console-mpds";
const console = new Console();

class Connect4 {

  #game
  #gameView;
  #messages;

  constructor() {
    this.#game = new Game();
    this.#gameView = new GameView();
    this.#messages = new Messages();

  }

  init() {
    this.#gameView.showMessage(this.#messages.get("head"));

    do {
      this.play();
    } while (this.#gameView.playAgain());

    this.#gameView.showMessage(this.#messages.get("gameOver"));
  }

  play() {
    this.#game.reset();
    this.#game.setPlayers(this.#gameView.choosePlayers(this.#game.COLORS));
    let column

    this.#gameView.showBoard(this.#game.getBoard());
    do {
      this.#game.changeTurn();
      console.writeln(`Player ${this.#game.COLORS[this.#game.getTurn()]} moves`);
      column = this.#game.chooseColumn(this.#game.getPlayers()[this.#game.getTurn()], this.#game.getBoard());
      this.#game.putToken(column, this.#game.COLORS[this.#game.getTurn()]);
      this.#gameView.showBoard(this.#game.getBoard());
    } while (!this.#game.isGameOver(column));

    this.#gameView.showMessage(this.#game.isGameOver(column) ? `Player ${this.#game.COLORS[this.#game.getTurn()]} wins!` : `It's a tie!`);
  }

}

const c4 = new Connect4();
c4.init();