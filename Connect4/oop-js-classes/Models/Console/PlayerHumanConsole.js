import PlayerHuman from '../Player/PlayerHuman.js';
import Board from '../Board.js';
import { Console } from 'console-mpds';

export default class PlayerHumanConsole extends PlayerHuman {

  console;

  constructor() {
    super();
    this.console = new Console();
  }

  chooseColumn() {
    let column;
    do {
      column = this.#askColumn();
    } while (!this.#isValidColumn(column));

    return column;
  }

  #askColumn() {
    return this.console.readNumber('Choose a column to put your token: ');
  }

  #isValidColumn(column) {
    return column >= 1 && column <= Board.NUMBER_COLUMNS;
  }

}