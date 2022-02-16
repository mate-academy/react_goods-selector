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
// type Basket = string[];

type State = {
  basket: string[],
};

class App extends React.Component<{}, State> {
  state: State = {
    basket: [],
  };

  addRemoveProduct = (product: string) => {
    // eslint-disable-next-line no-console
    console.log(product);
    // const { basket } = this.state;
    const isIn = this.state.basket.findIndex(el => el === product);

    // eslint-disable-next-line no-console
    console.log(isIn);

    if (isIn === -1) {
      this.setState(({ basket }) => ({
        basket: [...basket, product],
      }));
    }

    if (isIn >= 0) {
      this.state.basket.splice(isIn, 1);

      this.setState(({ basket }) => ({
        basket: [...basket],
      }));
    }

    // eslint-disable-next-line no-console
    console.log(this.state);
  };

  getTitle = (basket: string[]) => {
    switch (basket.length) {
      case 0: {
        return 'No goods selected';
      }

      case 1: {
        return `${basket[0]} is selected`;
      }

      case 2: {
        return `${basket[0]} and ${basket[1]} are selected`;
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
              className={basket.includes(product) ? 'products__item products__item--active'
                : 'products__item'}
            >
              {product}
              {' '}
              <button
                className="products__btn"
                type="button"
                onClick={() => {
                  this.addRemoveProduct(product);
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
