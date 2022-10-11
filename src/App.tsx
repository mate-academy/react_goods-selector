import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';
import goodsFromServer from './goods';

type State = {
  selectedGood: string,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">
            {selectedGood
              ? `${selectedGood} is selected`
              : 'No goods selected'}
          </h1>

          {this.state.selectedGood.length > 0 && (
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
          {goodsFromServer.map(good => (
            <li
              className={classNames(
                'Good',
                { 'Good--active': good === selectedGood },
              )}
              key={good}
            >
              {good}

              {good === selectedGood && (
                <button
                  type="button"
                  className="Good__remove"
                  onClick={() => {
                    this.setState({ selectedGood: '' });
                  }}
                >
                  Remove
                </button>
              )}

              {good !== selectedGood && (
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
