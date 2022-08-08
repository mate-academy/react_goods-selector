import classNames from 'classnames';
import React from 'react';
import './App.scss';

import goodsFromServer from './goods';

type State = {
  selected: string[];
};

export class App extends React.Component<{}, State> {
  state: State = {
    selected: ['Jam'],
  };

  render() {
    const { selected } = this.state;

    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">

            {selected.length
              ? `${selected} ${selected.length > 1 ? 'are' : 'is'} selected`
              : 'No goods selected'}
          </h1>

          {selected.length > 0 && (
            <button
              type="button"
              className="App__clear button"
              onClick={() => {
                this.setState({ selected: [] });
              }}
            >
              Clear
            </button>
          )}
        </header>

        <ul className="App__list">
          {goodsFromServer.map(good => (
            <li
              className={classNames(
                'Good',
                { 'Good--active': selected.includes(good) },
              )}
              key={good}
            >
              {good}

              {selected.includes(good)
                ? (
                  <button
                    type="button"
                    className="Good__remove button"
                    key={good}
                    onClick={() => {
                      selected.splice(selected
                        .indexOf(good), 1);
                      this.setState({ selected });
                    }}
                  >
                    Remove
                  </button>
                )

                : (
                  <button
                    type="button"
                    className="Good__select button"
                    key={good}
                    onClick={() => {
                      selected.push(good);
                      this.setState({ selected });
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
