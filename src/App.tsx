import React from 'react';
import './App.scss';

import goodsFromServer from './goods';

type State = {
  selectedGoods: string[],
};

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Carrot'],
  };

  addProduct = (product: string) => {
    this.setState((state) => ({
      selectedGoods: [...state.selectedGoods, product],
    }));
  };

  removeProduct = (product: string) => {
    const productIndex = this.state.selectedGoods
      .findIndex(good => good === product);

    this.setState((state) => ({
      selectedGoods:
        [...state.selectedGoods.slice(0, productIndex),
          ...state.selectedGoods.slice(productIndex + 1)],
    }));
  };

  renderSelectedProducts = () => {
    const { selectedGoods } = this.state;

    if (!selectedGoods.length) {
      return 'No goods selected.';
    }

    if (selectedGoods.length === 1) {
      return selectedGoods.concat(' is selected.');
    }

    return selectedGoods.slice(0, -1)
      .join(', ').concat(` and ${selectedGoods[selectedGoods.length - 1]} are selected.`);
  };

  isProductSelected = (product: string) => {
    return this.state.selectedGoods.find(good => good === product);
  };

  clear = () => {
    this.setState({ selectedGoods: [] });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          {this.renderSelectedProducts()}
        </h1>
        {goodsFromServer.length > 0 && (
          <ul className="App__list product">
            {goodsFromServer.map(product => (
              <li key={product} className="product__element">
                <div className={`product__item ${
                  this.isProductSelected(product)
                    ? 'active'
                    : ''
                }`}
                >
                  {product}
                </div>
                {this.isProductSelected(product) ? (
                  <button
                    className="button button-remove"
                    type="button"
                    onClick={() => {
                      this.removeProduct(product);
                    }}
                  >
                    Remove
                  </button>
                ) : (
                  <button
                    className="button button-add"
                    type="button"
                    onClick={() => this.addProduct(product)}
                  >
                    Add
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}

        {selectedGoods.length > 0 && (
          <button
            className="button button-clear"
            type="button"
            onClick={this.clear}
          >
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default App;
