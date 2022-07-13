/* eslint-disable no-console */
import React from 'react';
import './App.scss';
import goodsFromServer from './goods';

console.log(goodsFromServer);

type State = {
  selectedGood: string[],
};

function setTitle(selectedGoods: string[]): string {
  if (!selectedGoods.length) {
    return 'No goods selected';
  }

  if (selectedGoods.length === 1) {
    return `${selectedGoods[0]} is selected`;
  }

  return `${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods.slice(-1)} are selected`;
}

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: ['Jam'],
  };

  addGood = (goods: string) => {
    this.setState((state) => ({
      selectedGood: [...state.selectedGood, goods],
    }));
  };

  removeGood = (goods: string) => {
    this.setState((state) => ({
      selectedGood: state.selectedGood
        .filter(selectGood => (selectGood !== goods)),
    }));
  };

  clearGood = () => {
    this.setState({ selectedGood: [] });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          {setTitle(selectedGood)}
        </h1>
        <button
          type="button"
          className={selectedGood.length
            ? 'App__clear button is-warning is-focused'
            : 'App__clear--hidden'}
          onClick={() => {
            this.clearGood();
          }}
        >
          Clear
        </button>
        <ul className="App__list">
          {goodsFromServer.map(good => (
            <li className="App__element" key={good}>
              <p>{good}</p>
              {!selectedGood.includes(good)
                ? (
                  <button
                    type="button"
                    className="App__element button is-success"
                    onClick={() => {
                      this.addGood(good);
                    }}
                  >
                    Select
                  </button>
                )
                : (
                  <button
                    type="button"
                    className="App__element button is-danger"
                    onClick={() => {
                      this.removeGood(good);
                    }}
                  >
                    Remove
                  </button>
                )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
