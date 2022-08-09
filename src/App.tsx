import { Component } from 'react';
import classNames from 'classnames';
import './App.scss';

import goodsFromServer from './goods';

type State = {
  selectedGood: string;
};

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
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

          {selectedGood !== ''
            ? (
              <button
                type="button"
                className="App__clear"
                onClick={() => {
                  this.setState({
                    selectedGood: '',
                  });
                }}
              >
                Clear
              </button>
            )
            : null}
        </header>

        <ul>
          {goodsFromServer.map(good => {
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
                {selectedGood === good
                  ? (
                    <button
                      type="button"
                      className="Good__remove"
                      onClick={() => {
                        this.setState({
                          selectedGood: '',
                        });
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
                        this.setState({
                          selectedGood: good,
                        });
                      }}
                    >
                      Select
                    </button>
                  )}

              </li>
            );
          })}
        </ul>

        {/* Put required buttons into each Good */}

      </main>
    );
  }
}
