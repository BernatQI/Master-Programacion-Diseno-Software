const { Console } = require("console-mpds");
const console = new Console();

startMastermind();

function startMastermind() {
  do{
    initMastermind().play();
  }while(initMastermind().playAgain());
}

function initMastermind() {

  let game = initGame();
  const GameView = initGameView();
  let board = game.board;

  return {
    play() {
      GameView.showTitle(game.MESSAGES.TITLE);

      do{
        this.showBoard();
        combination = this.proposeCombination();
        this.setCombination(combination);
      }while(!game.isGameOver(combination, board.length));
      
      this.showBoard();
      this.showResult(combination);

    },

    showBoard() {
      
      if(board !== []) {
        let combinationCount = 1;
        let blacks;
        let whites;
        
        board.forEach(combination => {
          blacks = game.getBlacks(combination).count;
          whites = game.getWhites(combination);

          GameView.showProposedCombination({
                    combinationCount: combinationCount,
                    combination: combination,
                    blacks: blacks,
                    whites: whites
          });
          combinationCount++;
        });
        
      }
    },

    proposeCombination() {
      let errors = [];
      let combination;

      do{
        combination = GameView.askCombination();

        if(!game.isValidCombination(combination)) {
          errors = game.getCombinationErrors(combination);
          GameView.showCombinationErrors(errors);
        }
      }while(!game.isValidCombination(combination));

      return combination;
    },

    setCombination() {
      board.push(combination);
    },

    showResult(combination) {
      const result = game.isWinner(combination);

      GameView.showResult(result);
    },

    playAgain() {
      let answer = GameView.askPlayAgain();

      if(answer !== `si`) {
        console.writeln(`\n\t>>> GAME OVER <<<\n`);
      }

      return answer === `si`;
    }
  }
}

function initGame() {

  const MAX_COLORS = 4;
  const VALID_COLORS ='rgbycm';
  const SECRET_COMBINATION = initSecretCombination().getSecretCombination(MAX_COLORS, VALID_COLORS);

  return {
    board: [],
    MESSAGES: {
      TITLE: `\n\t---------> MASTERMIND <---------\n`,
      COMBINATION_QUESTION: `Por favor, propón una combinación:`,
      ERROR_MSG: {
        errorLength: `Error, debes proponer una combinación de 4 colores.\n`,
        errorColor: `Error, los colores válidos son: ${VALID_COLORS}\n`,
        errorRepeatedColor: `Error, no puedes repetir colores.\n`,
      },
      WINNER: `¡¡¡GANASTE!!! Enhorabuena`,
      LOSER: `Perdiste, la próxima partida lo harás mejor`,
      PLAY_AGAIN_QUESTION: `¿Quieres jugar otra partida?`
    },

    getMaxColors() {
      return MAX_COLORS;
    },

    getValidColors() {
      return VALID_COLORS;
    },

    getBlacks(combination) {
      let count = 0;
      let positionsBlack = [];

      for(let i = 0; i < combination.length; i++) {
        if(combination[i] === SECRET_COMBINATION[i]) {
          count++;
          positionsBlack.push(i);
        }
      }

      return {
        count: count,
        positionsBlack: positionsBlack
      };
    },

    getWhites(combination) {
      let count = 0;
      let positionsBlack = this.getBlacks(combination, SECRET_COMBINATION).positionsBlack;

      for(let i = 0; i < SECRET_COMBINATION.length; i++) {
        for(let j = 0; j < combination.length; j++) {
          if(i !== j && SECRET_COMBINATION[i] === combination[j] && !positionsBlack.includes(j)) {
            count++;
          }
        }
      }

      return count;
    },

    isValidCombination(combination) {
      
      return initValidateCombination().isValidCombination(combination);
    },
    
    getCombinationErrors(combination) {
      const validator = initValidateCombination();
      let errors = [];

      if(validator.isValidLength(combination)) {
        if(validator.isValidColors(combination)) {
          if(validator.isRepeatedColor(combination)) {
            errors.push(this.MESSAGES.ERROR_MSG.errorRepeatedColor);
          }
        }else{
          errors.push(this.MESSAGES.ERROR_MSG.errorColor);
        }
      }else{
        errors.push(this.MESSAGES.ERROR_MSG.errorLength);
      }

      return errors;
    },

    isWinner(combination) {
      const blacks = this.getBlacks(combination);
      
      return blacks === MAX_COLORS;
    },
    
    isGameOver(combination, boardLength) {
      const MAX_TURNS = 10;
      return this.isWinner(combination) || boardLength >= MAX_TURNS;
    }
  }
}

function initGameView() {

  const game = initGame();

  return {
    showTitle(title) {
      console.writeln(title);
    },
    
    showProposedCombination(boardCombination) {
      console.writeln(`${boardCombination.combinationCount}. ${boardCombination.combination} --> ${boardCombination.blacks} blacks & ${boardCombination.whites} whites`);
    },

    askCombination() {

      return console.readString(game.MESSAGES.COMBINATION_QUESTION);
    },

    showCombinationErrors(errors) {
      errors.forEach(error => console.writeln(error));
    },

    showResult(result) {
      if(result) {
        console.writeln(game.MESSAGES.WINNER);
      }else{
        console.writeln(game.MESSAGES.LOSER);
      }
    },

    askPlayAgain() {
      let answer;
      let error;
      do{
        answer = console.readString(game.MESSAGES.PLAY_AGAIN_QUESTION);
        error = answer !== `si` && answer !== `no`;
        if(error) {
          console.writeln(`Por favor, responde "si" o "no"`);
        }
      }while(error);
      return answer;
    }
  }
}

function initValidateCombination() {

  const MAX_COLORS = initGame().getMaxColors();
  const VALID_COLORS = initGame().getValidColors();

  return {

    isValidCombination(combination) {
            
      return this.isValidLength(combination)
              && this.isValidColors(combination)
              && !this.isRepeatedColor(combination);
    },

    isValidLength(combination) {
      return combination.length === MAX_COLORS;
    },

    isValidColors(combination) {
      for(let i = 0; i < combination.length; i++) {
        if(!VALID_COLORS.includes(combination[i])) {
          return false;
        }
      }
      return true;
    },

    isRepeatedColor(combination) {
      for(let i = 0; i < combination.length; i++) {
        for(let j = 0; j < combination.length; j++) {
          if(combination[i] == combination[j] && i !== j) {
            return true;
          }
        }
      }
      return false;
    }
  }
}

function initSecretCombination() {

  let secretCombination = [];

  return {
    
    getSecretCombination(maxColors, ValidColors) {
      let color;
      do{
        color = ValidColors[Math.floor(Math.random() * ValidColors.length)];
        if(!secretCombination.includes(color)) {
          secretCombination += color;
        }
      }while(secretCombination.length !== maxColors);
      return secretCombination;
    }
  }
}