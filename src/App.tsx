import classNames from 'classnames';
import React from 'react';
import './App.scss';

import goodsFromServer from './goods';
import 'bulma/css/bulma.min.css';

export class App extends React.Component {
  state = {
    selectedGood: 'Jam',
  };

  handler = (nameButton: string, good?: string) => {
    if (nameButton === 'Clear' || nameButton === 'Remove') {
      this.setState({
        selectedGood: '',
      });
    } else {
      this.setState({
        selectedGood: good,
      });
    }
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
              className="App__clear button is-info"
              onClick={() => {
                this.handler('Clear');
              }}
            >
              Clear
            </button>
          )}
        </header>

        <ul>
          {goodsFromServer.map(good => (
            <>
              <li
                className={classNames(
                  'Good',
                  { 'Good--active': good === selectedGood },
                )}
                key={good}
              >
                {good}
                {selectedGood !== good && (
                  <button
                    type="button"
                    className="Good__select button is-light"
                    onClick={() => {
                      this.handler('Select', good);
                    }}
                  >
                    Select
                  </button>
                )}

                {selectedGood === good && (
                  <button
                    type="button"
                    className="Good__remove button is-danger"
                    onClick={() => {
                      this.handler('Remove');
                    }}
                  >
                    Remove
                  </button>
                )}
              </li>
            </>
          ))}
        </ul>
      </main>
    );
  }
}
