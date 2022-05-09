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
  selectedGoods: string[],
};

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  addGoods = (goodsName: string) => {
    this.setState(({ selectedGoods }) => {
      const newGoods = (selectedGoods.includes(goodsName))
        ? selectedGoods.filter(el => el !== goodsName)
        : [...selectedGoods, goodsName];

      return {
        selectedGoods: newGoods,
      };
    });
  };

  addTitle = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${selectedGoods[0]} is selected`;
      default:
        return `${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods.at(-1)}`;
    }
  };

  removeGoods = () => {
    this.setState({ selectedGoods: [] });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="app">
        <div className="app__title">
          {
            (selectedGoods.length === 0)
              ? 'No goods'
              : this.addTitle()
          }
        </div>

        {
          (selectedGoods.length > 0) && (
            <>
              <button
                type="button"
                className="app__clearButton"
                onClick={() => {
                  this.removeGoods();
                }}
              >
                Clear
              </button>
            </>
          )
        }

        <ul className="goods">
          {goodsFromServer.map(goods => (
            <li
              className="goods__item"
              key={goods}
            >
              <span className="goods__name">
                {goods}
              </span>

              <button
                type="button"
                className={`goods__button ${
                  selectedGoods.includes(goods)
                    ? 'goods__button--selected'
                    : ''
                }`}
                onClick={() => {
                  this.addGoods(goods);
                }}
              >
                {
                  (selectedGoods.includes(goods))
                    ? 'remove'
                    : 'select'
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
