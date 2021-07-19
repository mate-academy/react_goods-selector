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
    selectedGoods: ['Jam'],
  }

  addProduct = (good) => {
    this.setState(State => ({
      selectedGoods: [...State.selectedGoods, good],
    }));
  };

  removeProduct = (good) => {
    this.setState(State => ({
      selectedGoods: State.selectedGoods.filter(item => item !== good),
    }));
  };

  clearBasket = () => {
    this.setState({ selectedGoods: [] });
  };

  listOfSelectedProducts = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'No goods are selected';

      case 1:
        return `${selectedGoods.join('')} is selected`;

      case 2:
        return `${selectedGoods.join(' and ')} are selected`;

      default: {
        const fisrtPart = selectedGoods.slice(0, -2);
        const lastPart = selectedGoods.slice(-2);

        return (
          `${fisrtPart.join(`, `)}, ${lastPart.join(' and ')} are selected`
        );
      }
    }
  };

  render() {
    return (
      <div className="App">
        <h1>
          {this.listOfSelectedProducts()}
        </h1>

        <button
          type="button"
          className={this.state.selectedGoods.length > 0
            ? 'visibleButtonToClear'
            : 'unvisibleButtonToClear'
          }
          onClick={this.clearBasket}
        >
          Press to clear the basket
        </button>

        <ul>
          {goodsFromServer.map((item) => {
            const isProductSelected = this.state.selectedGoods.includes(item);

            return (
              <li
                key={item}
                className={isProductSelected
                  ? 'added'
                  : 'notAdded'
                }
              >
                <div className="item">
                  {item}
                </div>

                <button
                  type="button"
                  className="buttonToAdd"
                  onClick={() => this.addProduct(item)}
                >
                  Select
                </button>

                <button
                  type="button"
                  className="buttonToRemove"
                  onClick={() => this.removeProduct(item)}
                >
                  Remove
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
