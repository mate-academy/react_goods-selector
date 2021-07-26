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

class App extends Component {
  state = {
    selectedGoods: ['Jam'],
  }

  clearSelected = () => {
    this.setState({ selectedGoods: [] });
  }

  addGoods = (good) => {
    this.setState(({ selectedGoods }) => ({
      selectedGoods: [...selectedGoods, good],
    }));
  }

  removeGoods = (good) => {
    this.setState(({ selectedGoods }) => ({
      selectedGoods: selectedGoods.filter(item => item !== good),
    }));
  }

  render() {
    const { selectedGoods } = this.state;

    let renderTitle = 'No goods selected';
    let isClearSelected = true;

    if (selectedGoods.length === 1) {
      renderTitle = `${selectedGoods} is selected`;
    }

    if (selectedGoods.length > 1) {
      const lastSelected = selectedGoods.slice(-1);
      const selected = selectedGoods
        .slice(0, -1);

      renderTitle = `${selected.join(', ')} and ${lastSelected} are selected`;
    }

    if (selectedGoods.length === 0) {
      isClearSelected = false;
    }

    return (
      <div className="listOfgoods">
        <h1>
          {renderTitle}
        </h1>
        {isClearSelected && (
          <button
            type="button"
            onClick={this.clearSelected}
          >
            x
          </button>
        )}
        <ul className="list">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={selectedGoods.includes(good)
                && 'selected'}
            >
              {good}
              {selectedGoods.includes(good)
                ? (
                  <button
                    type="button"
                    className="btn btn-remove"
                    onClick={() => {
                      this.removeGoods(good);
                    }}
                  >
                    Remove
                  </button>
                )
                : (
                  <button
                    type="button"
                    className="btn btn-add"
                    onClick={() => {
                      this.addGoods(good);
                    }}
                  >
                    Add
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
