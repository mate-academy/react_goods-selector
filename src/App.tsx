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

  getTitle = (): string => {
    const lengthOfSelected = this.state.selectedGoods.length;

    if (!lengthOfSelected) {
      return 'No goods selected';
    }

    if (lengthOfSelected === 1) {
      return `${this.state.selectedGoods[0]} is selected`;
    }

    const selectedWithoutLast = [...this.state.selectedGoods];

    const lastSelected = selectedWithoutLast.pop();

    return `${selectedWithoutLast.join(', ')} and ${lastSelected} are selected`;
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <main className="App table">
        <header className="App__header">
          <h1 className="App__title">
            { this.getTitle() }
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

                {selectedGoods.includes(good)
                  ? (
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
                  )

                  : (
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
