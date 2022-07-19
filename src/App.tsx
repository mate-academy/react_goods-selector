import React from 'react';
import classNames from 'classnames';

import './App.scss';

import goodsFromServer from './goods';

type State = {
  selectedGood: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: '',
  };

  handlerClear = () => {
    this.setState({ selectedGood: '' });
  };

  handlerRemove = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">
            {this.state.selectedGood
              ? `${this.state.selectedGood} is selected`
              : 'No goods selected'}
          </h1>

          {this.state.selectedGood && (
            <button
              type="button"
              className="App__clear"
              onClick={this.handlerClear}
            >
              Clear
            </button>
          )}
        </header>

        <ul>
          {goodsFromServer.map(good => (
            <li className={classNames(
              'Good',
              { 'Good--active': this.state.selectedGood === good },
            )}
            >
              {good}
              {this.state.selectedGood === good && (
                <button
                  type="button"
                  className="Good__remove"
                  onClick={this.handlerRemove}
                >
                  Remove
                </button>
              )}

              {this.state.selectedGood !== good && (
                <button
                  type="button"
                  className="Good__select"
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
