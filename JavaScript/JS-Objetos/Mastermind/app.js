const { Console } = require("console-mpds");
const console = new Console();

playMasterMind();

function playMasterMind() {
  do {
    const game = initGame();
    game.SECRET_COMBINATION = game.getSecretCombination(game.COLORS, game.MAX_COMBINATION);
    game.playGame();
  } while (isResumed());

  function initGame() {
    let game = {
      MAX_ATTEMPTS: 10,
      COLORS: [`r`, `g`, `b`, `y`, `c`, `m`],
      MAX_COMBINATION: 4,
      SECRET_COMBINATION: "",
      attempts: 0,
      board: [],
      winner: false,

      playGame: function () {
        console.writeln(`\n-----> MASTERMIND <-----\n`);
        //console.writeln(`Secret combination: ${this.SECRET_COMBINATION}`);
        do {
          console.writeln(`\n${this.attempts} attempt(s):\n****`);
          for (PreviousCombinations of this.board) {
            this.printBoard(this.isSuccess(PreviousCombinations));
          }
          this.proposeCombination(this.MAX_COMBINATION, this.COLORS);
          this.isWinner(this.isSuccess(this.board[this.attempts]));
          this.attempts++;
        } while (this.attempts < this.MAX_ATTEMPTS && !this.winner);
      },

      proposeCombination: function proposeCombination(maxCombination, colors) {
        let combination;
        do {
          combination = console.readString(`Propose a combination: `);
        } while (!isValidCombination(combination));

        return (this.board[this.attempts] = combination);

        function isValidCombination(combination) {
          if (combination.length !== maxCombination) {
            console.writeln(`Wrong proposed combination length`);
            console.writeln(`MAX_COMBINATION: ${maxCombination}`);
          } else if (!isValidColors()) {
            console.writeln(`Wrong colors, they must be: rgybmc`);
          } else {
            return true;
          }

          function isValidColors() {
            let countValids = 0;
            for (let i = 0; i < combination.length; i++) {
              for (let j = 0; j < colors.length; j++) {
                if (combination[i] === colors[j]) {
                  countValids++;
                }
              }
            }
            return countValids === 4;
          }
        }
      },

      getSecretCombination: function (colors, maxCombination) {
        let secretCombination = [];
        for (let i = 0; i < maxCombination; i++) {
          secretCombination += colors[Math.floor(Math.random() * colors.length)];
        }
        return secretCombination;
      },

      isSuccess: function (combination) {
        let blacks = 0;
        let countFound = [];
        for (i = 0; i < combination.length; i++) {
          for (j = 0; j < combination.length; j++) {
            if (combination[i] === this.SECRET_COMBINATION[i] && i === j) {
              countFound[i] = true;
              blacks++;
            } else {
              countFound[i] = false;
            }
          }
        }

        let whites = 0;
        for (i = 0; i < combination.length; i++) {
          for (j = 0; j < combination.length; j++) {
            if (
              combination[i] === this.SECRET_COMBINATION[j] &&
              combination[i] !== this.SECRET_COMBINATION[i] &&
              countFound[i] !== true
            ) {
              whites++;
            }
          }
        }

        return [combination, blacks, whites];
      },

      printBoard: function (PreviousCombinations) {
        console.writeln(
          `${PreviousCombinations[0]} --> ${PreviousCombinations[1]} blacks and ${PreviousCombinations[2]} whites`
        );
      },

      isWinner: function (combination) {
        if (combination[1] === 4) {
          this.winner = true;
          console.writeln(`You've won!!! ;-)`);
        } else if (this.attempts === this.MAX_ATTEMPTS - 1) {
          console.writeln(`You've lost!!! :-(`);
        }
        return this.winner;
      },
    };
    return game;
  }

  function isResumed() {
    const answer = console.readString(`Do you want to continue? (y/n):`);
    if (answer === "y") {
      return true;
    } else {
      console.writeln("\n¡¡¡HASTA LA VISTA!!!\n");
      return false;
    }
  }
}
