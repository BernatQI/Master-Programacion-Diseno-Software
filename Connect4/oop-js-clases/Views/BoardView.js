import Board from '../Models/Board.js';
import { Console } from 'console-mpds';
const console = new Console();

export default class BoardView {

  constructor() {

  }

  show(board) {
    board.reverse();
    console.writeln(``);
    for (const row of board) {
      console.writeln(`${Board.DELIMITER}` + row.join(Board.DELIMITER) + `${Board.DELIMITER}\n`);
    }
    board.reverse();
  }

}