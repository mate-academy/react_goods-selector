import { Component } from 'react';
import classNames from 'classnames';
import './App.scss';
import goodsFromServer from './goods';

type State = {
  selectedGood: string,
};

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  selectGood = (good: string) => {
    this.setState({ selectedGood: good });
  };

  removeGood = () => {
    this.setState({ selectedGood: '' });
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

          {selectedGood && (
            <button
              type="button"
              className="App__clear"
              onClick={this.removeGood}
            >
              Clear
            </button>
          )}
        </header>

        <ul>
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={classNames(
                'Good',
                {
                  'Good--active': selectedGood === good,
                },
              )}
            >
              {good}
              {selectedGood === good
                ? (
                  <button
                    type="button"
                    className="Good__remove"
                    onClick={this.removeGood}
                  >
                    Remove
                  </button>
                )
                : (
                  <button
                    type="button"
                    className="Good__select"
                    onClick={() => {
                      this.selectGood(good);
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
