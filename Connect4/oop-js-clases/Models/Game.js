import Board from './Board.js';

export default class Game {

  NUMBER_PLAYERS;
  COLORS;
  #turn;
  #board;
  
  constructor() {
    this.NUMBER_PLAYERS = 2;
    this.COLORS = ['R', 'Y'];
    this.#board = new Board();
  }

  reset() {
    this.#turn = 1;
    this.#board.reset();
  }

  getTurn() {
    return this.#turn;
  }

  getBoard() {
    return this.#board.getBoard();
  }

  changeTurn() {
    this.#turn === 0 ? this.#turn = 1 : this.#turn = 0;
  }

  isGameOver(column) {
    return this.#board.isConnect4(column) || this.#board.isFullBoard();
  }

  chooseColumn(player) {
    return this.#board.chooseColumn(player);
  }

  putToken(column, color) {
    this.#board.putToken(column, color);
  }

}