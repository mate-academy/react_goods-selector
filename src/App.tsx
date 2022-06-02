import React from 'react';
import classNames from 'classnames';
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
  selectedGoods: string[];
};

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  selectProduct = (product: string) => {
    this.setState((state) => {
      return {
        selectedGoods: [...state.selectedGoods, product],
      };
    });
  };

  deleteProduct = (product: string) => {
    this.setState((state) => {
      return {
        selectedGoods: state.selectedGoods.filter(item => item !== product),
      };
    });
  };

  goodsToString = () => {
    const { selectedGoods } = this.state;

    if (selectedGoods.length === 0) {
      return 'No goods selected';
    }

    if (selectedGoods.length === 1) {
      return `${selectedGoods[0]} is selected`;
    }

    if (selectedGoods.length === 2) {
      return `${selectedGoods[0]} and ${selectedGoods[1]} are selected`;
    }

    return `${selectedGoods.slice(0, selectedGoods.length - 1).join(', ')}
        and ${selectedGoods[selectedGoods.length - 1]} are selected`;
  };

  clearProductList = () => {
    this.setState({
      selectedGoods: [],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>{this.goodsToString()}</h1>
        {!!this.state.selectedGoods.length && (
          <button
            type="button"
            onClick={this.clearProductList}
          >
            Clear
          </button>
        )}
        <ul className="products">
          {goodsFromServer.map(product => {
            const selectedProduct = this.state.selectedGoods.includes(product);

            return (
              <li
                key={product}
                className={
                  classNames(
                    'product__item', { active: selectedProduct },
                  )
                }
              >
                <div className="product__name">{product}</div>
                <button
                  type="button"
                  onClick={() => {
                    if (selectedProduct) {
                      this.deleteProduct(product);
                    } else {
                      this.selectProduct(product);
                    }
                  }}
                >
                  {selectedProduct ? 'Remove' : 'Select'}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
