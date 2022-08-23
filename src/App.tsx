import classNames from 'classnames';
import React from 'react';
import './App.scss';

import goodsFromServer from './goods';

export class App extends React.Component {
  state = {
    selectedGood: 'Jam',
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">
            { selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
          </h1>
          {selectedGood
            && (
              <button
                type="button"
                className="App__clear"
                onClick={() => this.setState({ selectedGood: '' })}
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
                { 'Good--active': selectedGood === good },
              )}
            >
              {good}
              {selectedGood === good
                ? (
                  <button
                    type="button"
                    className="Good__remove"
                    onClick={() => this.setState({ selectedGood: '' })}
                  >
                    Remove
                  </button>
                )
                : (
                  <button
                    type="button"
                    className="Good__select"
                    onClick={() => this.setState({ selectedGood: good })}
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
