import React, { Component } from 'react';
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

class App extends Component {
  state = {
    selectedGoods: ['Jam'],
  };

  goodsSelector = (goods) => {
    switch (goods.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${goods[0]} is selected`;
      default:
        return `${goods.slice(0, goods.length - 1).join(', ')}`
        + ` and ${goods[goods.length - 1]} are selected`;
    }
  }

  removeGood = (good) => {
    this.setState(state => ({
      selectedGoods: state.selectedGoods.filter(product => product !== good),
    }));
  };

  addGood = (good) => {
    this.setState(state => ({
      selectedGoods: [...state.selectedGoods, good],
    }));
  };

  clearAllGoods = () => {
    this.setState({ selectedGoods: [] });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <div className="App__wrapper">
          <h1 className="App__header">
            {this.goodsSelector(selectedGoods)}
          </h1>
          <button
            type="button"
            className={classNames('App__clearButton', {
              'App__clearButton--disable': selectedGoods.length === 0,
            })}
            onClick={this.clearAllGoods}
          >
            ✗
          </button>
        </div>
        <ul>
          {goodsFromServer.map(good => (
            <li
              className={classNames('App__good', {
                'App__good--active': selectedGoods.includes(good),
              })}
              key={good}
            >
              <span>{good}</span>
              <button
                className={classNames('App__addButton', {
                  'App__addButton--disable': selectedGoods.includes(good),
                })}
                type="button"
                onClick={() => (
                  !selectedGoods.includes(good) && this.addGood(good)
                )}
              >
                Add
              </button>
              <button
                className={classNames('App__removeButton', {
                  'App__removeButton--disable': !selectedGoods.includes(good),
                })}
                type="button"
                onClick={() => (
                  selectedGoods.includes(good) && this.removeGood(good)
                )}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
