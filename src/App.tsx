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
    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">

            {this.state.selected.length
              ? `${this.state.selected} ${this.state.selected.length > 1 ? 'are' : 'is'} selected`
              : 'No goods selected'}
          </h1>

          {this.state.selected.length > 0 && (
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
                { 'Good--active': this.state.selected.includes(good) },
              )}
              key={good}
            >
              {good}

              {this.state.selected.includes(good)
                ? (
                  <button
                    type="button"
                    className="Good__remove button"
                    key={good}
                    onClick={() => {
                      this.state.selected.splice(this.state.selected
                        .indexOf(good), 1);
                      // eslint-disable-next-line react/no-access-state-in-setstate
                      this.setState({ selected: this.state.selected });
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
                      this.state.selected.push(good);
                      // eslint-disable-next-line react/no-access-state-in-setstate
                      this.setState({ selected: this.state.selected });
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
