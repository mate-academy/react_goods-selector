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
        product !== selectedProduct))
      : [...products, selectedProduct];

    this.setState({
      products: [...updatedProducts],
    });
  }

  handleDeleteSelected = () => {
    const { products } = this.state;

    if (products.length > 0) {
      this.setState({
        products: [],
      });
    }
  }

  handleSelected = (event) => {
    const { products } = this.state;

    const { target } = event;

    if (event.metaKey || event.ctrlKey) {
      this.handleMultipleSelection(target.textContent);
    } else if (products.includes(target.textContent)) {
      this.setState({
        products: [],
      });
    } else {
      this.setState({
        products: [target.textContent],
      });
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
              {products.map(product => `${product}\n`)}
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
                  className={
                    products.includes(good)
                      ? 'content selected' : 'content'
                  }
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
