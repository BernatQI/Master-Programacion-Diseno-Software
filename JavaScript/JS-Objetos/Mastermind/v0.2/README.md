![Diagrama_PlantUML_Mastermind_v02](/JavaScript/JS-Objetos/Mastermind/v0.2/uml-mastermind-v02.svg)

@startuml
startMastermind --> Mastermind
Mastermind o--> GameView
Mastermind *--> Game
Game o-> GameView
Game o--> ValidateCombination
SecretCombination <-* Game

Mastermind : -Object game
Mastermind : -Object gameView
Mastermind : -Object board
Mastermind : play()
Mastermind : showBoard()
Mastermind : proposeCombination()
Mastermind : setCombination()
Mastermind : showResult()
Mastermind : playAgain()

Game : -Array SECRET_COMBINATION
Game : -Integer MAX_COLORS
Game : -String VALID_COLORS
Game : +String MESSAGES
Game : +Array board
Game : +getMaxColors()
Game : +getValidColors()
Game : +getSecretCombination()
Game : +getBlacks()
Game : +getWhites()
Game : +isValidCombination()
Game : +getCombinationErrors()
Game : +isWinner()
Game : +isGameOver()

GameView : -Object game
GameView : +showTitle()
GameView : +showProposedCombination()
GameView : +askCombination()
GameView : +showCombinationErrors()
GameView : +showResult()
GameView : +askPlayAgain()

ValidateCombination : -Integer MAX_COLORS
ValidateCombination : -String VALID_COLORS
ValidateCombination : +isValidCombination()
ValidateCombination : +isValidLength()
ValidateCombination : +isValidColors()
ValidateCombination : +isRepeatedColor()

SecretCombination : -Array secretCombination
SecretCombination : +getSecretCombination()

@enduml