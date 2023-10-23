const { Console } = require("console-mpds");
const console = new Console();

const c4 = connect4();
c4.init();

function connect4() {

  const game = game();
  const gameView = gameView();

  return {
    init() {
      do {
        console.writeln(gameView.head);
      }while(game.isOver());
    },

    playAgain() {
      this.init();
    }
  }
}

function game() {

  return {
    isOver() {
      return false;
    }
  }
}

function gameView() {

  return {
    MESSAGES: {
      head: `\t---> CONNECT 4 <---\n`
    }
  }
}