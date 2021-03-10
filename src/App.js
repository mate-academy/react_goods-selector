import classNames from 'classnames';
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

const goodsWithId = goodsFromServer.map((good, index) => ({
  id: index + 1,
  name: good,
}));

function outputText(goods) {
  if (goods.length === 0) {
    return 'No goods';
  }

  if (goods.length === 1) {
    return `${goods[0]} is`;
  }

  return `${goods.slice(0, -1).join(', ')}
      and ${goods.slice(-1)} are`;
}

export class App extends Component {
  state = {
    selectedGoods: ['Jam'],
  };

  selectProduct = (good) => {
    this.setState(state => ({ selectedGoods: [...state.selectedGoods, good] }));
  };

  undoSelectedProduct = (good) => {
    this.setState(prevState => ({
      selectedGoods: [...prevState.selectedGoods.filter(item => good !== item)],
    }
    ));
  }

  resetSelectedThings = () => {
    this.setState({ selectedGoods: [] });
  };

  render() {
    const { selectedGoods } = this.state;
    const {
      selectProduct,
      resetSelectedThings,
      undoSelectedProduct,
    } = this;

    return (
      <div className="app">
        <h1 className="app__title">
          {goodsFromServer.length
            ? `${outputText(selectedGoods)} selected`
            : 'No goods selected'
            }
        </h1>
        {!selectedGoods.length
          || (
          <button
            type="button"
            className="app__reset"
            onClick={resetSelectedThings}
          >
            X
          </button>
          )
        }
        {goodsFromServer.length
        && (
          <ul
            className="app__list"
          >
            {goodsWithId.map(good => (
              <li
                className={classNames('app__item',
                  { 'app__item--active': selectedGoods.includes(good.name) })}
                key={good.id}
              >
                {good.name}
                <button
                  className="app__add"
                  type="button"
                  hidden={selectedGoods.includes(good.name)}
                  onClick={() => selectProduct(good.name)}
                >
                  Add
                </button>
                <button
                  className="app__remove"
                  type="button"
                  onClick={() => undoSelectedProduct(good.name)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )
      }
      </div>
    );
  }
}
