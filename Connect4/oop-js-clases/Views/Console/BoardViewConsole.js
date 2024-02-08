import BoardView from '../BoardView.js';
import Board from '../../Models/Board.js';

export default class BoardViewConsole extends BoardView {

  constructor() {
    super();
  }

  show(board) {
    board.reverse();
    this.console.writeln(``);
    for (const row of board) {
      this.console.writeln(`${Board.DELIMITER}` + row.join(Board.DELIMITER) + `${Board.DELIMITER}\n`);
    }
    board.reverse();
  }

}