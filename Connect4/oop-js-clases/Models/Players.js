import HumanPlayer from './HumanPlayer.js';
import MachinePlayer from './MachinePlayer.js';

export default class Players {

  #players;

  constructor() {
    this.#players = [];
  }

  setPlayers(choosedPlayers) {
    let playersType = [];

    choosedPlayers.forEach(player => {
      player === 1 ? playersType.push(new HumanPlayer()) : playersType.push(new MachinePlayer());
    });

    this.#players = playersType;
  }

  getPlayers() {
    return this.#players;
  }

}