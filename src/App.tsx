import { Component } from 'react';
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
  selectedGoods: string[],
};

class App extends Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  getGoodsTitle() {
    if (this.state.selectedGoods.length === 0) {
      return 'No goods selected';
    }

    if (this.state.selectedGoods.length === 1) {
      return `${this.state.selectedGoods[0]} is selected`;
    }

    return `${this.state.selectedGoods.slice(0, -1).join(', ')
    } and ${this.state.selectedGoods.slice(-1)} are selected`;
  }

  selectHandler(good: string) {
    return this.setState(state => ({
      selectedGoods: (!state.selectedGoods.includes(good))
        ? [...state.selectedGoods, good]
        : [...state.selectedGoods
          .filter(selected => (selected !== good))],
    }));
  }

  clear() {
    return this.setState({ selectedGoods: [] });
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">{this.getGoodsTitle()}</h1>

          {selectedGoods.length !== 0
            ? (
              <button
                type="button"
                onClick={() => this.clear()}
                className="App__clear"
              >
                Clear
              </button>
            )
            : (
              <button
                hidden
                type="button"
                onClick={() => this.clear()}
                className="App__clear"
              >
                Clear
              </button>
            )}
        </header>

        <ul>
          {goodsFromServer.map(good => (
            <li
              key={good}
              className="Good"
            >
              {good}

              {!selectedGoods.includes(good)
                ? (
                  <button
                    type="button"
                    onClick={() => this.selectHandler(good)}
                    className="Good__button Good__button--unselected"
                  >
                    Select
                  </button>
                )
                : (
                  <button
                    type="button"
                    onClick={() => this.selectHandler(good)}
                    className="Good__button Good__button--selected"
                  >
                    Remove
                  </button>
                )}
            </li>

          ))}
        </ul>
      </main>
    );
  }
}

export default App;
