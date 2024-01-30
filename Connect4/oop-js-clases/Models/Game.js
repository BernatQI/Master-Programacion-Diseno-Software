import Board from './Board.js';

export default class Game {

  static NUMBER_WINNER_TOKENS;
  static NUMBER_PLAYERS;
  static COLORS;
  #turn;
  #board;

  constructor() {
    this.NUMBER_WINNER_TOKENS = 4;
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

  changeTurn() {
    this.#turn === 0 ? this.#turn = 1 : this.#turn = 0;
  }

  isConnect4(column) {
    const board = this.#board.getBoard();
    const coordenateOrigin = [column, this.#board.getRow(column)];
    let isConnect4 = false;
    let line = [];
    let coordenate;
    let count;

    this.#board.line.DIRECTIONS.forEach(direction => {
      if (!isConnect4) {
        coordenate = coordenateOrigin;
        count = 0;

        do {
          line = this.#board.line.getLine(coordenate, direction, board);

          if (this.#board.line.isWinner(line)) {
            isConnect4 = true;
          } else {
            coordenate = this.#board.line.shift(coordenate, direction);
          }
          count++;
        } while (count < this.NUMBER_WINNER_TOKENS && !isConnect4);
      }
    });

    return isConnect4;
  }

  isGameOver(column) {
    return this.isConnect4(column) || this.#board.isFullBoard();
  }

}