import BoardView from "./BoardView.js";
import PlayersView from "./PlayersView.js";
// import Messages from "./Messages.js";
import { Console } from "console-mpds";
const console = new Console();

export default class GameView {

  #boardView;
  #playersView;

  constructor() {
    this.#boardView = new BoardView();
    this.#playersView = new PlayersView();
  }

  playAgain() {
    let answer;

    do {
      answer = console.readString('Play again? (answer "yes" or "no"):');
    } while (!this.isValidAnswer(answer));

    return answer === 'yes';
  }

  isValidAnswer(answer) {
    return answer === 'yes' || answer === 'no';
  }

  showMessage(message) {
    console.writeln(message);
  }

  showBoard(board) {
    this.#boardView.show(board);
  }

  choosePlayers(colors) {
    return this.#playersView.choosePlayers(colors);
  }

}