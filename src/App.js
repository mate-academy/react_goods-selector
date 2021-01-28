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
    selectedIndexes: Array.from(goodsFromServer, () => false),
  }

  toggleAddHandler = (elem, i) => {
    this.setState((prevState) => {
      const { selectedGoods } = this.state;
      const { selectedIndexes } = prevState;
      const indexes = selectedIndexes;

      indexes[i] = (!selectedIndexes[i]);

      if (selectedIndexes[i] === false) {
        return {
          selectedGoods: selectedGoods.filter(item => item !== elem),
          selectedIndexes: indexes,
        };
      }

      return {
        selectedGoods: [...selectedGoods, elem],
        selectedIndexes: indexes,
      };
    });
  };

  clearHandler = () => {
    const { selectedIndexes } = this.state;

    this.setState({
      selectedGoods: [],
      selectedIndexes: selectedIndexes.fill(false),
    });
  };

  render() {
    const { selectedGoods, selectedIndexes } = this.state;

    return (
      <div className="App">
        <div className="heading">
          <h1>
            Selected good: &ndash;&nbsp;
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
          {goodsFromServer.map((good, index) => (
            <li
              className={selectedIndexes[index]
                ? 'good-item active' : 'good-item'}
              key={good}
            >
              {good}
              <button
                type="button"
                value="Add / Remove"
                className="good-btn good-select_btn"
                onClick={() => this.toggleAddHandler(good, index)}
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
