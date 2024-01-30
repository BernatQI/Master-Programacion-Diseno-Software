export default class Messages {

  #messages

  constructor() {
    this.#messages = {
      "head": 'Welcome to Connect4!',
      "gameOver": 'Game Over'
    }
  }

  get(message) {
    return this.#messages[message];
  }

}