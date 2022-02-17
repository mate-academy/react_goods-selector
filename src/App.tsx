/* eslint-disable no-console */
import React from 'react';
import './App.scss';
import classNames from 'classnames';

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
  selectedGoods: string[];
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: ['Jam'],
  };

  adder = (word: string) => {
    if (this.state.selectedGoods.includes(word)) {
      // eslint-disable-next-line no-alert
      alert(`${word} already selected`);

      return;
    }

    this.setState(prevState => ({ selectedGoods: [...prevState.selectedGoods, word] }));
  };

  remover = (word: string) => {
    this.setState(prevState => (
      { selectedGoods: [...prevState.selectedGoods.filter(el => el !== word)] }));
  };

  display = (arr: string[]) => {
    if (arr.length === 1) {
      return `${this.state.selectedGoods.join('')} is `;
    }

    if (arr.length === 2) {
      return `${this.state.selectedGoods.join(' and ')} are `;
    }

    const goods = this.state.selectedGoods;

    return (
      `${goods.slice(0, goods.length - 1).join(', ')}`
      + ` and ${goods.slice(goods.length - 1)} are `
    );
  };

  render(): React.ReactNode {
    const { selectedGoods } = this.state;
    const AnyGoodSelected = this.state.selectedGoods.length !== 0;

    return (
      <div className="App">
        <h1 className="title">
          Selected good:
          {' '}
          {AnyGoodSelected ? (
            <>
              {this.display(selectedGoods)}
              selected
              {' '}
              <button
                type="button"
                onClick={() => {
                  this.setState({ selectedGoods: [] });
                }}
              >
                X
              </button>
            </>
          ) : (
            <>
              No any selections
            </>
          )}
        </h1>
        <ul className="list">
          {goodsFromServer.map((good) => {
            const isSelected = this.state.selectedGoods.includes(good);

            return (
              <li
                key={good}
                className={classNames({
                  selected: isSelected,
                  nonSelected: !isSelected,
                })}
              >
                {good}
                {' '}
                <button
                  type="button"
                  onClick={() => {
                    this.adder(good);
                  }}
                >
                  Add
                </button>
                {isSelected && (
                  <button
                    type="button"
                    onClick={() => {
                      this.remover(good);
                    }}
                  >
                    Remove
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
