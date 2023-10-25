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
      console.writeln(gameView.MESSAGES.gameOver);
    },
    play() {
      board = game.board.reset();
      players = game.players.getPlayers(gameView.playersView.choosePlayers(game.COLORS));
      let column

      do {
        game.changeTurn();
        gameView.boardView.show(board);
        column = game.board.chooseColumn(players[game.getTurn()], board);
        board = game.board.putToken(column, board, game);
        game.board.line.isConnect4(board, column);
      } while (!game.isOver(board));
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
    isOver(board) {
      let isOver = this.board.isFull(board);
      if (isOver) {
        console.writeln('Game Over!');
      }
      return isOver;
    },
    getTurn() {
      return turn;
    },
    changeTurn() {
      turn === 0 ? turn = 1 : turn = 0;
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
    line: Line(),
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
      } while (!this.isValidColumn(column, board));
      return column;
    },
    isValidColumn(column, board) {
      return column >= 1 && column <= 7 && !this.isFullColumn(column, board);
    },
    isFull(board) {
      let isFull = true;

      for (let i = 1; i <= this.NUMBER_ROWS; i++) {
        if (board[this.NUMBER_ROWS][i] === this.EMPTY) {
          isFull = false;
          console.writeln('Column is not full yet.');
        } else {
          console.writeln('Column is full.');
        }
      }

      return isFull;
    },
    isFullColumn(column, board) {
      const isFull = board[this.NUMBER_ROWS][column] !== this.EMPTY;

      if (isFull) console.writeln('Column is full, choose another one.');

      return isFull;
    },
    putToken(column, board, game) {
      let row = 1;
      let tokenStatus = false;

      do {
        if (board[row][column] === this.EMPTY) {
          board[row][column] = game.COLORS[game.getTurn()];
          tokenStatus = true;
        } else {
          row++;
        }
      } while (!tokenStatus);

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
    getPlayers(playerChoosed) {
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

function Line() {
  const north = [0, 1];
  const northWest = [-1, 1];
  const west = [-1, 0];
  const southWest = [-1, -1];
  const DIRECTIONS = [north, northWest, west, southWest];
  let isConnect4 = false;
  let board;
  let column;

  return {
    getLine(coordenate, direction) {
      let line = [];
      let row = coordenate[0];
      let column = coordenate[1];

      for (let i = 0; i <= 3; i++) {
        if (column < 1 || column > 7 || row < 1 || row > 6) {
          break;
        } else {
          line.push(board[row][column]);
          row += direction[0];
          column += direction[1];
        }
      }

      return line;
    },
    shiftOppositeDirection(direction) {
      let oppositeDirection = [];
      direction.forEach((element, i) => {
        oppositeDirection[i] = element * -1;
      });
      return oppositeDirection;
    },
    isConnect4(boardLine, columnLine) {
      board = boardLine;
      column = columnLine;
      let row = this.getRow();
      const coordenate = [row, column];

      DIRECTIONS.forEach(direction => {
        let line = this.getLine(coordenate, direction);
        if (!isConnect4) {
          this.isWinner(line);
          for (let i = 0; i <= 3; i++) {
            console.writeln(`Iteration ${i}: Line(${line})`);
            line = this.shiftOppositeDirection(direction);
            this.isWinner(line);
          }
        }
      });

      return isConnect4;
    },
    getRow() {
      let row = 1;

      while (board[row][column] === Board().EMPTY) {
        row++;
      }

      return row;
    },
    isWinner(line) {
      const firstToken = line[0];
      let count = 0;
      line.forEach(token => {
        if (token === firstToken) {
          count++;
        }
      });

      if (count === 4) {
        isConnect4 = true;
      }
    }
  }
}

function Messages() {

  return {
    head: `\t---> CONNECT 4 <---\n`,
    gameOver: `Good Bye!`,
  }
}
