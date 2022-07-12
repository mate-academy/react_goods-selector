import React from 'react';
import './App.scss';

import goodsFromServer from './goods';

type State = {
  selectedGood: string[],
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: ['Jam'],
  };

  render(): React.ReactNode {
    const { selectedGood } = this.state;

    return (
      <main className="App">
        <h1>
          {!selectedGood.length
            ? 'No goods selected'
            : `${selectedGood}
            ${' '}
            is selected`}
          {selectedGood.length
            ? (
              <button
                type="button"
                onClick={() => (
                  this.setState({ selectedGood: [] })
                )}
              >
                Clear
              </button>
            )
            : null}
        </h1>

        <ul>
          {goodsFromServer.map((good: string) => (
            <li
              key={good}
              className={`${selectedGood.includes(good)
                ? 'selectedGood'
                : ''
              }`}
            >
              {good}
              {' '}
              <button
                type="button"
                onClick={() => {
                  this.setState({
                    selectedGood: selectedGood.includes(good)
                      ? selectedGood.filter((select: string) => select !== good)
                      : [...selectedGood, good],
                  });
                }}
              >
                {selectedGood.includes(good)
                  ? 'Remove'
                  : 'Select'}
              </button>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
