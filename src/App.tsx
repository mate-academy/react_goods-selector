import React from 'react';
import './App.scss';

import goodsFromServer from './goods';

type State = {
  selectedGoods: string[],
};

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  addProduct = (product: string) => {
    this.setState((state) => ({
      selectedGoods: [...state.selectedGoods, product],
    }));
  };

  removeProduct = (product: string) => {
    const productIndex = this.state.selectedGoods
      .findIndex(good => product === good);

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

    return selectedGoods
      .slice(0, -1)
      .join(', ')
      .concat(` and ${selectedGoods[selectedGoods.length - 1]} are selected.`);
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
        <h1>{this.renderSelectedProducts()}</h1>
        {goodsFromServer.length > 0 && (
          <ul>
            {goodsFromServer.map(product => (
              <li key={product}>
                <div className={`App__product-item ${this.isProductSelected(product) ? 'active' : ''}`}>
                  {product}
                </div>
                {this.isProductSelected(product) ? (
                  <button
                    type="button"
                    onClick={() => {
                      this.removeProduct(product);
                    }}
                  >
                    Remove
                  </button>
                ) : (
                  <button
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
            onClick={this.clear}
            type="button"
            className="App__clear-button"
          >
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default App;
