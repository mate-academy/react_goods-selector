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
    const { selectedProducts } = this.state;

    if (selectedProducts.length === 1) {
      return `${selectedProducts} is selected`;
    }

    if (selectedProducts.length > 1) {
      return `${selectedProducts.slice(0, -1).join(', ')},
      ${selectedProducts.slice(-1).join(' and ')} are selected.`;
    }

    return 'No Products selected';
  }

  handleProductChange(product) {
    if (!this.state.selectedProducts.includes(product)) {
      this.setState(
        state => ({ selectedProducts: [...state.selectedProducts, product] }),
      );
    } else {
      this.setState(state => (
        {
          selectedProducts:
            state.selectedProducts.filter(prod => prod !== product),
        }
      ));
    }
  }

  clearProduct() {
    this.setState({ selectedProducts: [] });
  }

  renderTitle() {
    return (
      <h1 className="App__title">
        {this.getTitle()}
      </h1>
    );
  }

  renderBtn() {
    return (
      <button
        className={`App__btn-close
            ${this.state.selectedProducts.length ? '' : 'invisible'}
        `}
        type="button"
        onClick={
          () => this.clearProduct()
        }
      >
        Remove selected products
      </button>
    );
  }

  renderProduct(product) {
    const included = this.state.selectedProducts.includes(product);

    return (
      <li
        className={`List__product ${included ? 'active' : ''}`}
        key={product}
      >
        {product}
        :
        <button
          className="List__btn"
          type="button"
          onClick={() => this.handleProductChange(product)}
        >
          {included ? 'Delete Product' : 'Add product'}
        </button>
      </li>
    );
  }

  render() {
    return (
      <div className="App">

        {this.renderTitle()}

        {this.renderBtn()}

        <ul className="List">
          {productsFromServer.map(product => this.renderProduct(product))}
        </ul>

      </div>
    );
  }
}

export default App;
