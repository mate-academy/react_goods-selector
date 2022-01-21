/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import './App.scss';

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

interface State {
  goods: string[],
  selectedGoods: string[]
}

export class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    selectedGoods: ['Jam'],
  };

  selectGood = (good: string) => {
    this.setState((state) => ({ selectedGoods: [...state.selectedGoods, good] }));
  };

  removeGood = (good: string) => {
    this.setState((state) => (
      { selectedGoods: state.selectedGoods.filter(el => el !== good) }
    ));
  };

  removeGoods = () => {
    this.setState({ selectedGoods: [] });
  };

  getGoods = () => {
    const { selectedGoods } = this.state;

    if (selectedGoods.length > 1) {
      return `${selectedGoods.join(', ')} are selected`;
    }

    return `${selectedGoods.join(', ')} is selected`;
  };

  render() {
    const { selectedGoods, goods } = this.state;

    return (
      <div className="app">
        <h1 className="title">
          {selectedGoods.length > 0
            ? this.getGoods()
            : 'No goods selected'}
        </h1>

        {selectedGoods.length !== 0 && (
          <button
            type="button"
            className="button button--big"
            onClick={this.removeGoods}
          >
            Clear All
          </button>
        )}

        <div className="wrapper">
          <ul className="app__list">
            {selectedGoods.map(good => (
              <li className="app__item" key={good}>
                <div className="sheet">
                  <div className="sheet__good">{good}</div>
                  {selectedGoods.includes(good) && (
                    <button
                      type="button"
                      className="button"
                      onClick={() => {
                        this.removeGood(good);
                      }}
                    >
                      remove
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <ul className="app__list">
            {goods.map((good) => (
              <li key={good} className="app__item">
                <div className="sheet">
                  <div className="sheet__good">{good}</div>
                  {!selectedGoods.includes(good)
                    && (
                      <button
                        type="button"
                        className="button"
                        onClick={() => {
                          this.selectGood(good);
                        }}
                      >
                        select
                      </button>
                    )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
