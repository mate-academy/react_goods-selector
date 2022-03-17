import React from 'react';
import './App.scss';

import classNames from 'classnames';

const goodsFromServer: string[] = [
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

type Prop = {
  selectedGoods: string[];
};

class App extends React.Component<{}, Prop> {
  state = {
    selectedGoods: ['Jam'],
  };

  toggle = (good: string) => {
    if (this.state.selectedGoods.includes(good)) {
      this.setState(state => (
        { selectedGoods: [...state.selectedGoods.filter(item => item !== good)] }
      ));
    } else {
      this.setState(state => (
        { selectedGoods: [...state.selectedGoods, good] }
      ));
    }
  };

  removeGood = (good: string) => {
    this.setState(state => (
      { selectedGoods: [...state.selectedGoods.filter(item => item !== good)] }
    ));
  };

  addGood = (good: string) => {
    this.setState(state => (
      { selectedGoods: [...state.selectedGoods, good] }
    ));
  };

  createTitle = (goods : string[]) => {
    return (
      goods.length
        ? `${goods.length > 1
          ? `${goods.slice(0, -1).join(', ')} and ${goods[goods.length - 1]} are selected`
          : `${goods[0]} is selected`}`
        : 'No goods selected'
    );
  };

  cancelSelected = () => {
    this.setState({ selectedGoods: [] });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>Selected goods:</h1>
        <p className="App__data-info">{this.createTitle(selectedGoods)}</p>
        <ul className="App__list">
          <button
            type="button"
            className="App__clear"
            onClick={() => {
              this.cancelSelected();
            }}
          >
            Cancel Selected Goods
          </button>
          {goodsFromServer.map(good => {
            const includes = selectedGoods.includes(good);

            return (
              <li
                key={good}
                className={classNames(
                  'App__item',
                  { 'App__item--on': selectedGoods.includes(good) },
                  { 'App__item--off': !selectedGoods.includes(good) },
                )}
              >
                <h3>{ good }</h3>
                {includes ? (
                  <button
                    type="button"
                    className="App__btn"
                    onClick={() => this.removeGood(good)}
                  >
                    Remove
                  </button>
                ) : (
                  <button
                    type="button"
                    className="App__btn"
                    onClick={() => this.addGood(good)}
                  >
                    Add
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
