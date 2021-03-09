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

export class App extends React.Component {
  state = {
    buttonVisible: true,
    basketOfProducts: null,
  }

  addProduct = (product) => {
    const basket = this.state.basketOfProducts;

    if (basket !== null) {
      this.setState({ basketOfProducts: [...basket, product] });
    } else {
      this.setState({ basketOfProducts: [product] });
    }
  }

  clearButtons = () => {
    const basket = this.state.basketOfProducts;

    if (basket !== null && basket.length === 1) {
      return 'Clear';
    }

    return 'Clear All';
  }

  getGoodsTitle = () => {
    const basket = this.state.basketOfProducts;

    if (basket && basket.length === 1) {
      return ` ${basket.join(', ')} is selected!`;
    }

    if (basket && basket.length > 1) {
      return ` ${basket.join(', ')} are selected!`;
    }

    return ' No goods selected';
  }

  render() {
    const { basketOfProducts, buttonVisible } = this.state;
    const clearButton = this.clearButtons();
    const titleMessage = this.getGoodsTitle();

    return (
      <div className="App">
        <h1>
          Selected good:
          {titleMessage}
          {basketOfProducts === null
            ? ''
            : (
              <button
                type="button"
                onClick={() => {
                  this.setState({ basketOfProducts: null });
                }}
              >
                {clearButton}
              </button>
            )}
        </h1>
        <ul>
          { goodsFromServer.map(good => (
            <li key={good}>
              {good}
              <button
                type="button"
                className={
                  (basketOfProducts && basketOfProducts.includes(good))
                    ? 'pressed'
                    : 'notPressed'
                }
                onClick={() => {
                  this.addProduct(good);
                }}
                disabled={basketOfProducts
                  && basketOfProducts.includes(good)
                  ? buttonVisible
                  : false}
              >
                {basketOfProducts
                  && basketOfProducts.includes(good)
                  ? 'Selected'
                  : 'Select'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
