/* eslint-disable react/no-access-state-in-setstate */
import React from 'react';
import './App.scss';
import 'bulma/css/bulma.min.css';

import goodsFromServer from './goods';

type State = {
  selectedGoods: string[]
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <main className="App">
        <header className="App__header block breadcrumb is-centered">
          <h1 className="App__title">
            {!selectedGoods.length && 'No goods selected'}
            {selectedGoods.length === 1 && `${selectedGoods[0]} is selected`}
            {selectedGoods.length === 2 && `${selectedGoods.join(', ')} are selected`}
            {selectedGoods.length > 2 && `${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods[selectedGoods.length - 1]} are selected`}
          </h1>

          {selectedGoods.length > 0 && (
            <button
              type="button"
              className="App__clear button is-danger is-rounded"
              onClick={() => {
                this.setState({ selectedGoods: [] });
              }}
            >
              Clear
            </button>
          )}
        </header>

        <ul className="GoodsList">
          {goodsFromServer.map(good => {
            return (
              <li
                key={good}
                className={
                  !selectedGoods.includes(good)
                    ? 'Good block'
                    : 'Good--active block'
                }
              >
                {good}
                {selectedGoods.includes(good) ? (
                  <button
                    type="button"
                    className="Good--delete button is-danger is-rounded"
                    onClick={() => {
                      this.setState({
                        selectedGoods: this.state.selectedGoods
                          .filter(el => el !== good),
                      });
                    }}
                  >
                    Delete
                  </button>
                )

                  : (
                    <button
                      type="button"
                      className="Good--select button is-success is-rounded"
                      onClick={() => {
                        this.setState({
                          selectedGoods: [...selectedGoods, good],
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
