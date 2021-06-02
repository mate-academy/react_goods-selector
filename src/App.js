import React, { Component } from 'react';
import classNames from 'classnames';
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
    selectedProducts: [],
    textProducts: 'Selected goods:',
  }

  addItems = (item) => {
    const { selectedProducts } = this.state;

    if (selectedProducts.includes(item)) {
      const copyItems = selectedProducts.filter(product => product !== item);

      return this.setState({ selectedProducts: [...copyItems] });
    }

    return this.setState(prevState => ({
      selectedProducts: [...prevState.selectedProducts, item],
    }));
  }

  clearItems = () => {
    this.setState({ selectedProducts: [] });
  }

  render() {
    const { selectedProducts, textProducts } = this.state;

    return (
      <div className="App">
        <h1>
          {`${textProducts} ${selectedProducts.join(', ')}`}
        </h1>
        <button
          type="button"
          className="btn btn-clear"
          onClick={() => {
            this.clearItems();
          }}
        >
          Clear
        </button>

        <ul className="list-items">
          {goodsFromServer.map(item => (
            <li className="item" key={item}>
              <span
                className={
                  classNames({ active: selectedProducts.includes(item) })
                }
              >
                {item}
              </span>
              <button
                type="button"
                className="btn btn-toggle"
                onClick={() => {
                  this.addItems(item);
                }}
              >
                {selectedProducts.includes(item) ? 'Remove' : 'Add'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
