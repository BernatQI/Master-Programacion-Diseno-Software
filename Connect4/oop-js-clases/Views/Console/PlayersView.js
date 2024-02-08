import { Console } from 'console-mpds';

export default class PlayersView {

  console;

  constructor() {
    this.console = new Console();
  }

  choosePlayers(colors) {
    let playersType = [];
    let playerChoosed;

    colors.forEach((color) => {
      do {
        playerChoosed = this.console.readNumber(`Choose type of player for ${color} (answer 1 for "Human" or 2 for "Machine"):`);
      } while (!this.#isValidPlayerType(playerChoosed));
      playersType.push(playerChoosed);
    });

    return playersType;
  }

  #isValidPlayerType(playersType) {
    return playersType === 1 || playersType === 2;
  }
  
}