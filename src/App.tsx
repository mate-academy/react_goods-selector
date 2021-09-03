/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
// import classNames from 'classnames';
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
  goods?: string;
  products: string[];
};

class App extends React.Component<{}, State> {
  state: State = {
    products: ['Jam'],
  };

  stringEdit = () => {
    const { products } = this.state;

    const copyProducts = [...products];

    copyProducts[products.length - 1] = `and ${products[products.length - 1]} are selected`;
    const result = copyProducts.join(', ');
    const indexOfcomma = result.lastIndexOf(',');

    const firstHalf = result.substr(0, indexOfcomma);
    const secondHalf = result.substr(indexOfcomma + 1, result.length);

    return firstHalf + secondHalf;
  };

  render() {
    const { products } = this.state;
    const performGoods = () => {
      if (products.length === 1) {
        return `${products} is selected`;
      }

      if (products.length === 2) {
        return `${[...products].join(' and ')} are selected`;
      }

      if (products.length > 2) {
        return this.stringEdit();
      }

      return 'No goods selected';
    };

    return (
      <div className="App">
        <h1>
          {performGoods()}
        </h1>

        <button
          type="button"
          className={`button ${(products.length) ? 'button__visible' : 'button__hide'}`}
          onClick={() => {
            if (products.length > 0) {
              this.setState({ products: [] });
            }
          }}
        >
          X CLEAR X
        </button>

        <ol>
          {goodsFromServer.map(product => {
            return (
              <li
                key={product}
                className={`goods ${products.includes(product) ? 'goods__unvisited' : 'goods__visited'}`}
              >
                {product}

                <button
                  type="button"
                  className="select"
                  onClick={() => {
                    if (!products.includes(product)) {
                      this.setState((prevState) => ({
                        products: [
                          ...prevState.products,
                          product,
                        ],
                      }));
                    } else {
                      const indexOf = products.indexOf(product);

                      products.splice(indexOf, 1);

                      this.setState((prevState) => ({
                        products: [
                          ...prevState.products,
                        ],
                      }));
                    }
                  }}
                >
                  Select
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default App;
