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

type State = {
  selectedProducts: string[],
};

class App extends React.Component<{}, State> {
  state = {
    selectedProducts: ['Jam'],
  };

  clear = () => {
    this.setState({ selectedProducts: [] });
  };

  addProduct = (product: string) => {
    this.setState((state) => ({ selectedProducts: [...state.selectedProducts, product] }));
  };

  removeProduct = (product: string) => {
    this.setState((state) => ({
      selectedProducts: state.selectedProducts.filter((productItem) => productItem !== product),
    }));
  };

  basket = () => {
    const { selectedProducts } = this.state;
    const leng = selectedProducts.length;

    if (selectedProducts.length === 0) {
      return 'No goods selected';
    }

    if (selectedProducts.length === 1) {
      return `${selectedProducts[0]} is selected`;
    }

    return `${selectedProducts.slice(0, -1).join(', ')} and ${selectedProducts[leng - 1]} are selected`;
  };

  isIncluded = (good: string) => {
    const { selectedProducts } = this.state;

    return selectedProducts.includes(good);
  };

  render() {
    return (
      <div className="app">
        <h1 className="app__title">
          React goods selector
        </h1>

        <div className="app__basket basket">
          <div className="basket__icon">
            <p className="basket__count">
              {this.state.selectedProducts.length}
            </p>
          </div>
          <div className="basket__container">
            {this.basket()}
            <button
              className="basket__clear"
              type="button"
              onClick={() => this.clear()}
            >
              Clear
            </button>
          </div>
        </div>

        <ul className="app__list list">
          {goodsFromServer.map((product) => (
            <li className="list__product" key={product}>
              {
                this.isIncluded(product)
                  ? (
                    <button
                      className="list__button list__button--remove"
                      type="button"
                      onClick={() => this.removeProduct(product)}
                    >
                      remove
                    </button>
                  )
                  : (
                    <button
                      className="list__button list__button--add"
                      type="button"
                      onClick={() => this.addProduct(product)}
                    >
                      select
                    </button>
                  )
              }
              {product}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
