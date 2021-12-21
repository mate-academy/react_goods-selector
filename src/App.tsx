/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-console */

import React from 'react';

import './App.scss';

function formatMessage(arr: string[]):string {
  switch (true) {
    case arr.length === 0:
      return 'No goods selected';
    case arr.length === 1:
      return `${arr[0]} is selected`;
    default:
      return `${arr.slice(0, -1).join(',')} and ${arr[arr.length - 1]} are selected`;
  }
}

const goodsFromServer: string[] = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

type State = {
  selectedGoods: string[],
};

export default class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: [],
  };

  handlerAdd = (event: React.MouseEvent<HTMLElement>, good: string) => {
    const element = event.target as HTMLElement;

    if (!element.classList.contains('button-remove')
      && !this.state.selectedGoods.includes(good)) {
      this.setState((prevState) => ({
        ...prevState,
        selectedGoods: [...prevState.selectedGoods, good],
      }));
    }
  };

  handlerRemove(event: React.MouseEvent<HTMLElement>, good: string) {
    const element = event.target as HTMLElement;

    if (element.classList.contains('button-remove')
      && this.state.selectedGoods.includes(good)) {
      this.setState((prevState) => ({
        ...prevState,
        selectedGoods: [...prevState.selectedGoods.filter(item => item !== good)],
      }));
    }
  }

  render(): JSX.Element {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <div className="container">
          <h1 className="title">
            {formatMessage(selectedGoods)}
          </h1>
          <ul className="good-list">
            {goodsFromServer.map((good, index) => (
              <li
                key={index.toString(10)}
                onClick={(event) => this.handlerAdd(event, good)}
                className={
                  this.state.selectedGoods.includes(good)
                    ? 'good-list__item active'
                    : 'good-list__item'
                }
              >
                <h2>
                  {good}
                </h2>
                <section className="buttons">
                  <button
                    type="button"
                    className="button button-add"
                  >
                    Add
                  </button>
                  <button
                    type="button"
                    className="button button-remove"
                    onClick={(event) => this.handlerRemove(event, good)}
                  >
                    Remove
                  </button>
                </section>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
