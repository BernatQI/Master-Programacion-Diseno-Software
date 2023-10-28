const { Console } = require("console-mpds");
const console = new Console();

const c4 = connect4();
c4.init();

function connect4() {
  const game = Game();
  const gameView = GameView();
  const messages = Messages();

  return {
    init() {
      gameView.showMessage(messages.head);

      do {
        this.play();
      } while (gameView.playAgain());

      gameView.showMessage(messages.gameOver);
    },
    play() {
      game.board.reset();
      game.players.setPlayers(gameView.playersView.choosePlayers(game.COLORS));
      let column

      gameView.boardView.show(game.board.getBoard());
      do {
        game.changeTurn();
        column = game.board.chooseColumn(game.players.getPlayers()[game.getTurn()], game.board.getBoard());
        game.board.putToken(column, game.COLORS[game.getTurn()]);
        gameView.boardView.show(game.board.getBoard());
      } while (!game.isConnect4(column) || !game.board.isFullBoard());
    }
  }
}

function Game() {
  let turn = 1;

  return {
    NUMBER_WINNER_TOKENS: 4,
    NUMBER_PLAYERS: 2,
    COLORS: ['R', 'Y'],
    board: Board(),
    players: Players(),
    getTurn() {
      return turn;
    },
    changeTurn() {
      turn === 0 ? turn = 1 : turn = 0;
    },
    isConnect4(column) {
      const board = this.board.getBoard();
      const coordenateOrigin = [column, this.board.getRow(column)];
      let isConnect4 = false;
      let line = [];
      let coordenate;

      this.board.line.DIRECTIONS.forEach((direction, i) => {
        coordenate = coordenateOrigin;
        let count = 0;

        do {
          
                    line = this.board.line.getLine(coordenate, direction, board);
          console.writeln(`Column & Row: ${coordenate[0]}, ${coordenate[1]}`);
          console.writeln('Direction: ' + direction);
          console.writeln('Line: ' + line);

          if (this.board.line.isWinner(line)) {
            isConnect4 = true;
            console.writeln('Connect 4!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');

            return isConnect4;
          } else {
            coordenate = this.board.line.shift(coordenate, direction);
          }
          count++;
        } while (count < this.NUMBER_WINNER_TOKENS && !isConnect4);
      });

      return isConnect4;
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
    },
    showMessage(message) {
      console.writeln(message);
    }
  }
}

function Board() {
  let board = [];

  return {
    NUMBER_ROWS: 6,
    NUMBER_COLUMNS: 7,
    DELIMITER: ' | ',
    EMPTY: '_',
    line: Line(),
    reset() {
      let newBoard = [];

      newBoard[0] = [` `, `1`, `2`, `3`, `4`, `5`, `6`, `7`];

      for (let i = 1; i <= this.NUMBER_ROWS; i++) {
        newBoard[i] = [`${i}`, `${this.EMPTY}`, `${this.EMPTY}`, `${this.EMPTY}`, `${this.EMPTY}`, `${this.EMPTY}`, `${this.EMPTY}`, `${this.EMPTY}`];
      }

      board = newBoard;
    },
    getBoard() {
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
    isFullColumn(column, board) {
      const isFull = board[this.NUMBER_ROWS][column] !== this.EMPTY;

      if (isFull) console.writeln('Column is full, choose another one.');

      return isFull;
    },
    isFullBoard() {
      let isFull = true;

      for (let i = 1; i <= this.NUMBER_COLUMNS; i++) {
        if (board[this.NUMBER_ROWS][i] === this.EMPTY) {
          isFull = false;
        }
      }

      return isFull;
    },
    putToken(column, color) {
      let row = 1;
      let emptyRow = false;

      do {
        if (board[row][column] === this.EMPTY) {
          board[row][column] = color;
          emptyRow = true;
        } else {
          row++;
        }
      } while (!emptyRow);
    },
    getRow(column) {
      let row = 1;

      while (board[row][column] === Board().EMPTY) {
        row++;
      }

      return row;
    }
  }
}

function BoardView() {

  return {
    show(board) {
      board.reverse();
      console.writeln(``);
      for (const row of board) {
        console.writeln(`${Board().DELIMITER}` + row.join(Board().DELIMITER) + `${Board().DELIMITER}\n`);
      }
      board.reverse();
    }
  }
}

function Players() {
  let players = [];

  return {
    setPlayers(choosedPlayers) {
      let playersType = [];

      choosedPlayers.forEach(player => {
        player === 1 ? playersType.push(HumanPlayer()) : playersType.push(MachinePlayer());
      });

      players = playersType;
    },
    getPlayers() {
      return players;
    }
  }
}

function PlayersView() {

  return {
    choosePlayers(colors) {
      let playersType = [];
      let playerChoosed;

      colors.forEach((color) => {
        do {
          playerChoosed = console.readNumber(`Choose type of player for ${color} (answer 1 for "Human" or 2 for "Machine"):`);
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

  return {
    DIRECTIONS: [north, northWest, west, southWest],
    getLine(coordenate, direction, board) {
      let line = [];
      let column = coordenate[0];
      let row = coordenate[1];

      for (let i = 0; i < 4; i++) {
        if (this.isValidCoordenate(row, column)) {
          line.push(board[row][column]);
          column += direction[0];
          row += direction[1];
        } else {
          return false;
        }
      }

      return line;
    },
    shift(coordenate, direction) {
      let column = coordenate[0];
      let row = coordenate[1];
      const oppositeDirection = this.getOppositeDirection(direction);

      column += oppositeDirection[0];
      row += oppositeDirection[1];

      return [column, row];
    },
    isWinner(line) {
      const empty = Board().EMPTY;
      let counts = 0;

      for (let i = 0; i <= 3; i++) {
        if (line[i] !== empty && line[i] === line[i + 1]) {
          console.writeln(`Count: ${counts}`);
          counts++;
        }
      }

      return counts === 3;
    },
    isValidCoordenate(column, row) {
      return row > 0 && row < 6 && column > 0 && column < 7;
    },
    getOppositeDirection(direction) {
      let oppositeDirection = [];

      direction.forEach(coordenate => {
        oppositeDirection.push(coordenate * -1);
      });

      return oppositeDirection;
    }
  }
}

function Messages() {

  return {
    head: `\t---> CONNECT 4 <---\n`,
    gameOver: `Good Bye!`,
  }
}
