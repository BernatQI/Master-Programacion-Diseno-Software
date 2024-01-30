import Board from './Board.js';
import { Console } from 'console-mpds';
const console = new Console();

export default class HumanPlayer {

  constructor() {

  }

  chooseColumn() {
    let column;
    do {
      column = console.readNumber('Choose column (between 1 and 7): ');
    } while (!this.isValidColumn(column));

    return column;
  }

  isValidColumn(column) {
    return column >= 1 && column <= Board.NUMBER_COLUMNS;
  }

}