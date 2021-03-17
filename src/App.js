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

  render() {
    const { selectedProducts } = this.state;

    return (
      <div className="App">
        <h1>
          {selectedProducts.length > 0
            ? `${selectedProducts.join(', ')} is selected`
            : 'No goods selected'
          }
        </h1>
        <ul>
          {goodsWithID.map(element => (
            <li key={element.id}>
              <span
                className={
                  classNames({
                    selected: selectedProducts.includes(element.product),
                  })}
              >
                {element.product}
              </span>
              { !selectedProducts.includes(element.product)
              && (
              <button
                type="button"
                onClick={() => {
                  this.addGoods(element.product);
                }}
              >
                Select
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
