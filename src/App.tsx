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

export class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  addGoods = (item: string) => {
    this.setState(({ selectedGoods }) => {
      const addedGoods = (selectedGoods.includes(item))
        ? selectedGoods.filter((el) => el !== item)
        : [...selectedGoods, item];

      return {
        selectedGoods: addedGoods,
      };
    });
  };

  makeSelectedGoodsString = () => {
    const { selectedGoods } = this.state;

    return (selectedGoods.length > 2)
      ? [
        selectedGoods.slice(0, -1).join(', '),
        selectedGoods.slice(-1),
      ].join(' and ')
      : selectedGoods.join(' and ');
  };

  clearSelectedGoods = () => {
    this.setState({ selectedGoods: [] });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="Title">
          {
            (selectedGoods.length === 0)
              ? 'No goods'
              : this.makeSelectedGoodsString()
          }
          &nbsp;selected

          {(selectedGoods.length > 1) && (
            <button
              type="button"
              className="ClearButton"
              onClick={() => {
                this.clearSelectedGoods();
              }}
            >
              CLEAR
            </button>
          )}
        </h1>

        <ul className="GoodsList">
          {goodsFromServer.map((item) => (
            <li
              className={`GoodsList__item ${
                selectedGoods.includes(item)
                  ? 'GoodsList__selectedItem'
                  : ''
              }`}
              key={item}
            >
              <span className="GoodsList__itemName">
                {item}
              </span>

              <button
                type="button"
                className={`GoodsList__button ${
                  selectedGoods.includes(item)
                    ? 'GoodsList__selectedButton'
                    : ''
                }`}
                onClick={() => {
                  this.addGoods(item);
                }}
              >
                {
                  (selectedGoods.includes(item))
                    ? 'REMOVE'
                    : 'SELECT'
                }
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
