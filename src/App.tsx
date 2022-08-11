import classNames from 'classnames';
import React from 'react';
import './App.scss';

import goodsFromServer from './goods';

type State = {
  goods: string[],
  selectedGoods: string[],
};

export class App extends React.Component<{}, State> {
  state = {
    goods: [...goodsFromServer],
    selectedGoods: ['Jam'],
  };

  handleSelect = (good: string) => {
    this.setState((prevState) => {
      const newSelectedGoods = [...prevState.selectedGoods];

      if (newSelectedGoods.includes(good)) {
        return prevState;
      }

      newSelectedGoods.push(good);

      return {
        ...prevState,
        selectedGoods: newSelectedGoods,
      };
    });
  };

  handleRemove = (good: string) => {
    this.setState((prevState) => {
      const newSelectedGoods = [...prevState.selectedGoods];

      if (newSelectedGoods.indexOf(good) === -1) {
        return prevState;
      }

      newSelectedGoods.splice(newSelectedGoods.indexOf(good), 1);

      return { ...prevState, selectedGoods: newSelectedGoods };
    });
  };

  getSelectedGoods = () => {
    const { selectedGoods } = this.state;

    switch (true) {
      case selectedGoods.length === 0:
        return 'No goods selected';
      case selectedGoods.length === 1:
        return `${selectedGoods[0]} is selected`;

      case selectedGoods.length > 1:
        return `${selectedGoods
          .slice(0, selectedGoods.length - 1)
          .join(', ')} and ${selectedGoods[selectedGoods.length - 1]}`;

      default:
        throw new Error('getSelectedGoods() failed');
    }
  };

  render() {
    const { goods, selectedGoods } = this.state;

    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">
            {this.getSelectedGoods()}
          </h1>
          {(selectedGoods.length > 0) && (
            <button
              type="button"
              className="App__button App__button--clear App__Clear"
              onClick={() => this.setState({ selectedGoods: [] })}
            >
              Clear
            </button>
          )}
        </header>

        <ul className="list">
          {goods.map(good => (
            <li
              className={
                classNames('Good',
                  { 'Good--active': selectedGoods.includes(good) })
              }
              key={good}
            >
              {good}

              {!selectedGoods.includes(good) && (
                <button
                  type="button"
                  className="Good__button Good__button--select Good__select"
                  onClick={() => this.handleSelect(good)}
                >
                  Select
                </button>
              )}

              {selectedGoods.includes(good) && (
                <button
                  type="button"
                  className="Good__button Good__button--remove Good__remove"
                  onClick={() => this.handleRemove(good)}
                >
                  Remove
                </button>
              )}
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
