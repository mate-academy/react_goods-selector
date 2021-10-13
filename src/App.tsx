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
  selectedGoods: string[],
};

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  changeGoodsSelection = (selectedGood: string, isAlreadySelected: boolean) => {
    this.setState(({ selectedGoods }) => (
      isAlreadySelected
        ? { selectedGoods: selectedGoods.filter(good => good !== selectedGood) }
        : { selectedGoods: [...selectedGoods, selectedGood] }
    ));
  };

  changeGoodsTitle = (selectedGoodsCount: number) => {
    const { selectedGoods } = this.state;
    let goodsTitle = '';
    const selectedGoodsWithoutLast = selectedGoods
      .filter((good, index) => {
        if (index < selectedGoodsCount - 1) {
          return good;
        }

        return false;
      });

    switch (selectedGoodsCount) {
      case 0:
        goodsTitle = 'No goods selected';
        break;
      case 1:
        goodsTitle = `${selectedGoods[0]} is selected`;
        break;
      case 2:
        goodsTitle = `${selectedGoods.join(' and ')} are selected`;
        break;
      default:
        goodsTitle = `${selectedGoodsWithoutLast.join(', ')}`
        + ` and ${selectedGoods[selectedGoodsCount - 1]} are selected`;
    }

    return goodsTitle;
  };

  render() {
    const { selectedGoods } = this.state;
    const selectedGoodsCount = selectedGoods.length;

    return (
      <div className="App">
        <div className="goods">
          <h1 className="goods__title">
            {this.changeGoodsTitle(selectedGoodsCount)}
          </h1>
          <ul className="goods__list">
            {goodsFromServer.map(good => {
              const isAlreadySelected = selectedGoods.includes(good);

              return (
                <li
                  key={good}
                  className={classNames(
                    'goods__item',
                    { 'goods__item--selected': isAlreadySelected },
                  )}
                >
                  <span>
                    {good}
                  </span>
                  <button
                    type="button"
                    className="goods__btn"
                    onClick={() => {
                      return this.changeGoodsSelection(good, isAlreadySelected);
                    }}
                  >
                    {isAlreadySelected ? 'Remove' : 'Add'}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
