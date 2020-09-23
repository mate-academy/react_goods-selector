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
    nameOfProduct: '',
    arrayOfProducts: [],
  }

  handleSelection = (product) => {
    this.setState(() => ({
      nameOfProduct: product,
      arrayOfProducts: [],
    }));
  }

  handleMultipleSelection = (product) => {
    this.setState((prevState) => {
      let newArrayOfProducts = prevState.arrayOfProducts
        .filter(good => good !== product);

      newArrayOfProducts = [...newArrayOfProducts, product];

      let manyNamesOfProducts = `${newArrayOfProducts[0]}`;

      for (let i = 1; i < newArrayOfProducts.length; i += 1) {
        manyNamesOfProducts += `, ${newArrayOfProducts[i]}`;
      }

      return {
        nameOfProduct: manyNamesOfProducts,
        arrayOfProducts: newArrayOfProducts,
      };
    });
  }

  clearTheSelection = () => {
    this.setState(() => ({
      nameOfProduct: '',
      arrayOfProducts: [],
    }));
  }

  render() {
    const { nameOfProduct } = this.state;

    return (
      <div className="App">
        <h1>
          Selected goods :
          {' '}
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
                    this.handleMultipleSelection(product);
                  } else {
                    this.handleSelection(product);
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
