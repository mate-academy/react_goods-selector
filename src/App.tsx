import { Component } from 'react';
import './App.scss';

import goodsFromServer from './goods';

type State = {
  selectedGood: string[],
};

export class App extends Component<{}, State> {
  state = {
    selectedGood: [],
  };

  componentDidMount() {
    this.setState({ selectedGood: ['Jam'] });
  }

  selectGood = (key: string) => {
    this.setState((prevState) => (
      { selectedGood: [...prevState.selectedGood, key] }
    ));
  };

  removeGood = (key: string) => {
    // @ts-ignore
    const index = this.state.selectedGood.indexOf(key);
    const copyState = [...this.state.selectedGood];

    copyState.splice(index, 1);

    this.setState({ selectedGood: [...copyState] });
  };

  clearGoods = () => {
    this.setState({ selectedGood: [] });
  };

  getGoodsList = (goods: State[]) => {
    return goods.reduce((resultStr, good, i, array) => {
      if (i === array.length - 1 && array.length > 1) {
        return `${resultStr.slice(0, resultStr.length - 1)} and ${good}`;
      }

      if (array.length > 1) {
        return `${resultStr} ${good},`;
      }

      return `${resultStr} ${good}`;
    }, '');
  };

  render() {
    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">
            {this.state.selectedGood.length
              ? `${this.getGoodsList(this.state.selectedGood)} is selected`
              : 'No goods selected'}
          </h1>

          <button
            type="button"
            className="App__clear"
            onClick={this.clearGoods}
          >
            Clear
          </button>
        </header>

        <ul>
          {goodsFromServer.map(good => {
            // @ts-ignore
            if (this.state.selectedGood.includes(good)) {
              return (
                <li key={good} className="Good Good--active">
                  {good}
                  <button
                    type="button"
                    className="Good__remove"
                    onClick={() => {
                      this.removeGood(good);
                    }}
                  >
                    Remove
                  </button>
                </li>
              );
            }

            return (
              <li key={good} className="Good">
                {good}
                <button
                  type="button"
                  className="Good__select"
                  onClick={() => {
                    this.selectGood(good);
                  }}
                >
                  Select
                </button>
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}
