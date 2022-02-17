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
  basket: string[],
};

class App extends React.Component<{}, State> {
  state: State = {
    basket: [],
  };

  addProduct = (product: string) => {
    this.setState(({ basket }) => ({
      basket: [...basket, product],
    }));
  };

  removeProduct = (product: string) => {
    this.setState(({ basket }) => ({
      basket: basket.filter(el => el !== product),
    }));
  };

  getTitle = (basket: string[]) => {
    switch (basket.length) {
      case 0: {
        return 'No goods selected';
      }

      case 1: {
        return `${basket[0]} is selected`;
      }

      default: {
        const newBasket = [...basket];
        const lastProduct = newBasket.pop();

        return `${newBasket.join(', ')} and ${lastProduct} are selected`;
      }
    }
  };

  render() {
    const { basket } = this.state;
    const addRemoveProduct = (product: string) => {
      if (basket.includes(product)) {
        return this.removeProduct(product);
      }

      return this.addProduct(product);
    };

    return (
      <div className="App">
        <div className="wrapper">
          <h1 className="title">
            {this.getTitle(basket)}
          </h1>
        </div>
        <button
          className="products__btn-reset"
          type="button"
          onClick={() => {
            this.setState(() => ({
              basket: [],
            }));
          }}
        >
          Reset
        </button>
        <ul className="products">
          {goodsFromServer.map((product) => (
            <li
              key={product}
              className={basket.includes(product)
                ? 'products__item products__item--active'
                : 'products__item'}
            >
              {product}
              {' '}
              <button
                className="products__btn"
                type="button"
                onClick={() => {
                  addRemoveProduct(product);
                }}
              >
                {basket.includes(product) ? 'Remove' : 'Add'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
