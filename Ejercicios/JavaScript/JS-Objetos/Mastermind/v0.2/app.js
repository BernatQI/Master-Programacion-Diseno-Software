const { Console } = require("console-mpds");
const console = new Console();

startMastermind();

function startMastermind() {
  const mastermind = initMastermind();
  
  do{
    mastermind.play();
  }while(mastermind.playAgain());
  
  console.writeln(`\n\t>>> GAME OVER <<<\n`);
}

function initMastermind() {
  const game = initGame();
  const gameView = initGameView();
  const combination = initCombination();

  return {
    board: [],
    
    play() {
      gameView.showTitle();
      let proposedCombination;
      
      do{
        this.showBoard();
        proposedCombination = this.proposeCombination();
        this.setCombination(proposedCombination);
      }while(!game.isGameOver(proposedCombination, this.board.length));
      
      this.showBoard();
      this.showResult(proposedCombination);
    },
    
    showBoard() {
      if(this.board !== []) {
        let combinationCount = 1;
        let blacks;
        let whites;
        
        this.board.forEach(combination => {
          blacks = game.getBlacks(combination).count;
          whites = game.getWhites(combination);
          
          gameView.showProposedCombination({
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
      let proposedCombination;

      do{
        proposedCombination = gameView.askCombination();
        
        if(!combination.isValidCombination(proposedCombination)) {
          errors = combination.getCombinationErrors(proposedCombination);
          gameView.showCombinationErrors(errors);
        }
      }while(!combination.isValidCombination(proposedCombination));
      
      return proposedCombination;
    },

    setCombination() {
      this.board.push(combination);
    },
    
    showResult(combination) {
      const result = game.isWinner(combination);
      
      gameView.showResult(result);
    },
    
    playAgain() {
      let answer = gameView.askPlayAgain();
      
      return answer === `si`;
    }
  }
}

function initGame() {
  
  return {
    MAX_COLORS: 4,
    VALID_COLORS: 'rgbycm',
    
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
    MESSAGES: {
      TITLE: `\n\t---------> MASTERMIND <---------\n`,
      COMBINATION_QUESTION: `Por favor, propón una combinación:`,
      ERROR_MSG: {
        errorLength: `Error, debes proponer una combinación de 4 colores.\n`,
        errorColor: `Error, los colores válidos son: ${game.VALID_COLORS}\n`,
        errorRepeatedColor: `Error, no puedes repetir colores.\n`,
      },
      WINNER: `¡¡¡GANASTE!!! Enhorabuena`,
      LOSER: `Perdiste, la próxima partida lo harás mejor`,
      PLAY_AGAIN_QUESTION: `¿Quieres jugar otra partida?`
    },
    
    showTitle() {
      console.writeln(this.MESSAGES.TITLE);
    },
    
    showProposedCombination(boardCombination) {
      console.writeln(`${boardCombination.combinationCount}. ${boardCombination.combination} --> ${boardCombination.blacks} blacks & ${boardCombination.whites} whites`);
    },
    
    askCombination() {
      
      return console.readString(this.MESSAGES.COMBINATION_QUESTION);
    },
    
    showCombinationErrors(errors) {
      errors.forEach(error => console.writeln(error));
    },

    showResult(result) {
      if(result) {
        console.writeln(this.MESSAGES.WINNER);
      }else{
        console.writeln(this.MESSAGES.LOSER);
      }
    },

    askPlayAgain() {
      let answer;
      let error;
      do{
        answer = console.readString(this.MESSAGES.PLAY_AGAIN_QUESTION);
        error = answer !== `si` && answer !== `no`;
        if(error) {
          console.writeln(`Por favor, responde "si" o "no"`);
        }
      }while(error);
      return answer;
    }
  }
}

function initCombination() {
  
  const game = initGame();
  const MAX_COLORS = game.MAX_COLORS;
  const VALID_COLORS = game.VALID_COLORS;
  
  return {
    SECRET_COMBINATION: initCombination().generateSecretCombination(),
    
    generateSecretCombination() {
      console.log("🚀 ~ file: app.js:31 ~ play ~ proposedCombination:")
      let secretCombination = [];
      let color;
      do{
        color = VALID_COLORS[Math.floor(Math.random() * VALID_COLORS.length)];
        if(!secretCombination.includes(color)) {
          secretCombination.push(color);
        }
      }while(secretCombination.length !== MAX_COLORS);
      return secretCombination;
    },

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

    getBlacks(combination) {
      let count = 0;
      let positionsBlack = [];

      for(let i = 0; i < combination.length; i++) {
        if(combination[i] === this.SECRET_COMBINATION[i]) {
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
      let positionsBlack = this.getBlacks(combination, this.SECRET_COMBINATION).positionsBlack;

      for(let i = 0; i < this.SECRET_COMBINATION.length; i++) {
        for(let j = 0; j < combination.length; j++) {
          if(i !== j && this.SECRET_COMBINATION[i] === combination[j] && !positionsBlack.includes(j)) {
            count++;
          }
        }
      }

      return count;
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