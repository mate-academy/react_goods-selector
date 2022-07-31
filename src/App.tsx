import React from 'react';
import './App.scss';

import goodsFromServer from './goods';

type State = {
  selectedGood: string,
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  render() {
    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">
            {this.state.selectedGood}
            {' '}
            is selected
          </h1>
          {
            this.state.selectedGood !== 'No good'
              ? (
                <button
                  type="button"
                  className="App__clear"
                  onClick={() => {
                    this.setState({ selectedGood: 'No good' });
                  }}
                >
                  Clear
                </button>
              )
              : ''
          }
        </header>

        <ul>
          {
            goodsFromServer.map((good) => (
              <li className={
                this.state.selectedGood === good
                  ? 'Good Good--active'
                  : ' Good '
              }
              >
                {good}

                {
                  this.state.selectedGood === good
                    ? (
                      <button
                        type="button"
                        className="Good__remove"
                        onClick={() => {
                          this.setState({ selectedGood: 'No good' });
                        }}
                      >
                        Remove
                      </button>
                    )

                    : (
                      <button
                        type="button"
                        className="Good__select"
                        onClick={() => {
                          this.setState({ selectedGood: good });
                        }}
                      >
                        Select
                      </button>
                    )
                }
              </li>
            ))
          }
        </ul>
      </main>
    );
  }
}
