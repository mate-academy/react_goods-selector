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
  selectedGoods: string[];
  count: number,
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: [],
    count: 0,
  };

  addProduct = (product: string) => {
    this.state.count += 1;
    this.setState(({ selectedGoods }) => ({
      selectedGoods: [...selectedGoods, product],
    }));
  };

  removeProduct = (product: string) => {
    this.state.count -= 1;
    this.setState(({ selectedGoods }) => ({
      selectedGoods: [...selectedGoods.filter(item => item !== product)],
    }));
  };

  resetProduts = () => {
    this.setState({
      selectedGoods: [],
      count: 0,
    });
  };

  showSelectedProducts = (selectedGood: string[]) => {
    let message = '';

    if (selectedGood.length < 1) {
      message = ' No goods selected...';
    }

    if (selectedGood.length >= 1) {
      message = ` ${this.state.count} selected`;
    }

    return message;
  };

  makeChoice = (product: string) => {
    const { selectedGoods } = this.state;

    if (selectedGoods.some(item => item === product)) {
      this.removeProduct(product);
    } else {
      this.addProduct(product);
    }
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <div className="App__header">
          <h1 className="App__title">
            Goods
          </h1>
        </div>
        <section className="App__list">
          <div className="App__items">
            {goodsFromServer.map(product => (
              <li
                key={product}
                className={`App__item ${selectedGoods.some(item => item === product)
                  ? 'App__item-select'
                  : 'App__item'
                }`}
              >
                <h2 className="App__description">{product}</h2>
                <button
                  type="button"
                  className="App__button"
                  onClick={() => {
                    this.makeChoice(product);
                  }}
                >
                  {selectedGoods.some(item => item === product)
                    ? 'Remove'
                    : 'Add'}
                </button>
              </li>
            ))}
          </div>
          <div className="App__column">
            <h2 className="App__column-title">
              Selected Goods:
              {this.showSelectedProducts(selectedGoods)}
            </h2>
            <ul className="App__column-list">
              {selectedGoods.map(item => (
                <li className="App__column-item">{item}</li>
              ))}
            </ul>

            <button
              type="button"
              className={selectedGoods.length < 1
                ? 'App__button--reset-off'
                : 'App__button--reset'}
              onClick={() => {
                this.resetProduts();
              }}
            >
              Reset
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
