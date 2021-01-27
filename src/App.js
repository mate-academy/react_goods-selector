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

export default class App extends React.Component {
  state = {
    selectedGoods: [],
  }

  toggleAddHandler = (elem) => {
    this.setState((prevState) => {
      const isElem = prevState.selectedGoods.includes(elem);
      const { selectedGoods } = this.state;

      return isElem ? {
        selectedGoods: selectedGoods.filter(item => item !== elem),
      }
        : {
          selectedGoods: [...selectedGoods, elem],
        };
    });
  };

  clearHandler = () => {
    this.setState({ selectedGoods: [] });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <div className="heading">
          <h1>
            Selected good: &ndash;
            {selectedGoods.length ? selectedGoods.join(', ') : 'none'}
          </h1>
          {selectedGoods.length !== 0 && (
            <button
              type="button"
              value="Clear"
              className="good-btn good-clear_btn"
              onClick={this.clearHandler}
            >
              Clear
            </button>
          )}
        </div>

        <ul className="good-list">
          {goodsFromServer.map(good => (
            <li
              className={selectedGoods.includes(good)
                ? 'good-item active' : 'good-item'}
              key={good}
            >
              {good}
              <button
                type="button"
                value="Add / Remove"
                className="good-btn good-select_btn"
                onClick={() => this.toggleAddHandler(good)}
              >
                Add / Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
