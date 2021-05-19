import React from 'react';
import classNames from 'classnames';

import './App.scss';

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
    selectedGoods: [],
  }

  componentDidMount() {
    this.setState({ selectedGoods: ['Jam'] });
  }

  setTitleText = () => {
    const goods = [...this.state.selectedGoods];
    const lastGood = goods[goods.length - 1];

    switch (goods.length) {
      case 0:
        return `No goods selected`;
      case 1:
        return `${goods[0]} is selected`;
      default:
        goods.length -= 1;

        return `${goods.join(', ')} and ${lastGood} are selected`;
    }
  }

  addGood = (good) => {
    this.setState(state => ({
      selectedGoods: [...state.selectedGoods, good],
    }));
  }

  removeGood = (good) => {
    this.setState(state => ({
      selectedGoods: state.selectedGoods.filter(curGood => curGood !== good),
    }));
  }

  clearSelectedGoods = () => {
    this.setState({ selectedGoods: [] });
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="title">
          <span className="title__text">
            {this.setTitleText()}
          </span>

          <button
            type="button"
            className={classNames(`title__button`, {
              clicked: !selectedGoods.length,
            })}
            onClick={() => this.clearSelectedGoods()}
          >
            X
          </button>
        </h1>

        <ul className="goods-list">
          {goodsFromServer.map((good) => {
            const isIncludesGood = selectedGoods.includes(good);

            return (
              <li
                key={good}
                className={classNames(`goods-list__item`, {
                  selected: isIncludesGood,
                })}
              >
                <span>{good}</span>

                <button
                  type="button"
                  className="goods-list__button"
                  onClick={() => (isIncludesGood
                    ? this.removeGood(good)
                    : this.addGood(good))}
                >
                  {isIncludesGood ? `Remove` : `Add`}
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
