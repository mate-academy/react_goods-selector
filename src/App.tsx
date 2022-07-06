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

function createTitle(products: string[]): string {
  if (products.length === 0) {
    return ' No goods selected';
  }

  if (products.length === 1) {
    return ` ${products[0]} is selected`;
  }

  return `${products.slice(0, -1).join(', ')} and ${products.slice(-1)} are selected`;
}

class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: ['Jam'],
  };

  selectProduct = (product: string) => {
    this.setState((state) => ({
      selectedGoods: [...state.selectedGoods, product],
    }));
  };

  removeProduct = (product: string) => {
    this.setState((state) => ({
      selectedGoods: state.selectedGoods.filter(item => item !== product),
    }));
  };

  clearProducts = () => {
    this.setState({ selectedGoods: [] });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App container">
        <h1 className="title">
          Selected good:

          {createTitle(selectedGoods)}
        </h1>
        <ul className="goods__list columns is-multiline">
          {goodsFromServer.map(product => (
            <li
              className={classNames(
                'column',
                {
                  active: selectedGoods.includes(product),
                },
              )}
              key={product}
            >
              <h2 className="goods__titile">
                {product}
              </h2>
              {
                !selectedGoods.includes(product)
                  ? (
                    <button
                      className="goods__btn-add button is-success is-small"
                      type="button"
                      onClick={() => {
                        this.selectProduct(product);
                      }}
                    >
                      Select
                    </button>
                  )
                  : (
                    <button
                      className="goods__btn-remove button is-danger is-small"
                      type="button"
                      onClick={() => {
                        this.removeProduct(product);
                      }}
                    >
                      Remove
                    </button>
                  )
              }
            </li>
          ))}
        </ul>
        <button
          className="goods__btn-remove button is-danger"
          type="button"
          onClick={this.clearProducts}
        >
          Clear
        </button>
      </div>
    );
  }
}

export default App;
