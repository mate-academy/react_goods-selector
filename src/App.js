import React from 'react';
import './App.scss';
import classNames from 'classnames';

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
    selectedGoods: ['Jam'],
  }

  addGood = (good) => {
    this.setState(state => ({
      selectedGoods: [...state.selectedGoods, good],
    }));
  }

  removeGood = (good) => {
    this.setState(state => ({
      selectedGoods: state.selectedGoods.filter(el => el !== good),
    }));
  }

  clearAll = () => {
    this.setState(state => ({
      selectedGoods: [],
    }));
  }

  selectTitle = () => {
    const goodsArr = [...this.state.selectedGoods];
    const lengthGoods = goodsArr.length;
    const lastGood = goodsArr[lengthGoods - 1];

    switch (lengthGoods) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${goodsArr[0]} is selected`;
      default:
        goodsArr.length = lengthGoods - 1;

        return `${goodsArr.join(', ')} and ${lastGood} are selected`;
    }
  }

  isInList = good => (this.state.selectedGoods.includes(good));

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          <span>
            {this.selectTitle()}
          </span>
          { selectedGoods.length !== 0
          && (
          <button
            type="button"
            className="App__button"
            onClick={() => {
              this.clearAll();
            }}
          >
            Clear all
          </button>
          )
        }
        </h1>
        <ul className="goodsList">
          {goodsFromServer.map(good => (
            <li
              className={
                  classNames(`goodsList__item`,
                    { goodsList__color: this.isInList(good) })
                }
              key={good}
            >
              {good}
              <button
                type="button"
                className="goodsList__button"
                onClick={() => (
                  this.isInList(good)
                    ? this.removeGood(good)
                    : this.addGood(good)
                )}
              >
                {!this.isInList(good) ? 'Selected' : 'remove'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
