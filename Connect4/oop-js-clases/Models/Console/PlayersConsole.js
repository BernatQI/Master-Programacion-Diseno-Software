import Players from '../Players.js';
import PlayerMachine from '../Player/PlayerMachine.js';
import PlayerHumanConsole from './PlayerHumanConsole.js';

export default class PlayersConsole extends Players{

  constructor() {
    super();
  }

  setPlayers(choosedPlayers) {
    let playersType = [];

    choosedPlayers.forEach(player => {
      player === 1 ? playersType.push(new PlayerHumanConsole()) : playersType.push(new PlayerMachine());
    });

    this.players = playersType;
  }

}