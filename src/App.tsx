import { Component } from 'react';
import './App.scss';

import goodsFromServer from './goods';

type State = {
  selectedGoods: string[],
};

export class App extends Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  selectGood = (key: string) => {
    this.setState((prevState) => (
      { selectedGoods: [...prevState.selectedGoods, key] }
    ));
  };

  removeGood = (key: string) => {
    const index = this.state.selectedGoods.indexOf(key);
    const copyState = [...this.state.selectedGoods];

    copyState.splice(index, 1);

    this.setState({ selectedGoods: [...copyState] });
  };

  clearGoods = () => {
    this.setState({ selectedGoods: [] });
  };

  getGoodsList = (goods: string[]) => {
    return goods.reduce((resultStr, good, i, array) => {
      if (i === array.length - 1 && array.length > 1) {
        return `${resultStr.slice(0, resultStr.length - 1)} and ${good}`;
      }

      if (array.length > 1) {
        return `${resultStr} ${good},`;
      }

      return `${resultStr} ${good}`;
    }, '').trim();
  };

  render() {
    return (
      <main className="container">
        <div className="App">
          <header className="App__header">
            <h1 className="App__title">
              {this.state.selectedGoods.length
                ? `${this.getGoodsList(this.state.selectedGoods)} is selected`
                : 'No goods selected'}
            </h1>

            {this.state.selectedGoods[0] && (
              <button
                type="button"
                className="button button__remove"
                onClick={this.clearGoods}
              >
                Clear
              </button>
            )}
          </header>

          <ul className="list">
            {goodsFromServer.map(good => {
              if (this.state.selectedGoods.includes(good)) {
                return (
                  <li key={good} className="Good Good--active">
                    {good}
                    <button
                      type="button"
                      className="button button__selected"
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
                <li key={good} className="Good control">
                  {good}
                  <button
                    type="button"
                    className="button button__unselected"
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
        </div>
      </main>
    );
  }
}
