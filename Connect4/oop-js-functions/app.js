const { Console } = require("console-mpds");
const console = new Console();

const c4 = connect4();
c4.init();

function connect4() {
  const game = Game();
  const gameView = GameView();
  let board;
  let players;

  return {
    init() {
      console.writeln(gameView.MESSAGES.head);

      do {
        this.play();
      } while (gameView.playAgain());
      console.writeln('Bye!');
    },
    play() {
      board = game.board.reset();
      players = game.players.setPlayers(gameView.playersView.choosePlayers(game.COLORS));
      let column

      do {
        game.changeTurn();
        gameView.boardView.show(board);
        column = game.board.chooseColumn(players[game.getTurn()], board);
        board = game.board.putToken(column, board, game);
      } while (game.isOver());
    }
  }
}

function Game() {
  let turn = 1;

  return {
    NUMBER_PLAYERS: 2,
    COLORS: ['R', 'Y'],
    board: Board(),
    players: Players(),
    isWinner() {

    },
    isOver() {
      return false;
    },
    getTurn() {
      return turn;
    },
    changeTurn() {
      turn === 0 ? turn = 1 : turn = 0;
    },
    setPlayers(playersType) {
      let players = players;
    }
  }
}

function GameView() {

  return {
    MESSAGES: Messages(),
    boardView: BoardView(),
    playersView: PlayersView(),
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
  const DELIMITER = ' | ';
  const EMPTY = '_';

  return {
    line() {},
    reset() {
      let board = [];

      board[0] = [` ${DELIMITER}`, `1${DELIMITER}`, `2${DELIMITER}`, `3${DELIMITER}`, `4${DELIMITER}`, `5${DELIMITER}`, `6${DELIMITER}`, `7${DELIMITER} \n`];

      for (let i = 1; i <= NUMBER_ROWS; i++) {
        board[i] = [`${i}`, `${DELIMITER + EMPTY}`, `${DELIMITER + EMPTY}`, `${DELIMITER + EMPTY}`, `${DELIMITER + EMPTY}`, `${DELIMITER + EMPTY}`, `${DELIMITER + EMPTY}`, `${DELIMITER + EMPTY + DELIMITER} \n`];
      }

      return board.reverse();
    },
    chooseColumn(player, board) {
      let columnChosed;
      do {
        columnChosed = player.chooseColumn();
      }while(this.isValidColumn(columnChosed, board));
      return columnChosed;
    },
    isValidColumn(column, board) {
      return column >= 1 && column <= 7 && !this.isFull(column, board);
    },
    isFull(column, board) {
      return board[0][column] !== EMPTY;
    },
    putToken(column, board, game) {
      let row = NUMBER_ROWS - 1;

      do {
        if (board[row][column] === EMPTY) {
          board[row][column] = game.COLORS[game.getTurn()];
        }else{
          row--;
        }
      }while(board[row][column] !== EMPTY);

      return board;
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

function Players() {

  return {
    setPlayers(playerChoosed) {
      let players = [];

      playerChoosed.forEach(player => {
        player === 'Human' ? players.push(HumanPlayer()) : players.push(MachinePlayer());
      });

      return players;
    }
  }
}

function PlayersView() {

  return {
    choosePlayers(colors) {
      let playersType = [];
      let playerChoosed;

      colors.forEach((color, i) => {
        do {
          playerChoosed = console.readString(`Choose type of player for ${colors[i]} (answer "Human" or "Machine"):`);
        } while (!this.isValidPlayerType(playerChoosed));
        playersType.push(playerChoosed);
      });

      return playersType;
    },
    isValidPlayerType(playersType) {
      return playersType === 'Human' || playersType === 'Machine';
    }
  }
}

function HumanPlayer() {
  let column;

  return {
    chooseColumn() {
      do {
        column = console.readString('Choose column (between 1 and 7):');
      } while (this.isValidColumn(column));
    },
    isValidColumn(column) {

    }
  }
}

function MachinePlayer() {
  let column;

  return {
    chooseColumn() {
      column = this.randomColumn();
      console.writeln(column);
      return column;
    },
    randomColumn() {
      return Math.floor(Math.random() * 7) + 1;
    }
  }
}

function Messages() {

  return {
    head: `\t---> CONNECT 4 <---\n`
  }
}