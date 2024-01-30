import Messages from "./Messages.js";
import BoardView from "./BoardView.js";
import PlayersView from "./PlayersView.js";
import { Console } from "console-mpds";
const console = new Console();

export default class GameView {

  MESSAGES;
  boardView;
  playersView;

  constructor() {
    this.MESSAGES = new Messages();
    this.boardView = new BoardView();
    this.playersView = new PlayersView();
  }

  playAgain() {
    let answer;

    do {
      answer = console.readString('Play again? (answer "yes" or "no"):');
    } while (!this.isValidAnswer(answer));

    return answer === 'yes';
  }

  showMessage(message) {
    console.writeln(message);
  }

}