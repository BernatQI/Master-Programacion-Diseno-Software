const { Console } = require("console-mpds");
const console = new Console();

initMastermind();

function initMastermind() {
  
  do{
    initGameView().play();
  }while(initGameView().playAgainView());
  console.write(`\nGAME OVER\n\n`);
}

function initGame() {

  const MAX_COLORS = 4;
  const VALID_COLORS = "rgbycm";
  const SECRET_COMBINATION = initSecretCombination().getSecretCombination(MAX_COLORS, VALID_COLORS);
  let board = [];

  return {
    getBoard() {
      return board;
    },

    getMaxColors() {
      return MAX_COLORS;
    },

    getSecretCombination() {
      return SECRET_COMBINATION;
    },
    
    getValidColors() {
      return VALID_COLORS;
    },

    playAgain() {

      return {
        msg: `¿Quieres jugar otra partida?`,
        isValid(answer) {
          let error = answer !== 'si' && answer !== 'no';
          
          if(error) {
            console.writeln(`Por favor, escriba "si" o "no"`);
          }
          return error;
        },

        isAgain(answer) {
          
          return answer === 'si';
        }
      }
    },

    getBlacks(combination, secretCombination) {
      let count = 0;
      let positionsBlack = [];

      for(let i = 0; i < combination.length; i++) {
        if(combination[i] == secretCombination[i]) {
          count++;
          positionsBlack.push(i);
        }
      }

      return {
        count: count,
        positionsBlack: positionsBlack
      };
    },

    getWhites(combination, secretCombination) {
      let count = 0;
      let positionsBlack = this.getBlacks(combination, secretCombination).positionsBlack;

      for(let i = 0; i < secretCombination.length; i++) {
        for(let j = 0; j < combination.length; j++) {
          if(i !== j && secretCombination[i] === combination[j] && !positionsBlack.includes(j)) {
            count++;
          }
        }
      }

      return count;
    },
    
    setProposedCombination(combination) {
      board.push(combination);
    },
    
    getResult(proposedCombination, secretCombination, boardCount) {
      const blacks = this.getBlacks(proposedCombination, secretCombination);
      
      return {
        isGameOver() {
          const MAX_COMBINATIONS = 10;
          return boardCount >= MAX_COMBINATIONS || this.isWinner(blacks);
        },
        isWinner() {
          return blacks === MAX_COLORS;
        }
      } 
    }
  }
}

function initGameView() {

  let game = initGame();
  
  return {
    play() {
      console.writeln(`\n\t---------> MASTERMIND <---------\n`);
      let combination;
      let board;
      let result;

      do{
        board = game.getBoard();
        this.showBoard(board);
        combination = this.askProposalCombination();
        game.setProposedCombination(combination);
        result = game.getResult(combination, game.getSecretCombination(), board.length);
      }while(!result.isGameOver());

      this.showResult(result.isWinner());
    },

    showBoard(board) {
      
      if(board !== []) {
        let count = 0;
        board.forEach(combination => {
          const blacks = game.getBlacks(combination, game.getSecretCombination());
          const whites = game.getWhites(combination, game.getSecretCombination());
          count++;
  
          console.writeln(`${count}. ${combination} --> ${blacks.count} blacks & ${whites} whites`);
        });
      }
    },

    playAgainView() {
      let question = game.playAgain();
      let answer;
      do{
        answer = console.readString(question.msg);
      }while(question.isValid(answer));
      return question.isAgain(answer);
    },

    askProposalCombination() {
      let combination = initProposeCombinationView().proposeCombinationView();

      return combination;
    },
    
    showResult(isWinner) {
      if(isWinner) {
        console.writeln(`Enhorabuena, Ganaste!!!`);
      }else{
        console.writeln(`Perdiste, la próxima partida lo harás mejor`);
      }
    }
  }
}

function initValidateCombination() {

  const MAX_COLORS = initGame().getMaxColors();
  const VALID_COLORS = initGame().getValidColors();
  let errors = [];
  
  return {
    proposeQuestion: `Por favor, propón una combinación:`,
    errors: {
      errorLength: `Error, debes proponer una combinación de 4 colores.\n`,
      errorColor: `Error, los colores válidos son: ${VALID_COLORS}\n`,
      errorRepeatedColor: `Error, no puedes repetir colores.\n`
    },

    isValidCombination(proposedCombination) {
      return this.isValidLength(proposedCombination)
      && this.isValidColor(proposedCombination)
      && !this.isRepeatedColor(proposedCombination);
    },

    checkCombinationErrors(proposedCombination) {
      errors = [];
      this.isValidLength(proposedCombination);
      if(this.isValidColor(proposedCombination)) {
        this.isRepeatedColor(proposedCombination);
      }
      
      return errors;
    },

    isValidLength(proposedCombination) {
      if(proposedCombination.length < MAX_COLORS || MAX_COLORS < proposedCombination.length ) {
        errors.push(this.errors.errorLength);
        return false;
      }
      return true;
    },
    
    isValidColor(proposedCombination) {
      for(let i = 0; i < proposedCombination.length; i++) {
        if(!VALID_COLORS.includes(proposedCombination[i])) {
          errors.push(this.errors.errorColor);
          return false;
        }
      }
      return true;
    },

    isRepeatedColor(proposedCombination) {

      for(let i = 0; i < proposedCombination.length; i++) {
        for(let j = 0; j < proposedCombination.length; j++) {
          if(proposedCombination[i] == proposedCombination[j] && i !== j) {
            errors.push(this.errors.errorRepeatedColor);
            return true;
          }
        }
      }
      return false;
    }
  }
}

function initProposeCombinationView() {

  const combinationValidator = initValidateCombination();

  return {
    proposeCombinationView() {
      let validation;
      let proposedCombination;

      do{
        proposedCombination = console.readString(combinationValidator.proposeQuestion);
        validation = combinationValidator.isValidCombination(proposedCombination);

        if(!validation) {
          this.showCombinationErrors(proposedCombination);
        }
      }while(!validation);

      return proposedCombination;
    },

    showCombinationErrors(proposedCombination) {
      let errors = combinationValidator.checkCombinationErrors(proposedCombination);
      errors.forEach(error => console.writeln(error));
    }
  }
}

function initSecretCombination() {

  let secretCombination = [];

  return {
    isSecretCombination(combination) {
      return combination === this.getSecretCombination();
    },
    
    getSecretCombination(maxCombination, colors) {
      let color;
      do{
        color = colors[Math.floor(Math.random() * colors.length)];
        if(!secretCombination.includes(color)) {
          secretCombination += color;
        }
      }while(secretCombination.length !== maxCombination);
      return secretCombination;
    }
  }
}