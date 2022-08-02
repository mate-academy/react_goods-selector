import { Component } from 'react';
import './App.scss';

import goodsFromServer from './goods';

type State = {
  selectedGoods: string[],
};

export class App extends Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  render() {
    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">
            {this.state.selectedGoods.length ? `${this.state.selectedGoods.join(', ')} is selected` : 'No goods selected'}
          </h1>

          {this.state.selectedGoods.length > 0 && (
            <button
              type="button"
              className="
                App__clear
                button
                is-dark
                is-small
                is-rounded
                is-outlined
              "
              onClick={() => {
                this.setState({ selectedGoods: [] });
              }}
            >
              Clear
            </button>
          )}
        </header>

        <ul>
          {goodsFromServer.map(good => {
            return (
              <li className={`Good ${this.state.selectedGoods.includes(good) ? 'Good--active' : ''}`} key={good}>
                {good}

                {this.state.selectedGoods.includes(good) && (
                  <button
                    type="button"
                    className="
                      Good__remove
                      button
                      is-dark
                      is-small
                      is-rounded
                      is-outlined
                    "
                    onClick={() => {
                      this.setState(state => {
                        return {
                          selectedGoods: state.selectedGoods
                            .filter(currGood => currGood !== good),
                        };
                      });
                    }}
                  >
                    Remove
                  </button>
                )}

                {!this.state.selectedGoods.includes(good) && (
                  <button
                    type="button"
                    className="
                      Good__select
                      button
                      is-dark
                      is-small
                      is-rounded
                      is-outlined
                    "
                    onClick={() => {
                      this.setState(state => {
                        return {
                          selectedGoods: state.selectedGoods.concat([good]),
                        };
                      });
                    }}
                  >
                    Select
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}
