import React from 'react';
import classNames from 'classnames';
import './App.scss';

import goodsFromServer from './goods';

type State = {
  selectedGoods: string[],
};

export class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: ['Jam'],
  };

  addGood = (good: string) => {
    this.setState((prevState) => (
      { selectedGoods: [...prevState.selectedGoods, good] }
    ));
  };

  removeGood = (good: string) => {
    this.setState((prevState) => (
      { selectedGoods: prevState.selectedGoods.filter(goods => goods !== good) }
    ));
  };

  buttonHandler = (good: string) => {
    if (this.state.selectedGoods.includes(good)) {
      return this.removeGood(good);
    }

    return this.addGood(good);
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">
            {selectedGoods.length > 0
              ? `Selected: ${selectedGoods.join(', ')}`
              : 'Nothing is selected'}
          </h1>

          <button
            type="button"
            className="App__button"
            onClick={() => {
              this.setState({ selectedGoods: [] });
            }}
          >
            Clear
          </button>

        </header>

        <ul className="Goods">
          {goodsFromServer.map(good => (
            <li
              className={classNames(
                'Goods__item',
                {
                  'Goods__item--selected': selectedGoods.includes(good),
                },
              )}
              key={good}
            >
              <div className="Good__name">{good}</div>

              <button
                type="button"
                className="'Goods__button'"
                onClick={() => this.buttonHandler(good)}
              >
                {!selectedGoods.includes(good) ? 'Select' : 'Remove'}
              </button>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
