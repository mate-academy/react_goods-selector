import React from 'react';
import './App.scss';

const productsFromServer = [
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
    selectedProducts: ['Jam'],
  }

  addProduct(product) {
    this.setState(state => (state.selectedProducts.push(product)));
  }

  deleteProduct(product) {
    this.setState(state => (
      { selectedProducts: state.selectedProducts.filter(
        value => value !== product,
      ) }
    ));
  }

  clearProduct() {
    this.setState({ selectedProducts: [] });
  }

  render() {
    const { selectedProducts } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          {!this.state.selectedProducts.length ? (
            'No Products selected'
          ) : (
            `Selected products: ${selectedProducts}`
          )}
        </h1>
        <button
          className="App__btn-close"
          type="button"
          onClick={
            () => this.clearProduct()
          }
        >
          Remove selected products
        </button>
        <ul className="List">
          {productsFromServer.map(
            product => (!this.state.selectedProducts.includes(product)
              ? (
                <li
                  className="List__product"
                  key={product}
                >
                  {product}
                  :
                  <button
                    className="List__btn"
                    type="button"
                    onClick={
                      () => this.addProduct(product)
                    }
                  >
                    Add product
                  </button>
                </li>
              ) : (
                <li
                  className="List__product"
                  key={product}
                >
                  {product}
                  :
                  <button
                    className="List__btn"
                    type="button"
                    onClick={
                      () => this.deleteProduct(product)
                    }
                  >
                    Delete Product
                  </button>
                </li>
              )
            ),
          )}
        </ul>
      </div>
    );
  }
}

export default App;
