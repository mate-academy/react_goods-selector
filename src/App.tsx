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

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  showSelectedGoods = (goods: string[]): string => {
    switch (goods.length) {
      case 0:
        return 'No goods selected';

      case 1:
        return `${goods[0]} is selected`;

      case 2:
        return `${goods[0]} and ${goods[1]} are selected`;

      default: {
        const lastGoodInd = goods.length - 1;

        return `${goods.slice(0, lastGoodInd).join(', ')} and ${goods[lastGoodInd]} are selected`;
      }
    }
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
          {this.showSelectedGoods(selectedGoods)}
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
          {goodsFromServer.map((good) => {
            const isSelected = selectedGoods.includes(good);

            return (
              <li
                className={classNames(
                  'list__item',
                  { active: isSelected },
                )}
                key={good}
              >
                {good}

                {isSelected
                  ? (
                    <button
                      type="button"
                      onClick={() => {
                        this.removeGoodHandler(good);
                      }}
                    >
                      Remove
                    </button>
                  )

                  : (
                    <button
                      type="button"
                      onClick={() => {
                        this.clickOnGoodHandler(good);
                      }}
                    >
                      Add
                    </button>
                  )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
