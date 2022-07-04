import React from 'react';

import './App.scss';

function makeStringOfProducts(array: string[]): string {
  if (array.length === 0) {
    return 'No goods selected';
  }

  if (array.length === 1) {
    return `${array[0]} is selected`;
  }

  let string = '';

  for (let i = 0; i < array.length - 1; i += 1) {
    if (i > 0) {
      string += ', ';
    }

    string += array[i];
  }

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
    this.setState((prevState) => {
      const { selectedProducts } = prevState;
      const index = selectedProducts.indexOf(product);
      const newProducts = selectedProducts
        .slice(0, index)
        .concat(selectedProducts.slice(index + 1));

      return ({
        selectedProducts: [...newProducts],
      });
    });
  };

  clearProducts = () => {
    this.setState({ selectedProducts: [] });
  };

  render() {
    const { listOfProducts, selectedProducts } = this.state;

    return (
      <div className="App">
        <div className="list container box">
          <ul>
            {listOfProducts.map((product) => (
              <li
                key={product}
                className={`list__item ${selectedProducts.includes(product) ? 'list__item--selected' : ''}`}
              >
                <p className="product is-size-2">
                  {product}
                </p>

                {selectedProducts.includes(product)
                  ? (
                    <button
                      className="button is-primary is-medium"
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

          <h1 className="is-size-2">
            {makeStringOfProducts(selectedProducts)}
          </h1>

          {selectedProducts.length !== 0 && (
            <button
              className="button is-primary is-medium is-fullwidth"
              type="button"
              onClick={() => this.clearProducts()}
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
