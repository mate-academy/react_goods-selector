import classNames from 'classnames';
import React from 'react';
import './App.scss';

import goodsFromServer from './goods';

type State = {
  selectedGood: string,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: goodsFromServer[8],
  };

  handlerGood = (good: string) => {
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
            {selectedGood
              ? `${selectedGood} is selected`
              : 'Nothing is selected'}
          </h1>

          {selectedGood && (
            <button
              type="button"
              className="App__clear"
              onClick={() => {
                this.setState({ selectedGood: '' });
              }}
            >
              Clear
            </button>
          )}
        </header>

        <ul>
          {goodsFromServer.map((good) => (
            <>
              <li
                key={selectedGood}
                className={classNames(
                  'Good',
                  {
                    'Good--active': selectedGood.includes(good),
                  },
                )}
              >
                {good}
              </li>
              <button
                type="button"
                className="Good__remove"
                onClick={() => this.handlerGood(good)}
              >
                Select
              </button>
              <button
                type="button"
                className="Good__remove"
                onClick={() => this.handlerGood('')}
              >
                Remove
              </button>
            </>
          ))}
        </ul>

        {/* Put required buttons into each Good */}
      </main>
    );
  }
}
