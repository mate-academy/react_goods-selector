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
  };

  selectElement = (good) => {
    const goods = this.state.selectedGoods;

    this.setState({ selectedGoods: [...goods, good] });
  }

  removeElement = (good) => {
    const goods = this.state.selectedGoods;

    if (goods.includes(good)) {
      const newGoods = goods.filter(somegood => somegood !== good);

      this.setState({ selectedGoods: [...newGoods] });
    }
  }

  resetGoods = () => {
    this.setState({ selectedGoods: [] });
  }

  render() {
    const selected = this.state.selectedGoods;
    const select = this.selectElement;
    const remove = this.removeElement;
    const reset = this.resetGoods;

    return (
      <div className="App">
        <h1 className="App__goods-selected">
          Selected good: -
          {selected.join(', ')}
        </h1>
        <button
          type="button"
          className={
            classNames({ hidden: selected.length === 0 })
          }
          onClick={reset}
        >
          X
        </button>
        <ul>
          {goodsFromServer.map(good => (
            <li key={good}>
              <span className={
                classNames({ selected: selected.includes(good) })
              }
              >
                {good}
              </span>
                &emsp;
              <button
                type="button"
                onClick={() => (selected.includes(good)
                  ? remove(good)
                  : select(good))
                }
              >
                {selected.includes(good) ? 'Remove' : 'Add'}
              </button>
            </li>
          ))}
        </ul>
        Amount of goods:
        {' '}
        {goodsFromServer.length}
      </div>
    );
  }
}

export default App;
