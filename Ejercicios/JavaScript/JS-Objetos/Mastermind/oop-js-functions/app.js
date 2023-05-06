const { Console } = require("console-mpds");
const console = new Console();

initMastermind().play();

function initMastermind() {

  const gameView = initGameView();
  const playAgainDialog = initPlayAgainDialog();
  const messages = initMessages();
  return {
    play() {
      console.writeln(messages.TITLE);
      do{
        gameView.play();
      }while(playAgainDialog.ask());
      
      console.writeln(messages.GAME_OVER);
    }
  }
  
}

function initPlayAgainDialog() {
  
  let answer;
  
  return {
    ask() {
      let error;
      do{
        answer = console.readString(`¿Quieres jugar otra partida?`);
        error = !this.isValid();
        if(error) {
          console.writeln(`Por favor, responde "si" o "no"`);
        }
      }while(error);
      return this.isAffirmative();
    },

    isAffirmative() {
      return answer === `si`;
    },
    isValid() {
      return answer === `si` || answer === `no`;
    }
  }
}

function initGameView() {
  const game = initGame();
  const proposeCombinationView = initProposeCombinationView();
  const proposeCombination = initProposeCombination();

  return {
     play() {
      let combination;
      let proposedCombinations;
      proposeCombination.reset();
      do{
        proposedCombinations = proposeCombination.getProposedCombinations();
        this.showBoard(proposedCombinations);
        combination = proposeCombinationView.askCombination();
        proposeCombination.setProposedCombination(combination);
      }while(!game.isEndGame(proposedCombinations) && !game.isWinner(combination));

      this.showBoard(proposedCombinations);
      game.isWinner(combination) ? console.writeln(`You've won!!! ;-)`) : console.writeln(`You've lost!!! :-(`);
    },

    showBoard(proposedCombinations) {
      if(proposedCombinations.length > 0) {
        proposedCombinations.forEach((proposedCombination, index) => {
          console.writeln(`${index + 1}. ${proposedCombination}: ${game.getBlacks(proposedCombination)} blacks & ${game.getWhites(proposedCombination)} whites`);
        });
      }
    }
  }
}

function initGame() {

  const secretCombination = initSecretCombination();

  return {
    isEndGame(proposedCombinations) {
      return proposedCombinations.length === 10;
    },
    isWinner(proposedCombination) {
      return secretCombination.getBlacks(proposedCombination) === 4;
    },
    getBlacks(proposedCombination) {
      return secretCombination.getBlacks(proposedCombination);
    },
    getWhites(proposedCombination) {
      return secretCombination.getWhites(proposedCombination);
    }
  }
}

function initProposeCombinationView() {
  const proposeCombination = initProposeCombination();
  const messages = initMessages();
  
  return {
    askCombination() {
      let proposedCombination;
      do{
        proposedCombination = console.readString(messages.COMBINATION_QUESTION);
        if(!proposeCombination.isValid(proposedCombination)) {
          this.showErrors(proposeCombination.getErrors(proposedCombination));
        }
      }while(!proposeCombination.isValid(proposedCombination));
      return proposedCombination;
    },
    showErrors(errors) {
      errors.forEach(error => console.writeln(error));
    }
  }
}

function initProposeCombination() {
  const combination = initCombination();
  const messages = initMessages();
  let proposedCombinations = [];
  
  return {
    getProposedCombinations() {
      return proposedCombinations;
    },
    
    setProposedCombination(proposedCombination) {
      proposedCombinations.push(proposedCombination);
    },
    isValid(proposedCombination) {
      return combination.isValidLength(proposedCombination)
        && combination.hasValidColors(proposedCombination)
        && !combination.hasRepeatedColors(proposedCombination);
    },
    getErrors(proposedCombination) {
      proposedCombination = [...proposedCombination];
      let errors = [];
      if(!combination.isValidLength(proposedCombination)) {
        errors.push(messages.ERROR_MSG.errorLength);
      }
      if(!combination.hasValidColors(proposedCombination)) {
        errors.push(messages.ERROR_MSG.errorColor);
      }
      if(combination.hasRepeatedColors(proposedCombination)) {
        errors.push(messages.ERROR_MSG.errorRepeatedColor);
      }
      return errors;
    },
    reset() {
      proposedCombinations = [];
    }
  }
}

function initCombination() {

  return {
    VALID_COLORS: `rgbycm`,
    VALID_LENGTH: 4,
    hasValidColors(combination) {
      return [...combination].every(color => this.VALID_COLORS.includes(color));
    },
    isValidColor(color) {
      return this.VALID_COLORS.includes(color);
    },
    isValidLength(combination) {
      return combination.length === this.VALID_LENGTH;
    },
    hasRepeatedColors(combination) {
      return [...combination].some((color, index, combination) => combination.indexOf(color) !== index);
    }
  }
}

function initSecretCombination() {

  const that = {
    generate() {
      let secretCombination = [];
      let color;
      do{
        color = combination.VALID_COLORS[Math.floor(Math.random() * combination.VALID_COLORS.length)];

        if(!secretCombination.includes(color)) {
          secretCombination.push(color);
        }
      }while(!combination.isValidLength(secretCombination));
      console.writeln(secretCombination);
      return secretCombination;
    }
  }

  const combination = initCombination();
  let secretCombination = that.generate();

  return {
    getBlacks(proposedCombination) {
      proposedCombination = [...proposedCombination];
      let blacks = 0;
      proposedCombination.forEach((color, index) => {
        if(color === secretCombination[index]) {
          blacks++
        }
      });
      return blacks;
    },
    getWhites(proposedCombination) {
      proposedCombination = [...proposedCombination];
      let whites = 0;
      proposedCombination.forEach((color, index) => {
        if(secretCombination.includes(color)) {
          if(color !== secretCombination[index]) {
            whites++
          }
        }
      });
      return whites;
    }
  }
}

function initMessages() {
  const combination = initCombination();

  return {
    TITLE: `\n\t>>> MASTERMIND <<<\n`,
    COMBINATION_QUESTION: `Por favor, propón una combinación:`,
    ERROR_MSG: {
      errorLength: `Error, debes proponer una combinación de 4 colores.\n`,
      errorColor: `Error, los colores válidos son: ${combination.VALID_COLORS}\n`,
      errorRepeatedColor: `Error, no puedes repetir colores.\n`,
    },
    WINNER: `¡¡¡GANASTE!!! Enhorabuena`,
    LOSER: `Perdiste, la próxima partida lo harás mejor`,
    PLAY_AGAIN_QUESTION: `¿Quieres jugar otra partida?`,
    GAME_OVER: `\n\t>>> GAME OVER <<<\n`
  }
}