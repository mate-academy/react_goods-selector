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

  selectElement = ({ target }) => {
    const newGood = target.parentElement.firstChild.textContent;
    const goods = this.state.selectedGoods;

    target.parentElement.classList.toggle('selected');
    this.setState({ selectedGoods: [...goods, newGood] });
  }

  removeElement = ({ target }) => {
    const newGood = target.parentElement.firstChild.textContent;
    const goods = this.state.selectedGoods;

    target.parentElement.classList.remove('selected');

    if (goods.includes(newGood)) {
      const newGoods = goods.filter(good => good !== newGood);

      this.setState({ selectedGoods: [...newGoods] });
    }
  }

  resetGoods = ({ target }) => {
    this.setState({ selectedGoods: [] });
    [...target.nextSibling.children].forEach((good) => {
      if (good.classList.contains('selected')) {
        good.classList.remove('selected');
      }

      return good;
    });
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
              {good}
                &emsp;
              <button
                type="button"
                onClick={selected.includes(good) ? remove : select}
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
