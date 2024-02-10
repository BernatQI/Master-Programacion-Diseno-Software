import Connect4 from "./Connect4.js";
import GameConsole from "../Models/Console/GameConsole.js";
import GameViewConsole from "../Views/Console/GameViewConsole.js";
import PlayersConsole from "../Models/Console/PlayersConsole.js";
import PlayersViewConsole from "../Views/Console/PlayersViewConsole.js";

export default class Connect4Console extends Connect4 {

  #game;
  #gameView;
  #players;
  #playersView;

  constructor() {
    super();
    this.#game = new GameConsole();
    this.#gameView = new GameViewConsole();
    this.#players = new PlayersConsole();
    this.#playersView = new PlayersViewConsole();
  }

  init() {
    this.#gameView.showHead();

    do {
      this.#play();
    } while (this.#gameView.playAgain());

    this.#gameView.showGameOver();
  }

  #play() {
    this.#game.reset();
    this.#players.setPlayers(this.#playersView.choosePlayers(this.#game.COLORS));
    let column;

    this.#gameView.showBoard(this.#game.getBoard());
    do {
      this.#game.changeTurn();
      this.#gameView.showTurn(this.#game.COLORS[this.#game.getTurn()]);
      column = this.#game.chooseColumn(
        this.#players.getPlayers()[this.#game.getTurn()],
        this.#game.getBoard(),
      );
      this.#game.putToken(
        column,
        this.#game.COLORS[this.#game.getTurn()]
      );
      this.#gameView.showBoard(this.#game.getBoard());
    } while (!this.#game.isGameOver(column));

    this.#gameView.showGameResult(
      this.#game.isGameOver(column),
      this.#game.COLORS[this.#game.getTurn()]
    );
  }

}

const c4 = new Connect4Console();
c4.init();