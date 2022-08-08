import classNames from 'classnames';
import React from 'react';
import './App.scss';

import goodsFromServer from './goods';

type State = {
  selectedGood: string,
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  addGood = (good: string) => {
    this.setState({ selectedGood: good });
  };

  removeGood = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">
            {selectedGood
              ? `${selectedGood} is selected`
              : 'No goods selected'}
          </h1>

          {selectedGood && (
            <button
              type="button"
              className="App__clear btn btn-danger btn-sm"
              onClick={this.removeGood}
            >
              Clear
            </button>
          )}
        </header>

        <ul>
          {goodsFromServer.map(good => (
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
              {selectedGood === good
                ? (
                  <button
                    type="button"
                    className="Good__remove btn btn-warning btn-sm"
                    onClick={this.removeGood}
                  >
                    Remove
                  </button>
                )
                : (
                  <button
                    type="button"
                    className="Good__select btn btn-success btn-sm"
                    onClick={() => {
                      this.addGood(good);
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
