import React from 'react';
import './App.scss';

const goodsFromServer = [
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

export class App extends React.Component {
  state = {
    nameOfProduct: 'Selected good : ',
    arrayOfProducts: [],
  }

  constructor() {
    super();
    this.clearTheSelection = this.clearTheSelection.bind(this);
    this.clickHandlerWithCtrl = this.clickHandlerWithCtrl.bind(this);
  }

  clickHandlerWithoutCtrl = (product) => {
    this.setState(() => ({
      nameOfProduct: `Selected good : ${product}`,
    }));
  }

  clickHandlerWithCtrl(product) {
    this.setState((prevState) => {
      let manyNamesOfProducts;

      if (!prevState.arrayOfProducts.includes(product)) {
        prevState.arrayOfProducts.push(product);

        if (prevState.arrayOfProducts.length === 1) {
          manyNamesOfProducts
           = `Selected good : ${prevState.arrayOfProducts[0]}`;
        } else {
          manyNamesOfProducts
         = `Selected goods : ${prevState.arrayOfProducts[0]}`;
          for (let i = 1; i < prevState.arrayOfProducts.length; i += 1) {
            manyNamesOfProducts += `, ${prevState.arrayOfProducts[i]}`;
          }
        }
      } else {
        return '';
      }

      return {
        nameOfProduct: manyNamesOfProducts,
      };
    });
  }

  clearTheSelection() {
    this.setState(state => ({
      nameOfProduct: 'Selected good : ',
      arrayOfProducts: [],
    }));
  }

  render() {
    const { nameOfProduct } = this.state;

    return (
      <div className="App">
        <h1>
          {nameOfProduct}
        </h1>
        <p>
          <button type="button" onClick={this.clearTheSelection}>
            Click here to clear the selection!
          </button>
        </p>
        <ul>
          {goodsFromServer.map(product => (
            <li
              className={nameOfProduct.includes(product) ? 'selected' : ''}
              key={product}
            >
              <button
                type="button"
                value={product}
                onClick={(event) => {
                  if (event.ctrlKey) {
                    this.clickHandlerWithCtrl(product);
                  } else {
                    this.clickHandlerWithoutCtrl(product);
                  }
                }}
              >
                {product}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
