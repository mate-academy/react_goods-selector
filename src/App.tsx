import React from 'react';
import './App.scss';

import goodsFromServer from './goods';

type State = {
  selectedGoods: string[];
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: ['Jam'],
  };

  clearProducts = () => {
    this.setState({ selectedGoods: [] });
  };

  selectProduct = (product: string) => {
    this.setState((state) => ({
      selectedGoods: [...state.selectedGoods, product],
    }));
  };

  removeProduct = (product: string) => {
    this.setState((state) => ({
      selectedGoods: state.selectedGoods.filter(item => item !== product),
    }));
  };

  changeButton = (isSelected: boolean, product: string) => {
    return isSelected
      ? this.removeProduct(product)
      : this.selectProduct(product);
  };

  render() {
    const { selectedGoods } = this.state;
    const showTitle = (product: string[]): string => {
      if (product.length === 0) {
        return ' No goods selected';
      }

      if (product.length === 1) {
        return ` ${product[0]} is selected`;
      }

      return `${product.slice(0, -1).join(', ')} and ${product.slice(-1)} are selected`;
    };

    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">
            {showTitle(selectedGoods)}
          </h1>
        </header>

        <ul className="App__goods">
          {goodsFromServer.map(product => {
            const isSelected = selectedGoods.includes(product);
            const buttonName = isSelected ? 'Remove' : 'Select';

            return (
              <li
                className="App__product"
                key={product}
              >
                {product}
                <button
                  className={
                    !isSelected
                      ? 'App__button'
                      : 'App__button App__button--active'
                  }
                  type="button"
                  onClick={() => this.changeButton(isSelected, product)}
                >
                  {buttonName}
                </button>
              </li>
            );
          })}
        </ul>

        {selectedGoods.length > 0 && (
          <button
            className="App__button App__button--clear"
            type="button"
            onClick={this.clearProducts}
          >
            Clear
          </button>
        )}
      </main>
    );
  }
}

export default App;
