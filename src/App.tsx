import classNames from 'classnames';
import React from 'react';
import './App.scss';

import goodsFromServer from './goods';

type State = {
  goods: string[],
  selectedGood: string,
};

export class App extends React.Component<{}, State > {
  state: State = {
    goods: [...goodsFromServer],
    selectedGood: 'Jam',
  };

  resetSelectedGood = () => {
    this.setState({ selectedGood: '' });
  };

  selectGood = (good: string) => {
    this.setState({ selectedGood: good });
  };

  render(): React.ReactNode {
    const { goods, selectedGood } = this.state;

    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">
            { selectedGood
              ? `${selectedGood} is selected`
              : 'No goods selected'}
          </h1>

          {selectedGood
            && (
              <button
                type="button"
                className="App__clear"
                onClick={this.resetSelectedGood}
              >
                Clear
              </button>
            )}
        </header>

        <ul>
          {goods.map(good => (
            <li
              className={classNames('Good', {
                'Good--active': selectedGood === good,
              })}
              key={good}
            >
              {good}

              {selectedGood === good
              && (
                <button
                  type="button"
                  className="Good__remove"
                  onClick={() => {
                    this.selectGood('');
                  }}
                >
                  Remove
                </button>
              )}

              { selectedGood !== good
                && (
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
          ))}
        </ul>
      </main>
    );
  }
}
