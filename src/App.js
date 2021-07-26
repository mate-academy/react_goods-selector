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

  getTitle = () => {
    if (this.state.selectedProducts.length === 1) {
      return `${this.state.selectedProducts} is selected`;
    }

    return `${this.state.selectedProducts.slice(0, -1).join(', ')},
      ${this.state.selectedProducts.slice(-1).join(' and ')} are selected.`;
  }

  addProduct(product) {
    this.setState(state => (state.selectedProducts.push(product)));
  }

  deleteProduct(product) {
    this.setState(state => (
      {
        selectedProducts: state.selectedProducts.filter(
          value => value !== product,
        ),
      }
    ));
  }

  clearProduct() {
    this.setState({ selectedProducts: [] });
  }

  render() {
    const { selectedProducts } = this.state;

    return (
      <div className="App">

        {selectedProducts.length > 0 ? (
          <h1 className="App__title">
            {this.getTitle()}
          </h1>
        ) : (
          <h1 className="App__title">
            No Products selected
          </h1>

        )}

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
                  className="List__product active"
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
