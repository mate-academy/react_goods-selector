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

  removeEl = (list: string[], good: string) => {
    return list.filter((el: string) => el !== good);
  };

  titleDescription = (list: string[]) => {
    switch (list.length) {
      case 0:
        return 'No goods selected';

      case 1:
        return `${list[0]} is selected`;

      default:
        return `${list.slice(0, -1).join(', ')} and ${list[list.length - 1]} are selected`;
    }
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">
            {this.titleDescription(selectedGoods)}
          </h1>

          {selectedGoods.length
            ? (
              <button
                type="button"
                className="App__clear"
                onClick={() => {
                  this.setState({ selectedGoods: [] });
                }}
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
                      onClick={() => {
                        this.setState(
                          { selectedGoods: this.removeEl(selectedGoods, good) },
                        );
                      }}
                    >
                      Remove
                    </button>
                  )
                  : (
                    <button
                      type="button"
                      className="Good__select"
                      onClick={() => {
                        this.setState(
                          { selectedGoods: [...selectedGoods, good] },
                        );
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
