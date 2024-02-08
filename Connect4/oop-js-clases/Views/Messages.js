export default class Messages {

  #messages

  constructor() {
    this.#messages = {
      "head": 'CONNECT4',
      "gameOver": 'Game Over'
    }
  }

  get(message) {
    return this.#messages[message];
  }

}