import React from 'react';
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
    document.querySelector('.Good--active')?.classList.remove('Good--active');
    this.setState({ selectedGood: '' });
  };

  handlerRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.parentElement?.classList.remove('Good--active');
    this.setState({ selectedGood: '' });
  };

  select = (event: React.MouseEvent<HTMLButtonElement>, good: string) => {
    document.querySelector('.Good--active')?.classList.remove('Good--active');
    event.currentTarget.parentElement?.classList.add('Good--active');
    this.setState({ selectedGood: good });
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
            <li className="Good">
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
                  onClick={(event) => {
                    this.select(event, good);
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
