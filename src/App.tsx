import { Component } from 'react';
import './App.scss';

import goodsFromServer from './goods';

type State = {
  goods: string[],
  selectedGood: string,
};

export class App extends Component<{}, State> {
  state = {
    goods: [],
    selectedGood: goodsFromServer[8],
  };

  componentDidMount() {
    this.setState({ goods: goodsFromServer });
  }

  render() {
    const { goods, selectedGood } = this.state;

    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">
            {selectedGood.length > 0 ? `${selectedGood} is selected` : 'No goods selected'}
          </h1>
          {selectedGood.length > 0
          && (
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
          {goods.map(good => (
            <li
              className={good === selectedGood ? 'Good Good--active' : 'Good'}
            >
              {selectedGood !== good
                && (
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
              {selectedGood === good
                && (
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
              {good}
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
