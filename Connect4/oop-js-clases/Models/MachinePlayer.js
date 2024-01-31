import Board from './Board.js';

export default class MachinePlayer {

  constructor() {

  }

  chooseColumn() {
    let column = this.randomColumn();
    return column;
  }

  randomColumn() {
    let randomNumber = Math.floor(Math.random() * Board.NUMBER_COLUMNS) + 1;
    return randomNumber;
  }

}