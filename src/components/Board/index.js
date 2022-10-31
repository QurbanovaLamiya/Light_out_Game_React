import { Component, Fragment } from "react";

class Board extends Component {
  static defaultProps = {
    rowsNum: 5,
    colsNum: 5,
    chanceLightStartsOn: 0.25,
  };

  constructor() {
    super();

    this.state = {
      hasWon: false,
      //   board: this.createBoard(),
    };
  }

  createBoard() {
    let board = [];

    for (let r = 0; r < this.props.rowsNum; r++) {
      let row = [];
      for (let c = 0; c < this.props.colsNum; c++) {
        row = [...row, Math.random() < this.props.chanceLightStartsOn];
      }
      board = [...board, row];
    }

    return board;
  }

  render() {
    return (
      <Fragment>
      </Fragment>
    );
  }
}

export default Board;
