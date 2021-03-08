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

class App extends Component {
  state = {
    selectedGoods: ['Jam'],
  };

  selectProduct = (e) => {
    const { target } = e;
    const parentElement = target.closest('li');
    const text = parentElement.childNodes[0].data;

    this.setState(state => ({ selectedGoods: [...state.selectedGoods, text] }));
    target.hidden = true;
    parentElement.classList.add('app__item--active');
  };

  undoSelectedProduct = (e) => {
    const { target } = e;
    const parentElement = target.closest('li');
    const elementWithAddClass = parentElement.querySelector('.app__add');

    const text = parentElement.childNodes[0].data;

    if (!this.state.selectedGoods.includes(text)) {
      return;
    }

    const deletedElement = this.state.selectedGoods.indexOf(text);

    this.state.selectedGoods.splice(deletedElement, 1);
    this.setState(state => ({ selectedGoods: [...state.selectedGoods] }));
    parentElement.classList.remove('app__item--active');
    elementWithAddClass.hidden = null;
  }

  resetSelectedThings = () => {
    const selectedElement = document.querySelectorAll('.app__item--active');

    [...selectedElement].forEach((elem) => {
      const buttonAdd = elem.querySelector('.app__add');

      this.setState({ selectedGoods: [] });
      buttonAdd.hidden = null;
      elem.classList.remove('app__item--active');
    });
  };

  render() {
    const { selectedGoods } = this.state;
    const { selectProduct, resetSelectedThings, undoSelectedProduct } = this;
    let printedValue;
    const goodsLength = selectedGoods.length;

    if (selectedGoods.length >= 3) {
      const restValue = selectedGoods.slice(0, -1);

      printedValue = `${restValue.join(', ')}`
        + `and ${selectedGoods[goodsLength - 1]} are`;
    }

    if (selectedGoods.length === 0) {
      printedValue = 'No goods';
    }

    if (selectedGoods.length === 1) {
      printedValue = `${selectedGoods[0]} is`;
    }

    if (selectedGoods.length === 2) {
      printedValue = `${selectedGoods.join(' and ')} are`;
    }

    return (
      <div className="app">
        <h1 className="app__title">
          {goodsFromServer.length
            ? `${printedValue} selected`
            : 'No goods selected'
            }
        </h1>
        <button
          type="button"
          className="app__reset"
          onClick={resetSelectedThings}
        >
          X
        </button>
        {goodsFromServer.length
        && (
          <ul
            className="app__list"
          >
            {goodsWithId.map((good) => {
              const product = good.name;

              return (
                <li
                  className={classNames('app__item',
                    { 'app__item--active': product === selectedGoods[0] })}
                  key={good.id}
                >
                  {good.name}
                  <button
                    className="app__add"
                    type="button"
                    hidden={
                      product === selectedGoods[0] ? true : null
                    }
                    onClick={selectProduct}
                  >
                    Add
                  </button>
                  <button
                    className="app__remove"
                    type="button"
                    onClick={undoSelectedProduct}
                  >
                    Remove
                  </button>
                </li>
              );
            })}
          </ul>
        )
      }
      </div>
    );
  }
}

export default App;
