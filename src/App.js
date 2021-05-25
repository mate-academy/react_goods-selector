import React from 'react';
import cn from 'classnames';

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
    selectedGoods: ['Jam'],
  };

  writeTitle = (selectedGoods) => {
    const goods = [...selectedGoods];
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
      selectedGoods: state
        .selectedGoods
        .filter(currentGood => currentGood !== good),
    }));
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>
          <button
            className={cn({ 'show-button': !selectedGoods.length })}
            type="button"
            onClick={() => {
              this.setState({ selectedGoods: [] });
            }}
          >
            x
          </button>
          {this.writeTitle(selectedGoods)}
        </h1>
        <ul>
          {goodsFromServer.map(good => (
            <li key={good}>
              <button
                type="button"
                onClick={() => (
                  selectedGoods.includes(good)
                    ? this.removeGood(good)
                    : this.addGood(good)
                )}
              >
                {selectedGoods.includes(good) ? 'remove' : 'add'}
              </button>

              <span>
                {' '}
                {good}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
