import React from 'react';
import className from 'classnames';
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

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    selectedGoods: ['Jam'],
  };

  render(): React.ReactNode {
    const { selectedGoods, goods } = this.state;

    return (
      <div className="app">
        <h1 className="title">
          <button
            className={className('button', 'button--close', { buttonVisibility: selectedGoods.length === 0 })}
            type="button"
            onClick={() => {
              this.setState({ selectedGoods: [] });
            }}
          >
            Clear all
          </button>
          {selectedGoods.length > 0
            ? `${selectedGoods[selectedGoods.length - 1]} selected`
            : 'No goods selected'}
        </h1>
        <ul className="app__list">
          {selectedGoods.map(good => (
            <li className="app__item" key={good}>
              <div className="sheet">
                <div className="sheet__good">{good}</div>
                <button
                  className={className('button', { buttonVisibility: !selectedGoods.includes(good) })}
                  type="button"
                  onClick={() => {
                    this.setState({ selectedGoods: selectedGoods.filter(el => el !== good) });
                  }}
                >
                  X
                </button>
              </div>
            </li>
          ))}
        </ul>

        <ul className="app__list">
          {goods.map((good) => (
            <li key={good} className="app__item">
              <div className="sheet">
                <div className="sheet__good">{good}</div>
                <button
                  className={className('button', { buttonVisibility: selectedGoods.includes(good) })}
                  type="button"
                  onClick={() => {
                    this.setState({ selectedGoods: [...selectedGoods, good] });
                  }}
                >
                  select
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
