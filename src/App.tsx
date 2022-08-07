import classNames from 'classnames';
import { Component } from 'react';
import './App.scss';

import goodsFromServer from './goods';

type State = {
  selectedGood: string,
};

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  addSelectedGood = (good: string) => {
    this.setState({ selectedGood: good });
  };

  removeSelectedGood = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="App panel is-success">
        <header className="App__header panel-heading">
          <h1 className="App__title">
            {selectedGood === ''
              ? 'No goods selected'
              : `${selectedGood} is selected`}
          </h1>

          {selectedGood.length > 0 && (
            <button
              type="button"
              className="App__clear button is-danger"
              onClick={this.removeSelectedGood}
            >
              Clear
            </button>
          )}
        </header>

        <ul>
          {goodsFromServer.map(good => (
            <li
              className={classNames(
                'Good',
                {
                  'Good--active': selectedGood === good,
                },
              )}
            >
              {good}
              {selectedGood !== good
                ? (
                  <button
                    type="button"
                    className="
                      Good__select
                      button
                      is-success
                      is-light
                    "
                    onClick={() => this.addSelectedGood(good)}
                  >
                    Select
                  </button>
                )
                : (
                  <button
                    type="button"
                    className="Good__remove button is-danger"
                    onClick={this.removeSelectedGood}
                  >
                    Remove
                  </button>
                )}
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
