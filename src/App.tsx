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

// eslint-disable-next-line
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

  clearSelectedGoods = () => {
    this.setState({ selectedGoods: [] });
  };

  getGoodsString = (): string => {
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
      <div className="App">
        <h1 className="Title">
          {
            (selectedGoods.length === 0)
              ? 'No goods'
              : this.getGoodsString()
          }
          &nbsp;selected

          {
            (selectedGoods.length > 0) && (
              <>
                &nbsp;
                <button
                  type="button"
                  className="Button"
                  onClick={() => {
                    this.clearSelectedGoods();
                  }}
                >
                  Clear
                </button>
              </>
            )
          }
        </h1>
        <ul className="GoodsList">
          {goodsFromServer.map(good => (
            <li
              className={`GoodsList__item ${
                selectedGoods.includes(good)
                  ? 'GoodsList__selected'
                  : ''
              }`}
              key={good}
            >
              <span className="GoodsList__goodName">
                {good}
              </span>

              <button
                type="button"
                className={`GoodsList__button ${
                  selectedGoods.includes(good)
                    ? 'GoodsList__selectedButton'
                    : ''
                }`}
                onClick={() => {
                  this.switchGood(good);
                }}
              >
                {
                  (selectedGoods.includes(good))
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
