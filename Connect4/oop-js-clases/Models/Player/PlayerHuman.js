import Player from './Player.js';
import Board from '../Board.js';

export default class PlayerHuman extends Player {

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

  #askColumn() {}

  #isValidColumn(column) {
    return column >= 1 && column <= Board.NUMBER_COLUMNS;
  }

}