import React, { Component } from 'react';
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

const preparedGoods = goodsFromServer.map((good, index) => ({
  name: good,
  id: index,
}));

export class App extends Component {
  state = {
    selectedGood: '-',
  };

  addGood = (good) => {
    this.setState({ selectedGood: good });
  }

  clearGood = () => {
    this.setState({ selectedGood: '-' });
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good:
          {selectedGood}
          <button
            className="button"
            type="button"
            onClick={this.clearGood}
          >
            Clear
          </button>
        </h1>

        <ul className="good-list">
          {preparedGoods.map(good => (
            <li
              key={good.id}
              className="good-list__item"
            >
              {good.name}

              <button
                className="button"
                type="button"
                onClick={() => {
                  this.addGood(good.name);
                }}
              >
                Add
              </button>

            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
