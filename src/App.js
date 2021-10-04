import React from 'react';
import './App.scss';

const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

class App extends React.Component {
  state = {
    selectedGoods: [],
  }

  selectBtnClick = (arr, good) => {
    arr.push(good);
    this.setState({ selectedGoods: arr });
  }

  removeBtnClick = (arr, good) => {
    arr.splice(arr.indexOf(good), 1);
    this.setState({ selectedGoods: arr });
  }

  render() {
    return (
      <div className="App">
        <h1>
          Selected good: -
          {this.state.selectedGoods.length}
        </h1>
        <h2>
          {this.state.selectedGoods.length !== 0
            ? (
              `${this.state.selectedGoods.join(', ')
                  + (this.state.selectedGoods.length === 1
                    ? ' is'
                    : ' are')} selected`
            )
            : 'No goods selected'
          }
        </h2>
        <ul>
          {goodsFromServer.map(good => (
            <li key={good}>
              <span>{good}</span>
              {
                  this.state.selectedGoods.indexOf(good) === -1
                    ? (
                      <button
                        type="button"
                        className="select"
                        onClick={() => {
                          this.selectBtnClick(this.state.selectedGoods, good);
                        }}
                      >
                        Select
                      </button>
                    )
                    : (
                      <button
                        type="button"
                        className="remove"
                        onClick={() => {
                          this.removeBtnClick(this.state.selectedGoods, good);
                        }}
                      >
                        X
                      </button>
                    )
                }
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
