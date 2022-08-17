import React from 'react';
import className from 'classnames';
import 'bulma/css/bulma.min.css';
import './App.scss';

import goodsFromServer from './goods';

export function makeString(arr: string[]): string {
  if (arr.length === 1) {
    return arr[0];
  }

  const firsts = arr.slice(0, arr.length - 1);
  const last = arr[arr.length - 1];

  return `${firsts.join(', ')} and ${last}`;
}

type State = {
  selectedGood: string[],
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: ['Jam'],
  };

  addToList = (good: string) => {
    this.setState((state) => ({
      selectedGood: [...state.selectedGood, good],
    }));
  };

  removeFromList = (good: string) => {
    this.setState((state) => ({
      selectedGood: state.selectedGood.filter(item => item !== good),
    }));
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="App">
        <header className="App__header field">
          <h1 className="App__title">
            {selectedGood.length > 0
              ? `${makeString(selectedGood)} is selected`
              : 'No goods selected'}
          </h1>

          {(selectedGood.length > 0) && (
            <button
              type="button"
              className="App__clear button is-warning is-rounded"
              onClick={() => {
                this.setState({
                  selectedGood: [],
                });
              }}
            >
              Clear
            </button>
          )}
        </header>

        <ul>
          {goodsFromServer.map(good => (
            <li
              className={className(
                'Good',
                { 'Good--active': selectedGood.includes(good) },
              )}
              key={good}
            >
              {good}
              {selectedGood.includes(good)
                ? (
                  <button
                    type="button"
                    className="Good__remove button is-danger is-rounded"
                    onClick={() => {
                      this.removeFromList(good);
                    }}
                  >
                    Remove
                  </button>
                )
                : (
                  <button
                    type="button"
                    className="Good__select button is-info is-rounded"
                    onClick={() => {
                      this.addToList(good);
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
