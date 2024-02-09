import BoardView from "./Console/BoardViewConsole.js";
import Messages from "./Messages.js";
import { Console } from "console-mpds";

export default class GameView {

  boardView;
  messages;
  console;

  constructor() {
    this.boardView = new BoardView();
    this.messages = new Messages();
    this.console = new Console();
  }

  playAgain() {
    let answer;

    do {
      answer = this.console.readString('Play again? (answer "yes" or "no"):');
    } while (!this.#isValidAnswer(answer));

    return answer === 'yes';
  }

  #isValidAnswer(answer) {
    return answer === 'yes' || answer === 'no';
  }

  showHead() {
    this.console.writeln(`\n\t>>>\t${this.messages.get("head")}\t<<<\n`);
  }

  showGameOver() {
    this.console.writeln(this.messages.get("gameOver"));
  }

  showGameResult(result, color) {
    this.console.writeln(result ? `Player ${color} wins!` : `It's a tie!`);
  }

  showBoard(board) {
    this.boardView.show(board);
  }

  showTurn(color) {
    this.console.writeln(`Player ${color} moves`);
  }

}