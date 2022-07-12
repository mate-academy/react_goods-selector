/* eslint-disable no-nested-ternary */
import React from 'react';
import './App.scss';

const goodsFromServer: string[] = [
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

type State = {
  selectedProducts: string[];
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedProducts: ['Jam'],
  };

  modifySelectedProducts = (good: string) => {
    const { selectedProducts } = this.state;

    this.setState({
      selectedProducts: (
        selectedProducts.includes(good)
          ? selectedProducts.filter(item => item !== good)
          : [...selectedProducts, good]
      ),
    });
  };

  clearAll = () => {
    this.setState({ selectedProducts: [] });
  };

  render() {
    const { selectedProducts } = this.state;

    return (
      <div className="App">
        <h1
          className="basket"
        >
          {selectedProducts.length === 0 ? 'No goods selected'
            : (selectedProducts.length === 1 ? `${selectedProducts} is selected`
              : `${selectedProducts.join(', ')} are selected`)}

          <button
            type="button"
            className={
              `basket__button
              button
              ${selectedProducts.length === 0
        ? 'basket__button--empty'
        : 'basket__button--not-empty'}`
            }
            onClick={() => this.clearAll()}
          >
            Clear
          </button>
        </h1>

        <div className="goods">
          {goodsFromServer.map(good => (
            <button
              type="button"
              className={
                `good
                ${!selectedProducts.includes(good)
              ? 'good--not-selected'
              : 'good--selected'}`
              }
            >
              {good}
              <button
                type="button"
                className={
                  `good__button
                  button
                  ${!selectedProducts.includes(good)
              ? 'good__button--not-selected'
              : 'good__button--selected'}`
                }
                onClick={() => this.modifySelectedProducts(good)}
              >
                {selectedProducts.includes(good) ? 'Remove' : 'Select'}
              </button>
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
