class TicTacToe {
    constructor() {
      this.currentPlayer = 'x';
      this.gameField = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ];
    }

    getCurrentPlayerSymbol() {
      return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
      if ((this.gameField[rowIndex][columnIndex] === null))  {
        this.gameField[rowIndex][columnIndex] = this.currentPlayer;
        this.currentPlayer = this.currentPlayer === 'x' ? 'o' : 'x';
      } else return;
    }

    isFinished() {
     return ((this.getWinner() != null) || (this.isDraw())) ? true : false;
    }

    getWinner() {
      for (let i = 0; i < this.gameField.length; i++) {
        if ((this.gameField[i].every(el => el === 'x')) || (this.gameField[i].every(el => el === 'o'))) return this.gameField[i][1];

        if ((this.gameField[0][i] === this.gameField[1][i]) && (this.gameField[1][i] === this.gameField[2][i]) && ((this.gameField[0][i] === 'x') || (this.gameField[1][i] === 'o'))) return this.gameField[1][i];
      }

      if ((this.gameField[0][0] === this.gameField[1][1]) && (this.gameField[1][1] === this.gameField[2][2]) && ((this.gameField[0][0] === 'x') || (this.gameField[0][0] === 'o'))) return this.gameField[0][0];

      if ((this.gameField[2][0] === this.gameField[1][1]) && (this.gameField[1][1] === this.gameField[0][2]) && ((this.gameField[2][0] === 'x') || (this.gameField[2][0] === 'o'))) return this.gameField[2][0];

      return null;
    }

    noMoreTurns() {
      return this.gameField.flat().every(el => el != null);
    }

    isDraw() {
      return ((this.getWinner() === null) && (this.noMoreTurns()));
    }

    getFieldValue(rowIndex, colIndex) {
      return this.gameField[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
