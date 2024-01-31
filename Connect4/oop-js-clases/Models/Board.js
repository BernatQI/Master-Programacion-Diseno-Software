import Line from './Line.js';
import { Console } from "console-mpds";
const console = new Console();

export default class Board {

  static NUMBER_ROWS = 6;
  static NUMBER_COLUMNS = 7;
  static DELIMITER = ' | ';
  static EMPTY = ' ';
  #board;
  line;

  constructor() {
    this.#board = [];
    this.line = new Line();
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

  chooseColumn(player) {
    let column;
    do {
      column = player.chooseColumn();
    } while (!this.isValidColumn(column));
    return column;
  }

  isValidColumn(column) {
    return column >= 1 && column <= Board.NUMBER_COLUMNS && !this.isFullColumn(column);
  }

  isFullColumn(column) {
    const isFull = this.#board[Board.NUMBER_ROWS][column] !== Board.EMPTY;

    if (isFull) {
      console.writeln('Column is full, choose another one.');
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

    if (this.isValidColumn(column)) {

      while (this.#board[row][column] !== Board.EMPTY) {
        row++;
      }
    }

    return row - 1;
  }

}