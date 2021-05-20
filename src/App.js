import React, { Component } from 'react';
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

  render() {
    const { selectedGoods } = this.state;

    function goodsSelector(goods) {
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

    const removeGood = (goods, good) => {
      this.setState({ selectedGoods: goods
        .filter(product => product !== good) });
    };

    const addGood = (goods, good) => {
      this.setState({ selectedGoods: [...goods, good] });
    };

    return (
      <div className="App">
        <h1 className="App__header">
          {goodsSelector(selectedGoods)}
        </h1>
        <ul>
          {goodsFromServer.map(good => (
            <li
              className={
                selectedGoods.includes(good)
                  ? 'App__good App__good--active'
                  : 'App__good'
              }
              key={good}
            >
              <span>{good}</span>
              <button
                className="App__button"
                type="button"
                onClick={() => (
                  selectedGoods.includes(good)
                    ? removeGood(selectedGoods, good)
                    : addGood(selectedGoods, good)
                )}
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
