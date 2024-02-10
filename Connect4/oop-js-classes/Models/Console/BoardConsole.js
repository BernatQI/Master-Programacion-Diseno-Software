import Board from '../Board.js';
import { Console } from "console-mpds";

export default class BoardConsole extends Board {

  // NUMBER_ROWS;
  // NUMBER_COLUMNS;
  // DELIMITER;
  // EMPTY;
  // NUMBER_WINNER_TOKENS;
  // board;
  // line;
  console;

  constructor() {
    super();
    this.console = new Console();
  }

  shoowFullColumnMessage() {
    this.console.writeln('Column is full, choose another one.');
  }

}