import React, { Component } from 'react';
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

class App extends Component {
  state = {
    selectedGoods: ['Jam'],
  }

  selectedProduct = (products) => {
    switch (products.length) {
      case 1:
        return products[0];

      case 0:
        return 'No goods selected';

      default:
        return `${products.slice(0, -1)} and`
          + ` ${products[products.length - 1]} are selected`;
    }
  }

  addProduct = (product) => {
    this.setState(state => ({
      selectedGoods: [...state.selectedGoods, product],
    }));
  }

  removeProduct = (product) => {
    this.setState(state => ({
      selectedGoods: state.selectedGoods.filter(item => item !== product),
    }));
  }

  removeAllGoods = () => {
    this.setState({ selectedGoods: [] });
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="product">
        <h1 className="product__title">
          {`Selected good: ${this.selectedProduct(selectedGoods)}`}
        </h1>
        <button
          type="button"
          className="product__button"
          onClick={this.removeAllGoods}
        >
          X
        </button>
        <ul className="product__list">
          {goodsFromServer.map(product => (
            <li
              key={product}
              className="product__item"
            >
              {product}
              <button
                type="button"
                className="add"
                onClick={() => this.addProduct(product)}
              >
                Add
              </button>
              <button
                type="button"
                className="remove"
                onClick={() => this.removeProduct(product)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
