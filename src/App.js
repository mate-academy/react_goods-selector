import React from 'react';
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

const goodsWithID = goodsFromServer.map((product, index) => ({
  product,
  id: index + 1,
}));

export class App extends React.Component {
  state = {
    selectedProducts: [],
  }

  addGoods = (productName) => {
    const { selectedProducts } = this.state;

    if (!selectedProducts.includes(productName)) {
      this.setState({
        selectedProducts: [...selectedProducts, productName],
      });
    }
  };

  removeGoods = (productName) => {
    const { selectedProducts } = this.state;

    this.setState({
      selectedProducts: [...selectedProducts.filter(
        product => product !== productName,
      )],
    });
  }

  resetGoods = () => {
    this.setState({
      selectedProducts: [],
    });
  }

  render() {
    const { selectedProducts } = this.state;

    return (
      <div className="App">
        {selectedProducts.length > 0
          && (
          <button
            type="button"
            onClick={this.resetGoods}
          >
            X
          </button>
          )
        }
        <h1>
          {selectedProducts.length > 0
            ? `${selectedProducts.join(', ')} is selected`
            : 'No goods selected'
          }
        </h1>
        <ul>
          {goodsWithID.map(item => (
            <li key={item.id}>
              <span
                className={
                  classNames({
                    selected: selectedProducts.includes(item.product),
                  })}
              >
                {item.product}
              </span>
              { !selectedProducts.includes(item.product)
              && (
              <button
                type="button"
                onClick={() => {
                  this.addGoods(item.product);
                }}
              >
                Add
              </button>
              )
              }
              { !selectedProducts.includes(item.product)
              || (
              <button
                type="button"
                onClick={() => {
                  this.removeGoods(item.product);
                }}
              >
                Remove
              </button>
              )
              }
            </li>
          ))}
        </ul>
        {goodsFromServer.length}
      </div>
    );
  }
}
