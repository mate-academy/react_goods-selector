import React from 'react';
import classNames from 'classnames';

import './App.scss';

function makeStringOfProducts(array: string[]): string {
  if (array.length === 0) {
    return 'No goods selected';
  }

  if (array.length === 1) {
    return `${array[0]} is selected`;
  }

  let string = array.slice(0, array.length - 1).join(', ');

  string += ` and  ${array[array.length - 1]}`;

  return `${string} are selected`;
}

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

type Props = {};

type State = {
  listOfProducts: string[];
  selectedProducts: string[];
};

class App extends React.Component<Props, State> {
  state: State = {
    listOfProducts: goodsFromServer,
    selectedProducts: ['Jam'],
  };

  addProduct = (product: string) => {
    this.setState((prevState) => ({
      selectedProducts: [...prevState.selectedProducts, product],
    }));
  };

  removeProduct = (product: string) => {
    this.setState(({ selectedProducts }) => ({
      selectedProducts: selectedProducts.filter(current => current !== product),
    }));
  };

  clearProducts = () => {
    this.setState({ selectedProducts: [] });
  };

  render() {
    const { listOfProducts, selectedProducts } = this.state;

    return (
      <div className="App">
        <div className="list-container box">
          <ul className="list">
            {listOfProducts.map((product) => (
              <li
                key={product}
                className={classNames({
                  list__item: true,
                  'list__item--selected': selectedProducts.includes(product),
                })}
              >
                <p className="product is-size-2">
                  {product}
                </p>

                {selectedProducts.includes(product)
                  ? (
                    <button
                      className="button is-danger is-medium"
                      type="button"
                      onClick={() => this.removeProduct(product)}
                    >
                      Remove
                    </button>
                  )
                  : (
                    <button
                      className="button is-primary is-medium"
                      type="button"
                      onClick={() => this.addProduct(product)}
                    >
                      Select
                    </button>
                  )}
              </li>
            ))}
          </ul>

          <h1 className="selected-products is-size-2">
            {makeStringOfProducts(selectedProducts)}
          </h1>

          {selectedProducts.length !== 0 && (
            <button
              className="button is-primary is-medium is-fullwidth"
              type="button"
              onClick={this.clearProducts}
            >
              Clear
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default App;
