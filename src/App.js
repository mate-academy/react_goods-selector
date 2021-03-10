import React from 'react';
import './App.scss';
import classNames from 'classnames';

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
    selectedProduct: ['Jam'],
  }

  addProductToList = (product) => {
    const { selectedProduct } = this.state;

    if (selectedProduct.includes(product)) {
      return this.setState({
        selectedProduct: selectedProduct.filter(goods => goods !== product),
      });
    }

    return this.setState({ selectedProduct: [...selectedProduct, product] });
  };

  clearProductList = () => {
    this.setState({
      selectedProduct: [],
    });
  }

  render() {
    const { selectedProduct: selectedGood } = this.state;

    return (
      <div className="App">
        <div className="header">
          {selectedGood.length > 0 && (
            <button
              type="button"
              onClick={this.clearProductList}
            >
              X
            </button>
          )}
          <h1>
            {selectedGood.length > 0 ? 'Selected Goods: ' : 'No goods selected'}
            {<span>{selectedGood.join(', ')}</span>}
          </h1>
        </div>
        <ul>
          {goodsFromServer.map(product => (
            <>
              <li
                key={product}
                className={classNames('products', {
                  active: selectedGood.includes(product),
                })}
              >
                {`${product}`}
                <button
                  type="button"
                  onClick={() => this.addProductToList(product)}
                >
                  {selectedGood.includes(product) ? 'remove' : 'select'}
                </button>
              </li>
            </>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
