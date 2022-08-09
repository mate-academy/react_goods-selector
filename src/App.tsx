import { Component } from 'react';
import './App.scss';
import { v4 as uuidv4 } from 'uuid';

import goodsFromServer from './goods';

interface State {
  selectedGoods: string[];
}

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGoods: ['Jam'],
  };

  render() {
    const { selectedGoods } = this.state;
    const order = selectedGoods.reduce((prev, selectedGood, i, arr) => {
      let str = '';

      if (i === 0) {
        str += selectedGood;
      } else if (i !== arr.length - 1) {
        str += `, ${selectedGood}`;
      } else {
        str += ` and ${selectedGood}`;
      }

      return prev + str;
    }, '');

    return (
      <main className="App conteiner">
        <header className="App__header">
          <h1 className="App__title">
            { selectedGoods.length
              ? `${order} is selected`
              : 'No goods selected'}
          </h1>

          {selectedGoods.length !== 0 && (
            <button
              type="button"
              className="App__clear btn"
              onClick={() => {
                this.setState({ selectedGoods: [] });
              }}
            >
              Clear
            </button>
          )}

        </header>

        <ul className="goodsList">
          {goodsFromServer.map(good => {
            const goodClass = selectedGoods.includes(good)
              ? 'Good Good--active'
              : 'Good';

            return (
              <li
                className={goodClass}
                key={uuidv4()}
              >
                { good }

                {selectedGoods.includes(good)
                  ? (
                    <button
                      type="button"
                      className="Good__remove btn"
                      onClick={() => {
                        this.setState(
                          {
                            selectedGoods: selectedGoods
                              .filter(item => item !== good),
                          },
                        );
                      }}
                    >
                      Remove
                    </button>
                  )
                  : (
                    <button
                      type="button"
                      className="Good__select btn"
                      onClick={() => {
                        this.setState((state) => ({
                          selectedGoods: [...state.selectedGoods, good],
                        }));
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
