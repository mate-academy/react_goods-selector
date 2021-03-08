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

    if (basket !== null && basket.length >= 1) {
      this.setState({ basketOfProducts: [...basket, product] });
    } else {
      this.setState({ basketOfProducts: [product] });
    }
  }

  render() {
    const { basketOfProducts, buttonVisible } = this.state;
    let titleMessage = '';
    let clearButton = '';

    if (basketOfProducts !== null && basketOfProducts.length === 1) {
      titleMessage = `${basketOfProducts.join(', ')} is selected!`;
      clearButton = 'Clear';
    } else if (basketOfProducts !== null && basketOfProducts.length > 1) {
      titleMessage = `${basketOfProducts.join(', ')} are selected!`;
      clearButton = 'Clear All';
    } else {
      titleMessage = 'No goods selected';
    }

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
                  (basketOfProducts !== null && basketOfProducts.includes(good))
                    ? 'pressed'
                    : 'notPressed'
                }
                onClick={() => {
                  this.addProduct(good);
                }}
                disabled={basketOfProducts !== null
                  && basketOfProducts.includes(good)
                  ? buttonVisible
                  : false}
              >
                {basketOfProducts !== null
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
