/* eslint-disable no-param-reassign */
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
    chosenElements: ['Jam'],
  }

  chooseElement = (ev, product) => {
    const element = ev.nativeEvent.path[2];

    if (this.state.chosenElements.includes(product)) {
      this.setState(state => ({
        chosenElements: state.chosenElements.filter(item => item !== product),
      }));

      element.style.backgroundColor = '';
    } else {
      this.setState(state => ({
        chosenElements: [...state.chosenElements, product],
      }));

      document.querySelector('.clear').hidden = false;
      element.style.backgroundColor = '#ff6347';
    }
  }

  clearElements = () => {
    const products = document.querySelectorAll('.goods__product');

    products.forEach((product) => {
      product.style.backgroundColor = 'transparent';
    });

    this.setState(state => ({
      chosenElements: [],
    }));
  }

  selectedProducts = (products) => {
    switch (products.length) {
      case 0:
        document.querySelector('.clear').hidden = true;

        return ' No products were selected';

      case 1: return ` ${products} is selected`;

      default: return ` ${products.slice(0, -1).join(', ')}
        and ${products.slice(-1)} are selected`;
    }
  }

  render() {
    return (
      <>
        <div className="App">
          <h1>
            Selected goods:
            {this.selectedProducts(this.state.chosenElements)}
          </h1>
          <div className="goods">
            {goodsFromServer.map(product => (
              <div
                className="goods__product"
                key={product}
                style={product === 'Jam'
                  ? { backgroundColor: '#ff6347' }
                  : { backgroundColor: 'transparent' }}
              >
                {product}
                <div className="buttons">

                  <button
                    className="button"
                    type="button"
                    onClick={(ev) => {
                      this.chooseElement(ev, product);
                    }}
                  >
                    {this.state.chosenElements.includes(product)
                      ? 'Remove' : 'Choose'}
                  </button>
                </div>
              </div>
            ))}

            <button
              type="button"
              className="clear"
              onClick={this.clearElements}
            >
              Clear All
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
