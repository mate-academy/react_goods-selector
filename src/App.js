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

    if (!this.state.chosenElements.includes(product)) {
      this.setState(state => ({
        chosenElements: [...state.chosenElements, product],
      }));
    }

    element.style.backgroundColor = '#ff6347';
  }

  removeElement = (ev, product) => {
    const elemet = ev.nativeEvent.path[2];

    this.setState(state => ({
      chosenElements: state.chosenElements.filter(item => item !== product),
    }));

    elemet.style.backgroundColor = '';
  }

  selectedProducts = (products) => {
    switch (products.length) {
      case 0: return ' No products were selected';
      case 1: return ` ${products} is selected`;
      default: return ` ${products.join(', ')} are selected`;
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
                    Choose
                  </button>
                  <button
                    className="button"
                    type="button"
                    onClick={(ev) => {
                      this.removeElement(ev, product);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default App;
