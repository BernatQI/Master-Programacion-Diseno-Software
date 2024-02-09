import { Console } from 'console-mpds';

export default class PlayersView {

  console;

  constructor() {
    this.console = new Console();
  }

  choosePlayers(colors) {}

  isValidPlayerType(playersType) {
    return playersType === 1 || playersType === 2;
  }
  
}