/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-console */
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
  state: State = {
    selectedGoods: ['Jam'],
    status: 'Jam is selected',
    selected: 'selected',
  };

  selectItem = (good: string) => {
    this.setState(state => ({
      selectedGoods: [
        ...state.selectedGoods,
        good,
      ],
    }));

    const selectedGoods = [
      ...this.state.selectedGoods,
      good,
    ];

    switch (selectedGoods.length) {
      case 0: this.setState({ status: 'No goods selected' });
        break;
      case 1: this.setState({ status: `${selectedGoods.join(', ')} is selected` });
        break;
      default: this.setState({ status: `${selectedGoods.join(', ')} are selected` });
    }
  };

  removeItem = (good: string) => {
    this.state.selectedGoods = [...this.state.selectedGoods].filter(
      (selectedGood: string) => selectedGood !== good,
    );
    switch (this.state.selectedGoods.length) {
      case 0: this.setState({ status: 'No goods selected' });
        break;
      case 1: this.setState({ status: `${this.state.selectedGoods.join(', ')} is selected` });
        break;
      default: this.setState({ status: `${this.state.selectedGoods.join(', ')} are selected` });
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
                  className={this.state.selectedGoods.includes(good)
                    ? this.state.selected : 'good'}
                >
                  {good}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    !this.state.selectedGoods.includes(good)
                      ? this.selectItem(good)
                      : this.removeItem(good);
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
