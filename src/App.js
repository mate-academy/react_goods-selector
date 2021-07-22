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

  chooseElement = (product) => {
    this.setState(state => ({
      chosenElements: [...state.chosenElements, product],
    }));
  }

  removeElements = (product) => {
    this.setState(state => ({
      chosenElements: state.chosenElements.filter(item => item !== product),
    }));
  }

  clearElements = () => {
    this.setState({ chosenElements: [] });
  }

  getSelectedProductsLength = (products) => {
    switch (products.length) {
      case 0: return ' No products were selected';

      case 1: return ` ${products} is selected`;

      default: return ` ${products.slice(0, -1).join(', ')}
        and ${products.slice(-1)} are selected`;
    }
  }

  render() {
    const { chosenElements } = this.state;

    return (
      <>
        <div className="App">
          <h1>
            Selected goods:
            {this.getSelectedProductsLength(chosenElements)}
          </h1>
          <div className="goods">
            {goodsFromServer.map((product) => {
              const selected = chosenElements.includes(product);

              return (
                <div
                  className={
                    `goods__product ${selected ? 'active' : ''}`
                  }
                  key={product}
                >
                  {product}
                  <div className="buttons">

                    <button
                      className="button"
                      type="button"
                      onClick={() => {
                        if (chosenElements.includes(product)) {
                          this.removeElements(product);
                        } else {
                          this.chooseElement(product);
                        }
                      }}
                    >
                      {chosenElements.includes(product)
                        ? 'Remove' : 'Choose'}
                    </button>
                  </div>
                </div>
              );
            })}

            <button
              type="button"
              className={
                `clear ${chosenElements.length === 0 ? 'hidden' : ''}`
              }
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
