import { Console } from "console-mpds";
import Line from './Line.js';

export default class Board {

  static NUMBER_ROWS = 6;
  static NUMBER_COLUMNS = 7;
  static DELIMITER = ' | ';
  static EMPTY = ' ';
  static NUMBER_WINNER_TOKENS = 4;
  #board;
  #line;
  console;

  constructor() {
    this.#board = [];
    this.#line = new Line();
    this.console = new Console();
  }

  reset() {
    let newBoard = [];

    newBoard[0] = [` `, `1`, `2`, `3`, `4`, `5`, `6`, `7`];

    for (let i = 1; i <= Board.NUMBER_ROWS; i++) {
      newBoard[i] = [`${i}`, `${Board.EMPTY}`, `${Board.EMPTY}`, `${Board.EMPTY}`, `${Board.EMPTY}`, `${Board.EMPTY}`, `${Board.EMPTY}`, `${Board.EMPTY}`];
    }

    this.#board = newBoard;
  }

  getBoard() {
    return this.#board;
  }

  isConnect4(column) {
    const coordenateOrigin = [column, this.getRow(column)];
    let line = [];
    let coordenate;
    let count;

    this.#line.DIRECTIONS.forEach(direction => {
      coordenate = coordenateOrigin;
      count = 0;

      if (!this.#line.isWinner(line)) {
        do {
          line = this.#line.getLine(coordenate, direction, this.#board);

          if (!this.#line.isWinner(line)) {
            coordenate = this.#line.shift(coordenate, direction);
          }

          count++;
        } while (count < Board.NUMBER_WINNER_TOKENS && !this.#line.isWinner(line));
      }
    });

    return this.#line.isWinner(line);
  }

  chooseColumn(player) {
    let column;
    do {
      column = player.chooseColumn();
    } while (!this.#isValidColumn(column));
    return column;
  }

  #isValidColumn(column) {
    return column >= 1 && column <= Board.NUMBER_COLUMNS && !this.isFullColumn(column);
  }

  isFullColumn(column) {
    const isFull = this.#board[Board.NUMBER_ROWS][column] !== Board.EMPTY;

    if (isFull) {
      this.console.writeln('Column is full, choose another one.');
    }

    return isFull;
  }

  isFullBoard() {
    let isFull = true;

    for (let i = 1; i <= Board.NUMBER_COLUMNS; i++) {
      if (this.#board[Board.NUMBER_ROWS][i] === Board.EMPTY) {
        isFull = false;
      }
    }

    return isFull;
  }

  putToken(column, color) {
    let row = 1;
    let emptyRow = false;

    do {
      if (this.#board[row][column] === Board.EMPTY) {
        this.#board[row][column] = color;
        emptyRow = true;
      } else {
        row++;
      }
    } while (!emptyRow);
  }

  getRow(column) {
    let row = 1;

    if (this.#isValidColumn(column)) {

      while (this.#board[row][column] !== Board.EMPTY) {
        row++;
      }
    }

    return row - 1;
  }

}