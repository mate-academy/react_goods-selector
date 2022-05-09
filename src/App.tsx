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
  selectedGood: string[],
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: ['Jam'],
  };

  addedProduct = (product: string) => {
    this.setState((state) => ({
      selectedGood: [...state.selectedGood, product],
    }));
  };

  removeGoods = (product: string) => {
    this.setState((state) => {
      const selectedProduct = state.selectedGood;
      const item = selectedProduct.indexOf(product);

      selectedProduct.splice(item, 1);

      return {
        selectedGood: selectedProduct,
      };
    });
  };

  getListOfGoods = () => {
    const { selectedGood } = this.state;
    let selectedGoodsResult = '';

    if (selectedGood.length === 0) {
      selectedGoodsResult = 'Selected goods: No goods selected';
    }

    if (selectedGood.length === 1) {
      selectedGoodsResult = `Selected goods: ${selectedGood[0]} is selected`;
    }

    if (selectedGood.length === 2) {
      selectedGoodsResult = `Selected goods: ${selectedGood.join(' and ')} are selected`;
    }

    if (selectedGood.length > 2) {
      selectedGoodsResult = `Selected goods: ${[selectedGood
        .slice(0, -1)
        .join(', '), selectedGood.slice(-1)]
        .join(' and ')} are selected`;
    }

    return selectedGoodsResult;
  };

  clearGoods = () => {
    this.setState({ selectedGood: [] });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="app">
        <h1 className="app__title">
          {this.getListOfGoods()}
        </h1>
        <ul className="app__list">
          {
            goodsFromServer.map((good) => {
              const isActive = this.state.selectedGood.includes(good);

              return (
                <li
                  key={good}
                  className="app__product"
                >
                  {good}
                  <button
                    type="button"
                    className={classNames('app__button', {
                      removeButton: selectedGood.includes(good),
                    })}
                    onClick={
                      isActive
                        ? () => this.removeGoods(good)
                        : () => this.addedProduct(good)
                    }
                  >
                    {
                      selectedGood.includes(good)
                        ? 'Remove'
                        : 'Select'
                    }
                  </button>
                </li>
              );
            })
          }
        </ul>

        {selectedGood && (
          <button
            type="button"
            className="app__button-clear"
            onClick={() => this.clearGoods()}
          >
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default App;
