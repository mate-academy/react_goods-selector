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
  goods: string[],
};

class App extends React.Component<{}, State> {
  state = {
    goods: ['Jam'],
  };

  checkProductList = (index: number) => {
    const currentProduct = goodsFromServer[index];
    const { goods } = this.state;

    if (this.state.goods.includes(currentProduct)) {
      goods.splice(goods.indexOf(currentProduct), 1);
      this.setState({ goods: [...goods] });
    } else {
      this.setState({
        goods: [...goods,
          currentProduct],
      });
    }
  };

  countProducts() {
    const { goods } = this.state;

    if (!goods.length) {
      return 'No selected goods';
    }

    if (goods.length === 1) {
      return `${goods[0]} is selected`;
    }

    return `${goods.slice(0, -1).join(', ')} and ${goods.slice(-1)} are selected`;
  }

  clear() {
    this.setState({ goods: [] });
  }

  render(): React.ReactNode {
    const { goods } = this.state;

    return (
      <div className="App">
        <div className="goods">
          <h1 className="goods__title">{this.countProducts()}</h1>

          {goodsFromServer.map((good, index) => (
            <li className="goods__item" key={good}>
              {good}
              {goods.includes(good)
                ? (
                  <button
                    type="button"
                    className="goods__button goods__button--remove"
                    onClick={() => this.checkProductList(index)}
                  >
                    Remove
                  </button>
                )
                : (
                  <button
                    type="button"
                    className="goods__button"
                    onClick={() => this.checkProductList(index)}
                  >
                    Select
                  </button>
                )}
            </li>
          ))}

          {goods.length > 0
            ? (
              <button
                type="button"
                className="goods__button goods__button--clear"
                onClick={() => this.clear()}
              >
                Clear
              </button>
            )
            : ''}
        </div>
      </div>
    );
  }
}

export default App;
