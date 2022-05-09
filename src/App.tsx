/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './App.scss';
import './GoodsList.scss';

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

  switchGood = (goodName: string): void => {
    this.setState(({ selectedGoods }) => {
      const newGoods = (selectedGoods.includes(goodName))
        ? selectedGoods.filter((good) => good !== goodName)
        : [...selectedGoods, goodName];

      return {
        selectedGoods: newGoods,
      };
    });
  };

  clearGoods = () => {
    this.setState({ selectedGoods: [] });
  };

  getGoods = (): string => {
    const { selectedGoods } = this.state;

    return (selectedGoods.length > 2)
      ? [
        selectedGoods.slice(0, -1).join(', '),
        selectedGoods.slice(-1),
      ].join(' and ')
      : selectedGoods.join(' and ');
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="app">
        <h1 className="app__title">
          {
            (selectedGoods.length === 0)
              ? 'No goods'
              : this.getGoods()
          }

          {
            (selectedGoods.length > 0) && (
              <>
                <button
                  className="app__button"
                  type="button"
                  onClick={() => {
                    this.clearGoods();
                  }}
                >
                  Clear
                </button>
              </>
            )
          }
        </h1>
        <ul className="goodsList">
          {goodsFromServer.map(good => (
            <li
              className={`goodsList__item ${
                selectedGoods.includes(good)
                  ? 'goodsList__selected'
                  : ''
              }`}
              key={good}
            >
              <span className="goodsList__goods">
                {good}
              </span>
              <button
                type="button"
                className={`goodsList__button ${
                  selectedGoods.includes(good)
                    ? 'goodsList__selectedButton'
                    : ''
                }`}
                onClick={() => {
                  this.switchGood(good);
                }}
              >
                {
                  selectedGoods.includes(good)
                    ? 'Remove'
                    : 'Select'
                }
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
