/* eslint-disable max-len */
import classNames from 'classnames';
import React from 'react';
import './App.scss';

import goodsFromServer from './goods';

type State = {
  selectedGood: string[];
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: ['Jam'],
  };

  h1Content = (stackOfGoods: string[]) => {
    switch (stackOfGoods.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${stackOfGoods} is selected`;
      default:
        return `${stackOfGoods.slice(0, -1).join(', ')} and ${stackOfGoods[stackOfGoods.length - 1]} are selected`;
    }
  };

  clear = () => {
    this.setState({ selectedGood: [] });
  };

  remove = (
    good: string,
  ) => {
    this.setState(prevState => ({
      selectedGood: prevState.selectedGood.filter(oneGood => oneGood !== good),
    }));
  };

  highlightAndSave = (
    good: string,
  ) => {
    this.setState(prevState => ({
      selectedGood: [...prevState.selectedGood, good],
    }));
  };

  render(): React.ReactNode {
    const { selectedGood } = this.state;
    const content = this.h1Content(selectedGood);

    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">
            {content}
          </h1>
          {selectedGood.length > 0 && (
            <button
              type="button"
              className="App__clear"
              onClick={() => this.clear()}
              disabled={!selectedGood}
            >
              Clear
            </button>
          )}

        </header>

        <ul>
          {goodsFromServer.map(good => (
            <li
              key={good}
              className="Good"
            >
              <span
                className={classNames(
                  'Good',
                  { 'Good--active': selectedGood.includes(good) },
                )}
              >
                {good}
              </span>
              <button
                type="button"
                className="Good__select"
                onClick={() => {
                  this.highlightAndSave(good);
                }}
              >
                Select
              </button>
              <button
                type="button"
                className="Good__remove"
                onClick={() => this.remove(good)}
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
