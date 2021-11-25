import React from 'react';
import './App.scss';

import classNames from 'classnames';

const goodsFromServer: string[] = [
  'Dumplings 🥟',
  'Carrot 🥕',
  'Eggs 🍳',
  'Ice cream 🍦',
  'Apple 🍏',
  'Bread 🍞',
  'Fish 🐟',
  'Honey 🍯',
  'Jam 🍮',
  'Garlic 🧄',
];

type State = {
  selectedGood: string[];
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedGood: ['Jam 🍮'],
  };

  handleAdd = (newSelectedGood: string) => {
    this.setState((state) => {
      return {
        selectedGood: [...state.selectedGood, newSelectedGood],
      };
    });
  };

  clearSelectedGood = () => {
    this.setState({
      selectedGood: [],
    });
  };

  removeFromSelected = (goodToRemove: string) => {
    this.setState((state) => {
      return {
        selectedGood: state.selectedGood.filter(
          (good) => good !== goodToRemove,
        ),
      };
    });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <div className="GoodsDisplay">
          <h1>
            Selected good:
            <span className="GoodsDisplay__selected-item">
              {selectedGood.join(' ')}
            </span>
          </h1>
          {selectedGood.length > 0 && (
            <button
              className="Btn Btn--clear"
              type="button"
              onClick={this.clearSelectedGood}
            >
              X
            </button>
          )}
        </div>

        <ul className="GoodsList">
          {goodsFromServer.map((good) => {
            const isGoodSelected = selectedGood.includes(good);

            return (
              <div className="GoodsList__content">
                <li
                  key={good}
                  className={classNames('GoodsList__item', {
                    'GoodsList__item--selected': isGoodSelected,
                  })}
                >
                  {good}
                </li>
                {isGoodSelected ? (
                  <button
                    className="Btn Btn--clear"
                    type="button"
                    onClick={() => this.removeFromSelected(good)}
                  >
                    X
                  </button>
                ) : (
                  <button
                    className="Btn Btn--add"
                    type="button"
                    onClick={() => this.handleAdd(good)}
                  >
                    Add
                  </button>
                )}
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
