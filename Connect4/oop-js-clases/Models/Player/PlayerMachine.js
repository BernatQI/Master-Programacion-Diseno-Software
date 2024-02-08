import Player from './Player.js';
import Board from '../Board.js';

export default class PlayerMachine extends Player{

  constructor() {
    super();
  }

  chooseColumn() {
    let column = this.#randomColumn();
    return column;
  }

  #randomColumn() {
    let randomNumber = Math.floor(Math.random() * Board.NUMBER_COLUMNS) + 1;
    return randomNumber;
  }

}