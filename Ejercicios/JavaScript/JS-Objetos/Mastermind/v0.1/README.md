@startuml
Mastermind o--> GameView
Mastermind *--> Game
Game o-> GameView
Game o--> ValidateCombination
GameView ..> ProposeCombinationView
SecretCombination <-* Game
ValidateCombination o-> ProposeCombinationView

GameView : -game
GameView : +play()
GameView : +showBoard()
GameView : +askProposalCombination()
GameView : +showResult()
GameView : +checkCombinationErrors()
GameView : +playAgainView()

Game : -SECRET_COMBINATION
Game : -MAX_COMBINATION
Game : -VALID_COLORS
Game : +Array board
Game : getSecretCombination()
Game : +getValidColors()
Game : +getMaxColors()
Game : +getBoard()
Game : +getBlacks()
Game : +getWhites()
Game : +setProposedCombination()
Game : +playAgain()
Game : +getResult()

ValidateCombination : -MAX_COMBINATION
ValidateCombination : -VALID_COLORS
ValidateCombination : +proposeQuestion
ValidateCombination : +errors
ValidateCombination : +validateCombination()
ValidateCombination : +isValidLength()
ValidateCombination : +isValidColors()
ValidateCombination : +isRepeatedColor()

ProposeCombinationView : -combinationValidator
ProposeCombinationView : +proposeCombinationView()
ProposeCombinationView : showCombinationErrors()

SecretCombination : -secretCombination
SecretCombination : +getSecretCombination()
SecretCombination : +isSecretCombination()

@enduml