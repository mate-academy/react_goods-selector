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

interface State {
  selectedGoods: string[]
}

class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: ['Jam'],
  };

  addGoodToBusket = (good: string) => {
    this.setState((state: State) => ({
      selectedGoods: [...state.selectedGoods, good],
    }));
  };

  removeGoodFromBasket = (good: string) => {
    const { selectedGoods } = this.state;
    const basketAfterRemoving = selectedGoods.filter(item => item !== good);

    this.setState({ selectedGoods: basketAfterRemoving });
  };

  showBasket = () => {
    const { selectedGoods } = this.state;
    let basket = '';

    if (selectedGoods.length === 0) {
      return 'No goods selected';
    }

    if (selectedGoods.length === 1) {
      basket = `${selectedGoods[0]} is selected`;
    } else {
      const firstGroupOfGoods = selectedGoods.slice(0, -1);
      const lastAddedGood = selectedGoods[selectedGoods.length - 1];

      basket = `${firstGroupOfGoods.join(', ')} `
        + `and ${lastAddedGood} are selected`;
    }

    return basket;
  };

  clearBasket = () => {
    this.setState({ selectedGoods: [] });
  };

  getModifier = (good: string) => {
    return good.toLocaleLowerCase().split(' ').join('');
  };

  render() {
    const { selectedGoods } = this.state;
    const basketInfo = this.showBasket();
    const isBasketEmpty: boolean = selectedGoods.length === 0;

    return (
      <div className="App">
        <h1 className="App__title">
          {basketInfo}
        </h1>
        {!isBasketEmpty && (
          <div className="wrapper-button">
            <button
              className="button button--clear"
              type="button"
              onClick={this.clearBasket}
            >
              X
            </button>
          </div>
        )}

        <ul className="goods-list">
          {goodsFromServer.map(good => {
            const isGoodInBasket = selectedGoods.includes(good);

            return (
              <li
                className={classNames({
                  'goods-list__item': true,
                  'goods-list__item--theme-green': isGoodInBasket,
                  'goods-list__item--theme-salmon': !isGoodInBasket,
                })}
                key={good}
              >
                <h2 className="goods-list__item-name">{good}</h2>
                <div className={`goods-list__item-image goods-list__item-image--${this.getModifier(good)}`} />
                <button
                  className={classNames({
                    'button button--remove': isGoodInBasket,
                    'button button--add': !isGoodInBasket,
                  })}
                  type="button"
                  onClick={() => {
                    if (isGoodInBasket) {
                      this.removeGoodFromBasket(good);
                    } else {
                      this.addGoodToBusket(good);
                    }
                  }}
                >
                  {isGoodInBasket
                    ? 'Remove'
                    : 'Add'}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
