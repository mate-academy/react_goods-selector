import React from 'react';
import className from 'classnames';

import './App.scss';

const goodsFromServer: string[] = [
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

type State = {
  selectedGood: string[];
};

class App extends React.Component<{}, State> {
  state = {
    selectedGood: ['Jam'],
  };

  addGoods = (goods: string) => {
    if (!this.state.selectedGood.includes(goods)) {
      this.setState((currentState => ({
        selectedGood: [...currentState.selectedGood, goods],
      })));
    }
  };

  deleteGoods = () => {
    this.setState({ selectedGood: [] });
  };

  aboutProducts = () => {
    const { selectedGood } = this.state;

    if (selectedGood.length === 1) {
      return `Selected good: ${selectedGood} is selected`;
    }

    if (selectedGood.length > 1) {
      return `Selected good: ${selectedGood.join(', ')} are selected`;
    }

    return 'Selected good: No goods selected';
  };

  render() {
    const { selectedGood } = this.state;
    const message = this.aboutProducts();

    return (
      <div className="App">
        <h1 className="list__selected">
          {message}
        </h1>

        <button
          type="button"
          onClick={this.deleteGoods}
          className={(selectedGood.length !== 0)
            ? 'list__button-X'
            : 'list__button-X list__button-X--invisible'}
        >
          X
        </button>
        <ul className="list">
          {goodsFromServer.map(goods => (
            <li
              key={goods}
              className={className(
                'list__item',
                {
                  'list__item list__item--active': selectedGood.includes(goods),
                },
              )}
            >
              {goods}

              <button
                type="button"
                className={className(
                  'list__button',
                  {
                    'list__button--active': selectedGood.includes(goods),
                  },
                )}
                onClick={() => {
                  this.addGoods(goods);
                }}
              >
                SELECT
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
