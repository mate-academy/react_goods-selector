/* eslint-disable @typescript-eslint/no-unused-expressions */
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
  status: string;
  selected: string;
  selectedGoods: string[]
};

class App extends React.Component<{}, State> {
  theGoods: string[] = this.state.selectedGoods;

  state = {
    selectedGoods: ['Jam'],
    status: `${this.theGoods} is selected`,
    selected: 'selected',
  };

  selectItem = (good: string) => {
    this.state.selectedGoods.push(good);
    const theGoods = this.state.selectedGoods;

    switch (this.state.selectedGoods.length) {
      case 0: this.setState({ status: 'No goods selected' });
        break;
      case 1: this.setState({ status: `${theGoods.join(', ')} is selected` });
        break;
      default: this.setState({ status: `${theGoods.join(', ')} are selected` });
    }
  };

  removeItem = (good: string) => {
    const theGoods = this.state.selectedGoods;

    this.state.selectedGoods = this.state.selectedGoods.filter(
      (selectedGood: string) => selectedGood !== good,
    );
    switch (this.state.selectedGoods.length) {
      case 0: this.setState({ status: 'No goods selected' });
        break;
      case 1: this.setState({ status: `${theGoods.join(', ')} is selected` });
        break;
      default: this.setState({ status: `${theGoods.join(', ')} are selected` });
    }
  };

  clear = () => {
    this.state.selectedGoods = [];
    this.setState({ status: 'No goods selected' });
  };

  render() {
    return (
      <div className="App">
        <ul>
          {
            goodsFromServer.map((good) => (
              <li
                key={good}
              >
                <span
                  className={this.state.status.includes(good)
                    ? this.state.selected : 'good'}
                >
                  {good}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    !this.state.status.includes(good)
                      ? this.selectItem(good)
                      : this.removeItem(good);
                  }}
                >
                  {this.state.status.includes(good)
                    ? 'Remove'
                    : 'Select'}
                </button>
              </li>
            ))
          }
        </ul>
        <div>
          {this.state.status !== 'No goods selected' && (
            <button
              type="button"
              onClick={this.clear}
            >
              Clear
            </button>
          )}
        </div>
        <h1>{this.state.status}</h1>
      </div>
    );
  }
}

export default App;
