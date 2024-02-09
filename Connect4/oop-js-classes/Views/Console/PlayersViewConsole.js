import PlayersView from '../PlayersView.js';

export default class PlayersViewConsole extends PlayersView {

  constructor() {
    super();
  }

  choosePlayers(colors) {
    let playersType = [];
    let playerChoosed;

    colors.forEach((color) => {
      do {
        playerChoosed = this.console.readNumber(`Choose type of player for ${color} (answer 1 for "Human" or 2 for "Machine"):`);
      } while (!this.isValidPlayerType(playerChoosed));
      playersType.push(playerChoosed);
    });

    return playersType;
  }
  
}