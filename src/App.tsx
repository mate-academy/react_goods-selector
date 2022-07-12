import { Component } from 'react';
import ClassNames from 'classnames';
import './App.scss';

import goodsFromServer from './goods';

type State = {
  selectedGoods: string[],
};

export class App extends Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  isOrAre = () => {
    return this.state.selectedGoods.length === 1
      ? 'is'
      : 'are';
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">
            {selectedGoods.length === 0
              ? 'No goods selected'
              : `${selectedGoods.toString()} ${this.isOrAre()} selected`}
          </h1>

          <button
            type="button"
            className="App__clear"
            onClick={() => this.setState({ selectedGoods: [] })}
            hidden={selectedGoods.length === 0}
          >
            Clear
          </button>
        </header>

        <ul>
          {goodsFromServer.map(good => (
            <li
              className={ClassNames(
                'Good',
                { 'Good--active': selectedGoods.includes(good) },
              )}
            >
              {good}
              <button
                type="button"
                className="Good__select"
                onClick={() => this.setState((prevState) => {
                  return {
                    selectedGoods: [...prevState.selectedGoods, good],
                  };
                })}
                hidden={selectedGoods.includes(good)}
              >
                Select
              </button>

              <button
                type="button"
                className="Good__remove"
                onClick={() => this.setState({
                  selectedGoods: selectedGoods.filter(x => x !== good),
                })}
                hidden={!selectedGoods.includes(good)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
