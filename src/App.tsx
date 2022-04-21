/* eslint-disable no-param-reassign */

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

class App extends React.Component<{}, { selectedGoods: string[] }> {
  state = {
    selectedGoods: [],
  };

  showSelectedGoods = (goods: string[]) => {
    if (goods.length === 0) {
      return 'No goods selected';
    }

    if (goods.length === 1) {
      return ' is selected';
    }

    return ' are selected';
  };

  render() {
    return (
      <div className="App">
        {goodsFromServer.map(good => (
          <>
            <div
              className="goodContainer"
              key={good}
            >
              <div className={this.state.selectedGoods
                .find(currentGood => currentGood === good)
                ? 'goodName selected' : 'goodName'}
              >
                {good}
              </div>
              <button
                type="button"
                className={this.state.selectedGoods
                  .find(currentGood => currentGood === good)
                  ? 'remove' : 'add'}
                onClick={() => {
                  if (this.state.selectedGoods
                    .find(currentGood => currentGood === good)) {
                    this.setState((prevState) => ({
                      selectedGoods:
                      prevState.selectedGoods
                        .filter(currentGood => currentGood !== good),
                    }));
                  } else {
                    this.setState((prevState) => ({
                      selectedGoods: [...prevState.selectedGoods,
                        good],
                    }));
                  }
                }}
              >
                {this.state.selectedGoods
                  .find(currentGood => currentGood === good) ? 'Remove' : 'Add'}
              </button>
            </div>
          </>
        ))}
        <div className="headerContainer">
          <h1>
            {this.state.selectedGoods.slice(0, -1).join(', ')}
            {this.state.selectedGoods.length > 1 && ' and '}
            {this.state.selectedGoods[this.state.selectedGoods.length - 1]}
            {this.showSelectedGoods(this.state.selectedGoods)}
          </h1>
          <button
            type="button"
            className={this.state.selectedGoods.length === 0
              ? 'hidden' : 'deleteSelection'}
            onClick={() => {
              this.setState({
                selectedGoods: [],
              });
            }}
          >
            x
          </button>
        </div>
        {goodsFromServer.length}
      </div>
    );
  }
}

export default App;
