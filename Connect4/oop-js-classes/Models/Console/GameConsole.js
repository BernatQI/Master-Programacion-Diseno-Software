import BoardConsole from './BoardConsole.js';
import Game from '../Game.js';

export default class GameConsole extends Game {

  // NUMBER_PLAYERS;
  // COLORS;
  // #turn;
  #board;
  
  constructor() {
    super();
    this.#board = new BoardConsole();
  }

}