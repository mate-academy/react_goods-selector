import { Component } from 'react';
import './App.scss';

import goodsFromServer from './goods';

type State = {
  selectedGood: string,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
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
              onClick={() => this.setState({
                selectedGood: '',
              })}
            >
              Clear
            </button>
          )}
        </header>

        <ul>
          {goodsFromServer.map(product => (
            <li
              className={`Good ${product === this.state.selectedGood
                ? 'Good--active'
                : ''}`}
              key={product}
            >
              {product}
              {product === this.state.selectedGood
                ? (
                  <button
                    type="button"
                    className="Good__remove"
                    onClick={() => this.setState({
                      selectedGood: '',
                    })}
                  >
                    Remove
                  </button>
                )
                : (
                  <button
                    type="button"
                    className="Good__select"
                    onClick={() => this.setState({
                      selectedGood: product,
                    })}
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
