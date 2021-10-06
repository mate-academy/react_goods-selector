// import { element } from 'prop-types';
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

  selectBtnClick = (good) => {
    this.setState(prevArr => ({
      selectedGoods: prevArr.selectedGoods.concat(good),
    }));
  }

  removeBtnClick = (good) => {
    this.setState(prevArr => ({
      selectedGoods: prevArr.selectedGoods.filter(element => element !== good),
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>
          Selected good: -
          {' '}
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
                  !this.state.selectedGoods.includes(good)
                    ? (
                      <button
                        type="button"
                        className="select"
                        onClick={() => {
                          this.selectBtnClick(good);
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
                          this.removeBtnClick(good);
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
