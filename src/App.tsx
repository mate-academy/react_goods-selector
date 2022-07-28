import { Component } from 'react';
import classNames from 'classnames';
import './App.scss';

import goodsFromServer from './goods';

type State = {
  selectedGood: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="App panel is-primary">
        <header className="App__header panel-heading">
          <h1 className="App__title">
            {selectedGood
              ? `${selectedGood} is selected`
              : 'No goods selected'}
          </h1>

          {selectedGood && (
            <button
              type="button"
              className="App__clear button is-danger"
              onClick={() => {
                this.setState({ selectedGood: '' });
              }}
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
                { 'Good--active': good === selectedGood },
              )}
            >
              {good}

              {good === selectedGood
                ? (
                  <button
                    type="button"
                    className="Good__remove button is-danger"
                    onClick={() => {
                      this.setState({ selectedGood: '' });
                    }}
                  >
                    Remove
                  </button>
                )
                : (
                  <button
                    type="button"
                    className="Good__select button is-success"
                    onClick={() => {
                      this.setState({ selectedGood: good });
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
