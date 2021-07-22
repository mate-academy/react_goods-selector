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

    this.setState(state => ({
      chosenElements: [...state.chosenElements, product],
    }));

    document.querySelector('.clear').classList.remove('hidden');
    element.classList.add('active');
  }

  removeElements = (ev, product) => {
    const element = ev.nativeEvent.path[2];

    this.setState(state => ({
      chosenElements: state.chosenElements.filter(item => item !== product),
    }));

    element.classList.remove('active');
  }

  clearElements = () => {
    this.setState({ chosenElements: [] });
  }

  getSelectedProductsLength = (products) => {
    switch (products.length) {
      case 0:
        document.querySelector('.clear').classList.add('hidden');

        return ' No products were selected';

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
                      onClick={(ev) => {
                        if (chosenElements.includes(product)) {
                          this.removeElements(ev, product);
                        } else {
                          this.chooseElement(ev, product);
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
