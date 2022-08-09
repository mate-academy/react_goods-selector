import React from 'react';
import './App.scss';
import classNames from 'classnames';

import goodsFromServer from './goods';

type State = {
  selectedGoods: string[];
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  clearGoods = () => {
    this.setState({ selectedGoods: [] });
  };

  selectGood = (good: string) => {
    this.setState(state => {
      return { selectedGoods: [...state.selectedGoods, good] };
    });
  };

  removeGood = (good: string) => {
    this.setState(state => {
      return {
        selectedGoods: state.selectedGoods
          .filter(item => item !== good),
      };
    });
  };

  chooseTitle = () => {
    const { selectedGoods } = this.state;

    if (selectedGoods.length === 0) {
      return 'No goods selected';
    }

    if (selectedGoods.length === 1) {
      return `${selectedGoods[0]} is selected`;
    }

    return `${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods[selectedGoods.length - 1]} are selected`;
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <main className="App panel is-primary">
        <header className="App__header panel-heading">
          <h1 className="App__title">
            {this.chooseTitle()}
          </h1>

          {selectedGoods.length > 0 && (
            <button
              type="button"
              className="App__clear button is-danger"
              onClick={this.clearGoods}
            >
              Clear
            </button>
          )}

        </header>

        <ul>
          {goodsFromServer.map(good => {
            const isSelected = selectedGoods.includes(good);

            return (
              <li
                key={good}
                className={classNames(
                  'Good',
                  {
                    'Good--active': selectedGoods.includes(good),
                  },
                )}
              >
                {good}

                {isSelected
                  ? (
                    <button
                      type="button"
                      className="Good__remove button is-danger"
                      onClick={() => this.removeGood(good)}
                    >
                      Remove
                    </button>
                  )
                  : (
                    <button
                      type="button"
                      className="Good__select button is-primary"
                      onClick={() => this.selectGood(good)}
                    >
                      Select
                    </button>
                  )}
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}
