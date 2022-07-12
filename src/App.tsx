import React from 'react';
import './App.scss';

import goodsFromServer from './goods';

type State = {
  selectedGood: string,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Nothing',
  };

  select = (selected: string) => {
    this.setState({ selectedGood: selected });
  };

  render(): React.ReactNode {
    const { selectedGood } = this.state;

    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">
            {selectedGood}
            {' is selected'}
          </h1>
        </header>

        <ul>
          {goodsFromServer.map(good => (
            <li className="liItem">
              {good}

              <button
                type="button"
                onClick={() => this.select(good)}
              >
                Select
              </button>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
