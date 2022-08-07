import React from 'react';
import './App.scss';
import classNames from 'classnames';

import goodsFromServer from './goods';

type State = {
  selectedGood: string | null;
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  selectGood = (good: string) => {
    this.setState({ selectedGood: good });
  };

  removeGood = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="App panel is-primary">
        <header className="App__header panel-heading">
          <h1 className="App__title">
            {selectedGood ? `${this.state.selectedGood} is selected` : 'No goods selected'}
          </h1>

          {selectedGood && (
            <button
              type="button"
              className="App__clear button is-danger"
              onClick={this.removeGood}
            >
              Clear
            </button>
          )}

        </header>

        <ul>
          {goodsFromServer.map(good => {
            const isSelected = good === selectedGood;

            return (
              <li
                key={good}
                className={classNames(
                  'Good',
                  {
                    'Good--active': selectedGood === good,
                  },
                )}
              >
                {good}

                {isSelected
                  ? (
                    <button
                      type="button"
                      className="Good__remove button is-danger"
                      onClick={this.removeGood}
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
