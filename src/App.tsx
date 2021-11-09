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

  displaySelectedGoods = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'No goods selected';

      case 1:
        return `${selectedGoods[0]} is selected`;

      default:
        return `${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods.slice(-1)} are selected`;
    }
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>{this.displaySelectedGoods()}</h1>
        <ul>
          {goodsFromServer.map((good) => {
            const isSelected = selectedGoods.find(item => item === good);

            return (
              <li
                key={good}
                className={classNames('App__good',
                  { 'App__good--selected': isSelected })}
              >
                {good}
                <button
                  type="button"
                  className="App__button App__button--select"
                  onClick={selectedGoods.find(item => item === good)
                    ? () => this.deleteGood(good)
                    : () => this.addGood(good)}
                >
                  {isSelected
                    ? 'Remove'
                    : 'Add'}
                </button>
              </li>
            );
          })}
        </ul>
        {selectedGoods.length > 0 && (
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
