import React from 'react';
import cn from 'classnames';

import './App.scss';
import { Button } from './components/Button';

const goodsFromServer = [
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

class App extends React.Component {
  state = {
    goods: goodsFromServer.reduce((goodsObj, good) => ({
      ...goodsObj,
      [good]: false,
    }), {}),
  };

  componentDidMount() {
    this.setState(state => ({
      goods: {
        ...state.goods,
        Jam: true,
      },
    }));
  }

  addGood = (good) => {
    this.setState(state => ({
      goods: {
        ...state.goods,
        [good]: true,
      },
    }));
  }

  removeGood = (good) => {
    this.setState(state => ({
      goods: {
        ...state.goods,
        [good]: false,
      },
    }));
  }

  clearSelection = () => {
    this.setState(state => ({
      goods: Object.keys(state.goods).reduce((goodsObj, good) => ({
        ...goodsObj,
        [good]: false,
      }), {}),
    }));
  };

  getSelectedGoodsString = goods => (
    Object.entries(goods)
      .filter(([, isSelected]) => isSelected)
      .map(([good]) => good)
      .reduce((total, good) => ` ${total}, ${good}`)
  );

  render() {
    const { goods } = this.state;
    const haveSelectedGoods = Object.values(goods).some(v => v);

    return (
      <div className="App">
        <header className="App__header">
          { haveSelectedGoods && (
            <Button
              clickHandler={() => {
                this.clearSelection();
              }}
              label="X"
            />
          )}
          <h1 className="App__title">
            {
              haveSelectedGoods
                ? `Selected goods: ${this.getSelectedGoodsString(goods)}`
                : 'No goods selected'
            }
          </h1>
        </header>
        <ul className="GoodsList">
          {Object.entries(goods).map(([good, isSelected]) => (
            <li
              key={good}
              className={cn(
                'GoodsList__item',
                isSelected && 'GoodsList__item--selected',
              )}
            >
              {good}
              <Button
                className="GoodsList__button"
                clickHandler={() => {
                  if (isSelected) {
                    this.removeGood(good);
                  } else {
                    this.addGood(good);
                  }
                }}
                label={isSelected ? 'Remove' : 'Add'}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
