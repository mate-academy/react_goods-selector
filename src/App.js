import React from 'react';
import classNames from 'classnames';

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

  toggleSelection = (good) => {
    this.setState((state) => {
      if (state.selectedGoods.indexOf(good) === -1) {
        return {
          selectedGoods: [
            ...state.selectedGoods,
            good,
          ],
        };
      }

      return {
        selectedGoods: state.selectedGoods
          .filter(selectedGood => selectedGood !== good),
      };
    });
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          Selected good:
          {' '}
          <span className="App__title-goods">
            {selectedGoods.length > 0 ? [...selectedGoods].join(', ') : '-'}
          </span>
        </h1>

        <ul className="goods">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={
                classNames('goods__item', {
                  'goods__item--selected': selectedGoods.indexOf(good) !== -1,
                })
              }
            >
              <span>
                {good}
              </span>

              <button
                type="button"
                className="goods__button"
                onClick={() => this.toggleSelection(good)}
              >
                {selectedGoods.indexOf(good) === -1 ? 'Add' : 'Remove'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
