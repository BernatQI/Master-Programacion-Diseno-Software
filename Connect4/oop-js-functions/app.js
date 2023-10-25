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
        gameView.boardView.show(board);
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
      return true;
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
  
  return {
    NUMBER_ROWS: 6,
    DELIMITER: ' | ',
    EMPTY: '_',
    line() {},
    reset() {
      let board = [];

      board[0] = [` `, `1`, `2`, `3`, `4`, `5`, `6`, `7`];

      for (let i = 1; i <= this.NUMBER_ROWS; i++) {
        board[i] = [`${i}`, `${this.EMPTY}`, `${this.EMPTY}`, `${this.EMPTY}`, `${this.EMPTY}`, `${this.EMPTY}`, `${this.EMPTY}`, `${this.EMPTY}`];
      }

      return board;
    },
    chooseColumn(player, board) {
      let column;
      do {
        column = player.chooseColumn();
      }while(!this.isValidColumn(column, board));
      return column;
    },
    isValidColumn(column, board) {
      return column >= 1 && column <= 7 && !this.isFull(column, board);
    },
    isFull(column, board) {
      return board[this.NUMBER_ROWS][column] !== this.EMPTY;
    },
    putToken(column, board, game) {
      let row = 1;
      let tokenStatus = false;

      do {
        console.writeln(BoardView().show(board));
        if (board[row][column] === this.EMPTY) {
          board[row][column] = game.COLORS[game.getTurn()];
          tokenStatus = true;
        }else{
          row++;
        }
      }while(!tokenStatus);

      return board;
    }
  }
}

function BoardView() {

  return {
    show(board) {
      board = board.reverse();
      console.writeln(``);
      for (const row of board) {
        console.writeln(`${Board().DELIMITER}` + row.join(Board().DELIMITER) + `${Board().DELIMITER}\n`);
      }
      board = board.reverse();
    }
  }
}

function Players() {

  return {
    setPlayers(playerChoosed) {
      let players = [];

      playerChoosed.forEach(player => {
        player === 1 ? players.push(HumanPlayer()) : players.push(MachinePlayer());
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
          playerChoosed = console.readNumber(`Choose type of player for ${colors[i]} (answer 1 for "Human" or 2 for "Machine"):`);
        } while (!this.isValidPlayerType(playerChoosed));
        playersType.push(playerChoosed);
      });

      return playersType;
    },
    isValidPlayerType(playersType) {
      return playersType === 1 || playersType === 2;
    }
  }
}

function HumanPlayer() {
  let column;

  return {
    chooseColumn() {
      let column;
      do {
        column = console.readNumber('Choose column (between 1 and 7): ');
      } while (!this.isValidColumn(column));

      return column;
    },
    isValidColumn(column) {
      return column >= 1 && column <= 7;
    }
  }
}

function MachinePlayer() {

  return {
    chooseColumn() {
      let column = this.randomColumn();
      return column;
    },
    randomColumn() {
      let randomNumber = Math.floor(Math.random() * 7) + 1;
      return randomNumber;
    }
  }
}

function Messages() {

  return {
    head: `\t---> CONNECT 4 <---\n`
  }
}