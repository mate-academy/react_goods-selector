import React from 'react';
import './App.scss';
import classNames from 'classnames';

import goodsFromServer from './goods';

type State = {
  selectedGoods: string[];
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGoods: ['Jam'],
  };

  addSelected = (good: string) => {
    const { selectedGoods } = this.state;

    this.setState(
      { selectedGoods: [...selectedGoods, good] },
    );
  };

  removeSelected = (good: string) => {
    const { selectedGoods } = this.state;

    this.setState(
      { selectedGoods: selectedGoods.filter((el: string) => el !== good) },
    );
  };

  clearSelectedList = () => {
    this.setState({ selectedGoods: [] });
  };

  pickTitleDescription = () => {
    const { selectedGoods } = this.state;
    const listLength = selectedGoods.length;

    switch (listLength) {
      case 0:
        return 'No goods selected';

      case 1:
        return `${selectedGoods[0]} is selected`;

      default:
        return `${selectedGoods.slice(0, -1).join(', ')} and ${
          selectedGoods[listLength - 1]} are selected`;
    }
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">
            {this.pickTitleDescription()}
          </h1>

          {selectedGoods.length
            ? (
              <button
                type="button"
                className="App__clear"
                onClick={() => this.clearSelectedList()}
              >
                Clear
              </button>
            )
            : ''}
        </header>

        <ul className="App__list">
          {goodsFromServer.map(good => {
            const isActive = selectedGoods.includes(good);

            return (
              <li
                key={good}
                className={classNames('Good', { 'Good--active': isActive })}
              >
                {good}

                {isActive
                  ? (
                    <button
                      type="button"
                      className="Good__remove"
                      onClick={() => this.removeSelected(good)}
                    >
                      Remove
                    </button>
                  )
                  : (
                    <button
                      type="button"
                      className="Good__select"
                      onClick={() => this.addSelected(good)}
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
