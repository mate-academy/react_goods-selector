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

export class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    selectedGoods: ['Jam'],
  };

  getButtonWith = (text: string, setState: string[]) => {
    return (
      <button
        className="button"
        type="button"
        onClick={() => {
          this.setState({ selectedGoods: setState });
        }}
      >
        {text}
      </button>
    );
  };

  render(): React.ReactNode {
    const { selectedGoods, goods } = this.state;

    return (
      <div className="app">
        <h1 className="title">
          {selectedGoods.length !== 0 && this.getButtonWith('Clear all', [])}
          {selectedGoods.length > 0
            ? `${selectedGoods[selectedGoods.length - 1]} selected`
            : 'No goods selected'}
        </h1>
        <ul className="app__list">
          {selectedGoods.map(good => (
            <li className="app__item" key={good}>
              <div className="sheet">
                <div className="sheet__good">{good}</div>
                {selectedGoods.includes(good) && this.getButtonWith('X', selectedGoods.filter(el => el !== good))}
              </div>
            </li>
          ))}
        </ul>

        <ul className="app__list">
          {goods.map((good) => (
            <li key={good} className="app__item">
              <div className="sheet">
                <div className="sheet__good">{good}</div>
                {!selectedGoods.includes(good) && this.getButtonWith('select', [...selectedGoods, good])}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
