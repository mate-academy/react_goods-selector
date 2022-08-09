import React from 'react';
import 'bulma/css/bulma.min.css';
import './App.scss';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';

import goodsFromServer from './goods';

interface State {
  selectedGood: string;
}

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  handleSelectClear = () => {
    this.setState({ selectedGood: '' });
  };

  handleSelectGood = (good: string) => {
    this.setState({
      selectedGood: good,
    });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">
            {
              selectedGood
                ? `${selectedGood} is selected`
                : 'No goods selected'
            }
          </h1>

          {selectedGood && (
            <button
              type="button"
              className="button App__clear"
              onClick={this.handleSelectClear}
            >
              Clear
            </button>
          )}
        </header>

        <ul className="block">
          {goodsFromServer.map(good => {
            const isSelectedGood = good === selectedGood;

            return (
              <li
                key={uuidv4()}
                className={classNames(
                  'box subtitle is-4 Good',
                  { 'Good--active': isSelectedGood },
                )}
              >
                {good}

                {isSelectedGood && (
                  <button
                    type="button"
                    className="button Good__remove"
                    onClick={this.handleSelectClear}
                  >
                    Remove
                  </button>
                )}

                {isSelectedGood || (
                  <button
                    type="button"
                    className="button Good__select"
                    onClick={() => this.handleSelectGood(good)}
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
