const { Console } = require("console-mpds");
const console = new Console();

playMasterMind();

function playMasterMind() {
    
    console.writeln(`----- MASTERMIND -----`);
    do {
        playGame();
    }while(isResumed());
    
    function playGame() {
        const MAX_ATTEMPTS = 10;
        const COLORS = [`r`,`g`,`b`,`y`,`c`,`m`];
        const MAX_COMBINATION = 4;
        const SECRET_COMBINATION = getSecretCombinstion(COLORS, MAX_COMBINATION);
        let attempts = 0;
        let board = [];
        let winner = false;

        console.writeln(`Secret combination: ${SECRET_COMBINATION}`);
        do{
            console.writeln(`\n${attempts} attempt(s):\n****`);
            for(PreviousCombinations of board) {
                printBoard(isSuccess(PreviousCombinations));
            }
            proposeCombination();
            isWinner(isSuccess(board[attempts]))
            attempts++;
        }while(attempts < MAX_ATTEMPTS && !winner);

        function proposeCombination() {
            let combination;
            do{
                combination = console.readString(`Propose a combination: `);
            }while(!isValidCombination(combination));
            
            return board[attempts] = combination;

            function isValidCombination(combination) {
                if(combination.length !== MAX_COMBINATION) {
                    console.writeln(`Wrong proposed combination length`);
                }else if(!isValidColors()) {
                    console.writeln(`Wrong colors, they must be: rgybmc`);
                }else{
                    return true;
                }
                function isValidColors() {
                    for(let i = 0; i < combination.length; i++) {
                        for(let j = 0; j < COLORS.length; j++) {
                            if(combination[i] === COLORS[j]) {
                                return true;
                            }
                        }
                    }
                }
            }
        }

        function getSecretCombinstion(colors, maxCombination) {
            let secretCombination = [];
            for(let i = 0; i < maxCombination; i++) {
                secretCombination += colors[Math.floor(Math.random() * colors.length)];
            }
            return secretCombination;
        }

        function isSuccess(combination) {

            let blacks = 0;
            let countFound = [];
            for (i = 0; i < combination.length; i++) {
                for (j = 0; j < combination.length; j++) {
                    if (combination[i] === SECRET_COMBINATION[i] && i === j) {
                        countFound[i] = combination[i];
                        blacks++;
                    }else{
                        countFound[i] = 0;
                    }
                }
            }
            
            let whites = 0;
            for (i = 0; i < combination.length; i++) {
                for (j = 0; j < combination.length; j++) {
                    if (combination[i] === SECRET_COMBINATION[j] && combination[i] !== SECRET_COMBINATION[i] && countFound[j] === 0) {
                        countFound[i] = combination[i];
                        whites++;
                    }
                }
            }

            return [combination, blacks, whites];
        }

        function printBoard(PreviousCombinations) {
            console.writeln(`${PreviousCombinations[0]} --> ${PreviousCombinations[1]} blacks and ${PreviousCombinations[2]} whites`);
        }

        function isWinner(combination) {
            if(combination[1] === 4){
                winner = true;
                console.writeln(`You've won!!! ;-)`);
            }else if(attempts === MAX_ATTEMPTS - 1) {
                console.writeln(`You've lost!!! :-(`);
            }
            return winner;
        }
    }

    function isResumed() {
        const answer = console.readString(`Do you want to continue? (y/n):`);
        if(answer === 'y') {
            return true;
        }else{
            console.writeln('\n¡¡¡ADIÓS!!!\n');
            return false;
        }
    }
}