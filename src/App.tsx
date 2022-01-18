import React from 'react';
import classNames from 'classnames';

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
  selectedGoods: string[];
};

const showSelectedGoods = (goods: string[]): string => {
  if (goods.length === 1) {
    return `${goods[0]} is selected`;
  }

  if (goods.length === 2) {
    return `${goods[0]} and ${goods[1]} are selected`;
  }

  let selectedGoods = goods.slice(0, goods.length - 1).join(', ');

  selectedGoods += ` and ${goods[goods.length - 1]} are selected`;

  return selectedGoods;
};

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  clickOnGoodHandler = (name: string): void => {
    this.setState(({ selectedGoods }) => ({
      selectedGoods: [...selectedGoods, name],
    }));
  };

  deleteGoodsHandler = (): void => {
    this.setState({ selectedGoods: [] });
  };

  removeGoodHandler = (good: string): void => {
    this.setState(({ selectedGoods }) => ({
      selectedGoods: selectedGoods.filter(name => name !== good),
    }));
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>
          {selectedGoods.length
            ? `${showSelectedGoods(selectedGoods)}`
            : 'No goods selected'}
        </h1>

        <button
          type="button"
          onClick={this.deleteGoodsHandler}
          className={classNames(
            { disable: !selectedGoods.length },
          )}
        >
          X
        </button>

        <ul className="list">
          {goodsFromServer.map((good) => (
            <li
              className={classNames(
                'list__item',
                { active: selectedGoods.includes(good) },
              )}
              key={good}
            >
              {good}

              <button
                className={classNames(
                  { disable: selectedGoods.includes(good) },
                )}
                type="button"
                onClick={() => {
                  this.clickOnGoodHandler(good);
                }}
              >
                Add
              </button>

              <button
                className={classNames(
                  { disable: !selectedGoods.includes(good) },
                )}
                type="button"
                onClick={() => {
                  this.removeGoodHandler(good);
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
