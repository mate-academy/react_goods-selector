import classNames from 'classnames';
import React from 'react';
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

interface Good {
  id: number,
  name: string,
}

const goodsWithId: Good[] = goodsFromServer.map((name, id) => ({ name, id }));

type State = {
  selectedGoods: string[],
};

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  clearBasket = () => {
    this.setState({ selectedGoods: [] });
  };

  addGood = (goodToAdd: string) => {
    this.setState(prevState => ({
      selectedGoods: [...prevState.selectedGoods, goodToAdd],
    }));
  };

  removeGood = (goodToRemove: string) => {
    this.setState(prevState => {
      const goods = prevState.selectedGoods.filter(good => good !== goodToRemove);

      return { selectedGoods: goods };
    });
  };

  getFormattedProduct = (productList: string[]) => {
    switch (productList.length) {
      case (0):
        return 'No goods selected';

      case (1):
        return `${productList[0]}`;

      case (2):
        return `${productList[0]} and ${productList[1]}`;

      default:
        return `${productList.slice(0, -1).join(', ')} and ${productList.slice(-1)}`;
    }
  };

  render() {
    const { selectedGoods } = this.state;
    const productsFormatted = this.getFormattedProduct(selectedGoods);

    return (
      <div className="App">
        <div className="selected-goods">
          <h1 className="selected-goods__title">
            {`Selected goods: ${productsFormatted}`}
          </h1>
          {!selectedGoods.length || (
            <button
              type="button"
              onClick={this.clearBasket}
              className="selected-goods__button"
            >
              X
            </button>
          )}
        </div>
        <div className="product-list">
          {goodsWithId.map(({ name, id }) => (
            <div key={id} className="product-card">
              <span
                className={classNames(
                  'product-card__product',
                  { 'product-card__product--active': selectedGoods.includes(name) },
                )}
              >
                {name}
              </span>
              {selectedGoods.includes(name) ? (
                <button
                  type="button"
                  className="product-card__button"
                  onClick={() => this.removeGood(name)}
                >
                  x
                </button>
              ) : (
                <button
                  type="button"
                  className="product-card__button"
                  onClick={() => this.addGood(name)}
                >
                  add
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default App;
