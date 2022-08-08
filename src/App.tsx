import React from 'react';
import './App.scss';
import 'bulma/css/bulma.min.css';

import goodsFromServer from './goods';

type State = {
  selectedGoods: string[],
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <main className="App table">
        <header className="App__header">
          <h1 className="App__title">
            {selectedGoods.length
              ? `${selectedGoods.join(', ')} is selected`
              : 'No goods selected'}
          </h1>

          {selectedGoods.length > 0 && (
            <button
              type="button"
              className="
                App__clear
                button
                is-info
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
              <li
                key={good}
                className={selectedGoods.includes(good)
                  ? 'Good Good--active'
                  : 'Good'}
              >
                {good}

                {selectedGoods.includes(good) && (
                  <button
                    type="button"
                    className="
                      Good__remove
                      button
                      is-danger
                    "
                    onClick={() => {
                      this.setState(state => {
                        return {
                          selectedGoods: state.selectedGoods
                            .filter(currentGood => currentGood !== good),
                        };
                      });
                    }}
                  >
                    Remove
                  </button>
                )}

                {!selectedGoods.includes(good) && (
                  <button
                    type="button"
                    className="
                      Good__select
                      button
                      is-success
                    "
                    onClick={() => {
                      this.setState(state => {
                        return {
                          selectedGoods: state.selectedGoods
                            .concat([good]),
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
