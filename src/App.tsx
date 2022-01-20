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
  selectedGoods: string[];
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: [],
  };

  selectGood = (good: string) => {
    this.setState((prevState) => ({
      selectedGoods: [...prevState.selectedGoods, good],
    }));
  };

  removeGood = (good: string) => {
    const { selectedGoods } = this.state;

    this.setState({ selectedGoods: selectedGoods.filter(item => item !== good) });
  };

  clearSelected = () => {
    this.setState({ selectedGoods: [] });
  };

  printSelected = () => {
    const { selectedGoods } = this.state;

    if (selectedGoods.length === 0) {
      return 'No goods selected';
    }

    if (selectedGoods.length === 1) {
      return `${selectedGoods} is selected`;
    }

    const selectedString = selectedGoods.map((good, i, arr) => {
      if (i === arr.length - 1) {
        return `and ${good}`;
      }

      if (i === arr.length - 2) {
        return `${good}`;
      }

      return `${good},`;
    });

    return `${selectedString.join(' ')} are selected`;
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <div className="ui segment">
          {this.printSelected()}
          <button
            type="button"
            className={classNames(
              'ui button clear',
              {
                hidden: selectedGoods.length === 0,
              },
            )}
            onClick={this.clearSelected}
          >
            X
          </button>
        </div>
        <div className="ui middle aligned divided list">
          {goodsFromServer.length > 0 && (
            goodsFromServer.map(good => (
              <div
                key={good}
                className={classNames('item',
                  {
                    selected: selectedGoods.includes(good),
                  })}
              >
                <div className="right floated content">
                  {this.state.selectedGoods.includes(good)
                    ? (
                      <button
                        type="button"
                        className="ui button select"
                        onClick={() => {
                          this.removeGood(good);
                        }}
                      >
                        Remove
                      </button>
                    )
                    : (
                      <button
                        type="button"
                        className="ui button select"
                        onClick={() => {
                          this.selectGood(good);
                        }}
                      >
                        Add
                      </button>
                    )}

                </div>
                <div className="content">
                  {good}
                </div>
              </div>

            )))}
        </div>
      </div>
    );
  }
}

export default App;
