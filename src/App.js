/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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

class App extends React.Component {
  state = {
    products: [],
  }

  handleMultipleSelection = (selectedProduct) => {
    const { products } = this.state;
    const updatedProducts = products.includes(selectedProduct)
      ? products.filter(product => (
        product === selectedProduct
          ? product.classList.toggle('selected', false)
          : product))
      : [...products, selectedProduct];

    this.setState({
      products: [...updatedProducts],
    });
  }

  handleDeleteSelected = () => {
    const { products } = this.state;

    if (products.length > 0) {
      products.some(good => good.classList.toggle('selected', false));
      this.setState({
        products: [],
      });
    }
  }

  handleSelected = (event) => {
    const { products } = this.state;

    const { target } = event;

    if (event.metaKey) {
      target.classList.add('selected');
      this.handleMultipleSelection(target);
    } else {
      if (products.length > 0) {
        products.some(product => product.classList.toggle('selected', false));
      }

      if (products.includes(target)) {
        this.setState({
          products: [],
        });
      } else {
        target.classList.add('selected');
        this.setState({
          products: [target],
        });
      }
    }
  }

  render() {
    const { products } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good: -
        </h1>
        <div className="container">
          <div className="header">
            <p>
              {products.map(product => `${product.textContent}\n`)}
              <br />
            </p>
          </div>
          <button
            type="button"
            className="delete"
            onClick={this.handleDeleteSelected}
          >
            Delete
          </button>
          <div>
            <ul>
              {goodsFromServer.map(good => (
                <li
                  key={good}
                  className="content"
                  onClick={this.handleSelected}
                >
                  {good}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
