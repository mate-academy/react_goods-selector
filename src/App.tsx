import React from 'react';
import classNames from 'classnames';
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

class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: [],
  };

  addGood = (good: string) => {
    this.setState((previousState) => {
      return {
        selectedGoods: [...previousState.selectedGoods, good],
      };
    });
  };

  deleteGood = (good: string) => {
    this.setState((previousState) => {
      return {
        selectedGoods: previousState.selectedGoods.filter(item => item !== good),
      };
    });
  };

  clearSelection = () => {
    this.setState(
      { selectedGoods: [] },
    );
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>{`Selected good: ${selectedGoods.join(', ')}`}</h1>
        <ul>
          {goodsFromServer.map((good) => (
            <li
              key={good}
              className={classNames('App__good',
                { 'App__good--selected': selectedGoods.find(item => item === good) })}
            >
              {good}
              <button
                type="button"
                className="App__button App__button--select"
                onClick={selectedGoods.find(item => item === good)
                  ? () => this.deleteGood(good)
                  : () => this.addGood(good)}
              >
                {selectedGoods.find(item => item === good)
                  ? 'Remove'
                  : 'Add'}
              </button>
            </li>
          ))}
        </ul>
        {selectedGoods && (
          <button
            type="button"
            className="App__button App__button--clear"
            onClick={this.clearSelection}
          >
            Clear selection
          </button>
        )}
      </div>
    );
  }
}

export default App;
