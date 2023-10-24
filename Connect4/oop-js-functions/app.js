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
      }while (gameView.playAgain());
      console.writeln('Bye!');
    },
    play() {
      board = game.board.reset();
      players = game.players.setPlayers(gameView.playersView.choosePlayers(game.COLORS));
      
      do {
        game.changeTurn();
        gameView.boardView.show(board);
        console.writeln(`Turn: ${game.getTurn()}`);
        players[game.getTurn()].chooseColumn();
      }while (game.isOver());
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
  const delimeter = ' | ';
  const empty = '_';

  return {
    reset() {
      let board = [];

      board[0] = [` ${delimeter}`, `1${delimeter}`, `2${delimeter}`, `3${delimeter}`, `4${delimeter}`, `5${delimeter}`, `6${delimeter}`, `7${delimeter} \n`];	

      for (let i = 1; i <= NUMBER_ROWS; i++) {
        board[i] = [`${i}`, `${delimeter + empty}`, `${delimeter + empty}`, `${delimeter + empty}`, `${delimeter + empty}`, `${delimeter + empty}`, `${delimeter + empty}`, `${delimeter + empty + delimeter} \n`];
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
        } while (!this.isValidPlayersType(playerChoosed));
        playersType.push(playerChoosed);
      });

      return playersType;
    },
    isValidPlayersType(playersType) {
      return playersType === 'Human' || playersType === 'Machine';
    }
  }
}

function HumanPlayer() {

  return {
    chooseColumn() {
      console.writeln('Choose column: HumanPlayer');
    },
    askColumn() {
      
    }
  }
}

function MachinePlayer() {
  
  return {
    chooseColumn() {
        console.writeln('Choose column: MachinePlayer');
  
      },
      randomColumn() {
  
      }
    }
  }

function Messages() {

  return {
    head: `\t---> CONNECT 4 <---\n`
  }
}