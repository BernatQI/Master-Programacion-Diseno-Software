const { Console } = require("console-mpds");
const console = new Console();


function connect4() {
  const game = Game();
  const gameView = GameView();

  return {
    init() {
      console.writeln(gameView.MESSAGES.head);

      do {
        game.play();
      }while (gameView.playAgain());
      console.writeln('Bye!');
    }
  }
}

const c4 = connect4();
c4.init();

function Game() {
  let board = Board();
  const boardView = BoardView();

  return {
    play() {
      GameBoard = board.reset();
      do {
        boardView.show(GameBoard);
      }while (this.isOver());
    },
    isOver() {
      return false;
    }
  }
}

function GameView() {

  return {
    MESSAGES: {
      head: `\t---> CONNECT 4 <---\n`
    },
    playAgain() {
      let answer;

      do {
        answer = console.readString('Play again? (answer "yes" or "no"):');
      } while (!this.isValidAnswer(answer));

      return answer === 'yes';
    },
    isValidAnswer(answer) {
      return answer === 'yes' || answer === 'no';
    }
  }
}

function Board() {
  const NUMBER_ROWS = 6;
  const delimeter = ' | ';
  const empty = '_';
  let board;

  return {
    reset() {
      board = [];
      for (let i = 0; i < NUMBER_ROWS; i++) {
        board[i] = [`${i + 1}`, `${delimeter + empty}`, `${delimeter + empty}`, `${delimeter + empty}`, `${delimeter + empty}`, `${delimeter + empty}`, `${delimeter + empty}`, `${delimeter + empty + delimeter} \n`];
      }
      return board.reverse();
    }
  }
}

function BoardView() {

  return {
    show(board) {
      for (const row of board) {
        console.writeln(row.join(''));
      }
    }
  }
}