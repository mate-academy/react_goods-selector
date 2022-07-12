import { Component } from 'react';
import './App.scss';
import 'bulma/css/bulma.min.css';

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

function titleOfGoods(goods: string[]): string {
  if (goods.length === 0) {
    return 'No goods selected';
  }

  if (goods.length === 1) {
    return `${goods[0]} is selected`;
  }

  return `${goods.slice(0, -1).join(',')} and ${goods[goods.length - 1]} are selected`;
}

type State = {
  goods: string[];
  selectedGoods: string[];
};

class App extends Component<{}, State> {
  state = {
    goods: goodsFromServer,
    selectedGoods: ['Jam'],
  };

  addGoods = (product: string) => {
    this.setState((prevState) => ({
      selectedGoods: [...prevState.selectedGoods, product],
    }));
  };

  removeGoods = (product: string) => {
    this.setState(({ selectedGoods }) => ({
      selectedGoods: selectedGoods.filter(goods => goods !== product),
    }));
  };

  clearGoods = () => {
    this.setState(() => ({
      selectedGoods: [],
    }));
  };

  render() {
    const { goods, selectedGoods } = this.state;

    return (
      <div className="App content">
        <div className="header">
          <h1 className="title title is-1">{titleOfGoods(selectedGoods)}</h1>
          {selectedGoods.length > 0 && (
            <button
              type="button"
              className="button is-rounded"
              onClick={() => this.clearGoods()}
            >
              Clear
            </button>
          )}
        </div>
        <ul className="list">
          {goods.map((product) => (
            <li key={product} className="item">
              <p className="subtitle product">{product}</p>

              {selectedGoods.includes(product)
                ? (
                  <button
                    type="button"
                    className="button is-danger is-rounded"
                    onClick={() => this.removeGoods(product)}
                  >
                    Remove
                  </button>
                )
                : (
                  <button
                    type="button"
                    className="button is-success is-rounded"
                    onClick={() => this.addGoods(product)}
                  >
                    Select
                  </button>
                )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
