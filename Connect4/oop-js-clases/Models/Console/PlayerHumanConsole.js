import PlayerHuman from '../Player/PlayerHuman.js';
import Board from '../Board.js';

export default class PlayerHumanConsole extends PlayerHuman {

  constructor() {
    super();
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