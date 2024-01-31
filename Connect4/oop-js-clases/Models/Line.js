import Board from './Board.js';

export default class Line {

  #north;
  #northWest;
  #west;
  #southWest;
  DIRECTIONS;

  constructor() {
    this.#north = [0, 1];
    this.#northWest = [-1, 1];
    this.#west = [-1, 0];
    this.#southWest = [-1, -1];
    this.DIRECTIONS = [this.#north, this.#northWest, this.#west, this.#southWest];
  }

  getLine(coordenate, direction, board) {
    let line = [];
    let column = coordenate[0];
    let row = coordenate[1];

    for (let i = 0; i < 4; i++) {
      if (this.isValidCoordenate(column, row)) {
        line.push(board[row][column]);
        column += direction[0];
        row += direction[1];
      } else {
        return false;
      }
    }
    
    return line;
  }

  isValidCoordenate(column, row) {
    return 0 < row && row <= Board.NUMBER_ROWS && 0 < column && column <= Board.NUMBER_COLUMNS;
  }

  shift(coordenate, direction) {
    let column = coordenate[0];
    let row = coordenate[1];
    const oppositeDirection = this.getOppositeDirection(direction);

    column += oppositeDirection[0];
    row += oppositeDirection[1];

    return [column, row];
  }

  isWinner(line) {
    // const empty = Board.EMPTY;
    let counts = 0;

    for (let i = 0; i <= 3; i++) {
      if (line[i] !== Board.EMPTY && line[i] === line[i + 1]) {
        counts++;
      }
    }

    return counts === 3;
  }

  getOppositeDirection(direction) {
    let oppositeDirection = [];

    direction.forEach(coordenate => {
      oppositeDirection.push(coordenate * -1);
    });

    return oppositeDirection;
  }

}