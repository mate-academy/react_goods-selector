import React from 'react';
import { uuid } from 'uuidv4';
import './App.scss';
import classNames from 'classnames';
import goodsFromServer from './goods';

interface State {
  selectedGood: string;
}

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  highlightSelected = (good: string) => {
    const { selectedGood } = this.state;

    return classNames(
      'Good',
      { 'Good--active': selectedGood === good },
    );
  };

  removeSelectedGood() {
    this.setState({ selectedGood: '' });
  }

  addSelectedGood(good: string) {
    this.setState({ selectedGood: good });
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">
            {selectedGood
              ? (`${selectedGood} is selected`)
              : 'No goods selected'}
          </h1>
          {selectedGood
            && (
              <button
                type="button"
                className="App__clear"
                onClick={this.removeSelectedGood}
              >
                Clear
              </button>
            )}
        </header>

        <ul>
          {goodsFromServer.map(good => (
            <li
              className={this.highlightSelected(good)}
              key={uuid()}
            >
              {good}
              { selectedGood === good
                ? (
                  <button
                    type="button"
                    className="Good__remove"
                    onClick={this.removeSelectedGood}
                  >
                    Remove
                  </button>
                )
                : (
                  <button
                    type="button"
                    className="Good__select"
                    onClick={() => this.addSelectedGood}
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
