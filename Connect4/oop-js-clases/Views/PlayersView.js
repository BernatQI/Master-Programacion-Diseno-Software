import { Console } from 'console-mpds';
const console = new Console();

export default class PlayersView {

  constructor() {

  }

  choosePlayers(colors) {
    let playersType = [];
    let playerChoosed;

    colors.forEach((color) => {
      do {
        playerChoosed = console.readNumber(`Choose type of player for ${color} (answer 1 for "Human" or 2 for "Machine"):`);
      } while (!this.isValidPlayerType(playerChoosed));
      playersType.push(playerChoosed);
    });

    return playersType;
  }

  isValidPlayerType(playersType) {
    return playersType === 1 || playersType === 2;
  }
  
}