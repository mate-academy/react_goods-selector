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
      <main className="App container">
        <header className="App__header mt-4 mb-4">
          <h1 className="App__title">
            {this.state.selectedGood
              ? `${this.state.selectedGood} is selected`
              : 'No goods selected'}
          </h1>

          {this.state.selectedGood && (
            <button
              type="button"
              className="App__clear button is-danger"
              onClick={() => this.setState({
                selectedGood: '',
              })}
            >
              Clear
            </button>
          )}
        </header>

        <ul className="notification is-link">
          {goodsFromServer.map(product => (
            <li
              className={`pt-1 pb-1 columns Good ${product === this.state.selectedGood
                ? 'Good--active'
                : ''}`}
              key={product}
            >
              <span
                className="column is-half"
              >
                {product}
              </span>
              {product === this.state.selectedGood
                ? (
                  <button
                    type="button"
                    className="Good__remove button is-danger"
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
                    className="Good__select button is-success"
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
