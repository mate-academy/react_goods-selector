import React from 'react';
import classNames from 'classnames';
import './App.scss';

import goodsFromServer from './goods';

type State = {
  selectedGood: string,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  selectGood = (good: string) => {
    this.setState({ selectedGood: good });
  };

  removeGood = (good: string) => {
    if (good === this.state.selectedGood) {
      this.setState({ selectedGood: '' });
    }
  };

  render() {
    const { selectedGood } = this.state;

    function isGoodSelected(good: string): boolean {
      return good === selectedGood;
    }

    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">
            {selectedGood
              ? `${selectedGood} is selected`
              : 'No goods selected'}
          </h1>

          {selectedGood
            ? (
              <>
                <button
                  type="button"
                  className="App__clear"
                  onClick={() => {
                    this.setState({ selectedGood: '' });
                  }}
                >
                  Clear
                </button>
              </>
            )
            : null}
        </header>

        <ul className="Good__list">
          {goodsFromServer.map(good => {
            return (
              <li
                key={good}
                className={classNames(
                  'Good',
                  {
                    'Good Good--active': isGoodSelected(good),
                  },
                )}
              >
                {good}

                {isGoodSelected(good)
                  ? (
                    <button
                      type="button"
                      className="Good__remove"
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
                      className="Good__select"
                      onClick={() => {
                        this.selectGood(good);
                      }}
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
