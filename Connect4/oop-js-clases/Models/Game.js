import Board from './Board.js';
import Players from './Players.js';
import Line from './Line.js';

export default class Game {

  NUMBER_PLAYERS;
  COLORS;
  NUMBER_WINNER_TOKENS;
  #turn;
  #board;
  #players;
  line;
  
  constructor() {
    this.NUMBER_PLAYERS = 2;
    this.NUMBER_WINNER_TOKENS = 4;
    this.COLORS = ['R', 'Y'];
    this.#board = new Board();
    this.#players = new Players();
    this.line = new Line();
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

  isConnect4(column) {
    // const board = this.#board.getBoard();
    const coordenateOrigin = [column, this.#board.getRow(column)];
    let isConnect4 = false;
    let line = [];
    let coordenate;
    let count;

    this.line.DIRECTIONS.forEach(direction => {
      if (!isConnect4) {
        coordenate = coordenateOrigin;
        count = 0;

        do {
          line = this.line.getLine(coordenate, direction, this.#board.getBoard());
          
          if (this.line.isWinner(line)) {
            isConnect4 = true;
          } else {
            coordenate = this.line.shift(coordenate, direction);
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

  setPlayers(players) {
    this.#players.setPlayers(players);
  }

  getPlayers() {
    return this.#players.getPlayers();
  }

  chooseColumn(player) {
    return this.#board.chooseColumn(player);
  }

  putToken(column, color) {
    this.#board.putToken(column, color);
  }

}