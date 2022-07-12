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
  state: Readonly<State> = {
    selectedGoods: ['Jam'],
  };

  addGood = (goods: string[], good: string) => {
    goods.push(good);

    return goods;
  };

  removeGood = (goods: string[], good: string) => {
    return goods.filter(currentGood => currentGood !== good);
  };

  buttonHandler = (good: string) => {
    if (this.state.selectedGoods.includes(good)) {
      this.setState((state) => {
        return {
          selectedGoods: this.removeGood(state.selectedGoods, good),
        };
      });
    } else {
      this.setState((state) => {
        return {
          selectedGoods: this.addGood(state.selectedGoods, good),
        };
      });
    }
  };

  render() {
    return (
      <div className="App">
        <h1 className="title">
          {this.state.selectedGoods.length > 0
            && (
              <button
                className="clear-btn btn"
                type="button"
                onClick={() => {
                  this.setState({ selectedGoods: [] });
                }}
              >
                Clear
              </button>
            )}

          {this.state.selectedGoods.length > 0
            ? (
              <ul className="selectedGoods__list">
                Selected goods:
                {this.state.selectedGoods
                  .map(good => (
                    <li
                      key={good}
                      className="selectedGoods__item"
                    >
                      {good}
                    </li>
                  ))}
              </ul>
            )
            : 'No goods selected'}
        </h1>
        <ul className="goods__list">
          {
            goodsFromServer
              .map(good => (
                <li
                  className="goods__item"
                  key={good}
                >
                  {good}
                  <button
                    className="select-btn btn"
                    type="button"
                    onClick={() => {
                      this.buttonHandler(good);
                    }}
                  >
                    {this.state.selectedGoods.includes(good)
                      ? 'Remove'
                      : 'Select'}
                  </button>
                </li>
              ))
          }
        </ul>
      </div>
    );
  }
}

export default App;
