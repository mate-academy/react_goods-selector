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

  addOrRemoveGood = (item: string) => {
    this.setState(({ selectedGoods }) => {
      const chosenGoods = (selectedGoods.includes(item))
        ? selectedGoods.filter((el) => el !== item)
        : [...selectedGoods, item];

      return {
        selectedGoods: chosenGoods,
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
              onClick={this.clearSelectedGoods}
            >
              CLEAR
            </button>
          )}
        </h1>

        <ul className="GoodsList">
          {goodsFromServer.map((item) => {
            const selectedGoodsIncludesItem = selectedGoods.includes(item);

            return (
              <li
                className={`GoodsList__item ${
                  selectedGoodsIncludesItem
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
                    selectedGoodsIncludesItem
                      ? 'GoodsList__selectedButton'
                      : ''
                  }`}
                  onClick={() => {
                    this.addOrRemoveGood(item);
                  }}
                >
                  {
                    (selectedGoodsIncludesItem)
                      ? 'REMOVE'
                      : 'SELECT'
                  }
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
