/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import classNames from 'classnames';
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

type State = {
  selectedGoods: string[];
};

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  normalizeDisplayGoods = () => {
    const { selectedGoods } = this.state;
    const lengthOfGoods = selectedGoods.length;
    const magicWord = 'selected';

    switch (lengthOfGoods) {
      case 0:
        return `No goods ${magicWord}`;
      case 1:
        return `${selectedGoods[0]} is ${magicWord}`;
      case 2:
        return `${selectedGoods[0]} and ${selectedGoods[1]} are ${magicWord}`;
      default:
        return `${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods.slice(-1)} are ${magicWord}`;
    }
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>
          {this.normalizeDisplayGoods()}
        </h1>

        <button
          className={
            classNames('button',
              { hidden: selectedGoods.length === 0 })
          }
          type="button"
          onClick={() => this.setState({ selectedGoods: [] })}
        >
          X
        </button>

        <ul className="goods">
          {goodsFromServer.map(good => (
            <li
              className={
                classNames('good',
                  { selected: selectedGoods.includes(good) })
              }
              key={good}
              onClick={() => {
                if (!selectedGoods.includes(good)) {
                  this.setState({ selectedGoods: [...selectedGoods, good] });
                } else {
                  this.setState(
                    { selectedGoods: [...selectedGoods.filter(item => item !== good)] },
                  );
                }
              }}
            >
              {good}
              <button
                type="button"
                className={
                  classNames('button',
                    { add: !selectedGoods.includes(good), remove: selectedGoods.includes(good) })
                }
              >
                {selectedGoods.includes(good) ? 'Remove' : 'Add'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
