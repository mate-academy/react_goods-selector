import React from 'react';
import classNames from 'classnames';
import './App.scss';

import goodsFromServer from './goods';

type State = {
  selectedGood: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  selectGood = (selectedGood: string) => {
    this.setState({ selectedGood });
  };

  removeSelectedGood = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="App has-background-light">
        <div className="App__wrapper has-background-success">
          <header className="App__header">
            <h1 className="App__title has-text-info-light">
              {
                selectedGood
                  ? `${selectedGood} is selected`
                  : 'No goods selected'
              }
            </h1>

            {selectedGood && (
              <button
                type="button"
                className="App__clear button is-danger"
                onClick={this.removeSelectedGood}
              >
                Clear
              </button>
            )}

          </header>

          <ul className="App__list">
            {
              goodsFromServer.map(good => {
                const isSelected = selectedGood === good;

                return (
                  <li
                    key={good}
                    className={classNames(
                      'Good has-text-warning-light',
                      { 'Good--active': isSelected },
                    )}
                  >
                    <span className="App__list-item-text">
                      {good}
                    </span>

                    { isSelected
                      ? (
                        <button
                          type="button"
                          className="Good__remove button is-danger"
                          onClick={this.removeSelectedGood}
                        >
                          Remove
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="Good__select button is-info"
                          onClick={() => this.selectGood(good)}
                        >
                          Select
                        </button>
                      )}
                  </li>
                );
              })
            }
          </ul>
        </div>
      </main>
    );
  }
}
