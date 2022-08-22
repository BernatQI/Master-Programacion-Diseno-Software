# Prueba JS-Orientada a Procesos

### Define el nombre y la responsabilidad "detallada" (cálculo/consulta o acción/alta+baja+modificación en memoria o RAM video) de una función que no tenga parámetros ni retono

- [playTicTacToe()](https://github.com/USantaTecla-tech-javascript/game-ticTacToe/blob/master/1-programacionOrientadoProcesos/v0.0/app.js), inicia una partida sin necesidad de pasarle parámetros, y no retorna nada. Consulta el estado de la partida, modifica el estado de la partida, imprime el estado de la partida y notifica el final de la partida.
- printAbout(), consulta la información "About us" y la imprime ("string") sin necesidad de pasarle parámetros, y no retorna nada..

### Define el nombre y la responsabilidad "detallada" (cálculo/consulta o acción/alta+baja+modificación en memoria o RAM video) de dos funciones que no tengan parámetros pero sí retono

- getDate(), Consulta la fecha interna o externamente (sistema operativo, API, etc) y la devuelve/retorna sin necesidad de pasarle parámetros.
- [isResumed()](https://github.com/USantaTecla-tech-javascript/game-ticTacToe/blob/master/1-programacionOrientadoProcesos/v0.0/app.js), retorna si player quiere jugar otra partida, pero no tiene parámetros.

### Define el nombre y la responsabilidad "detallada" (cálculo/consulta o acción/alta+baja+modificación en memoria o RAM video) de tres funciones que sí tengan parámetros pero no retono

- [writelnTokens(tokens)](https://github.com/USantaTecla-tech-javascript/game-ticTacToe/blob/master/1-programacionOrientadoProcesos/v0.0/app.js), recibe como parámetro el estado actual de "tokens" y lo imprime, sin retornar nada.
- [placeToken(tokens, turn)](https://github.com/USantaTecla-tech-javascript/game-ticTacToe/blob/master/1-programacionOrientadoProcesos/v0.0/app.js), recibe como parámetros el estado actual de "tokens" y "turn". Consulta e imprime para quien es el turno actual, consulta el número de "tokens" actuales, para solicitar añadir uno nuevo o mover uno añadido, y finalmente modifica el estado de "tokens".
- setStatus(user), una función que recibe el parámetro "user" y modifica el "status" del usuario ("user"), la función no retorna nada.

### Define el nombre y la responsabilidad "detallada" (cálculo/consulta o acción/alta+baja+modificación en memoria o RAM video) de cuatro funciones que sí tenga parámetros y retono

- [nextTurn(turn)](https://github.com/USantaTecla-tech-javascript/game-ticTacToe/blob/master/1-programacionOrientadoProcesos/v0.0/app.js), recibe el parámetro "turn" y devuelve un valor de tipo booleano después de evaluar si "turn" + 1 es módulo de "MAX_PLAYERS".
- [isOccupied(tokens, row, column, turn)](https://github.com/USantaTecla-tech-javascript/game-ticTacToe/blob/master/1-programacionOrientadoProcesos/v0.0/app.js), recibe los parámetros "tokens", "row", "column" y "turn" y devuelve un valor de tipo booleano después de evaluar si el valor de "tokens\[row][column]" es igual al valor que retorna la evaluación de la función "getToken(turn)".
- [isEmpty(tokens, row, column)](https://github.com/USantaTecla-tech-javascript/game-ticTacToe/blob/master/1-programacionOrientadoProcesos/v0.0/app.js), recibe los parámetros "tokens", "row" y "column", y devuelve un valor de tipo booleano después de evaluar si "tokens\[row][column]" "TOKEN_EMPTY".
- [read(titile)](https://github.com/USantaTecla-tech-javascript/game-ticTacToe/blob/master/1-programacionOrientadoProcesos/v0.0/app.js), recibe el parámetro "title", imprime el valor de "title", solicita al usuario un número, evalúa si el número dado es menor que "1" o mayor que "3", y finalmente retorna el valor de "position" válido - "1".

### Define el nombre y la responsabilidad "detallada" de una función que realice un cálculo/consulta y una acción/alta+baja+modificación en memoria o RAM video con libertad en presencia o no de parametros y retorno
- editUserStatus(userId, newStatus), recibe los parámetros "userId" y "newStatus", busca en memoria el usuario por su "userId" y modifica su "satus" con el valor de "newStatus" recibido como parámetro.