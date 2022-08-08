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

      case selectedGoods.length === 2:
        return `${selectedGoods[0]} and ${selectedGoods[1]} are selected`;

      case selectedGoods.length === 3:
        return `${selectedGoods[0]}, ${selectedGoods[1]} and ${selectedGoods[2]} are selected`;

      case selectedGoods.length > 3:
        return `${selectedGoods[0]}, ${selectedGoods[1]} and others are selected`;

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
              className="App__clear"
              onClick={() => this.setState({ selectedGoods: [] })}
            >
              Clear
            </button>
          )}
        </header>

        <ul>
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
                  className="Good__select"
                  onClick={() => this.handleSelect(good)}
                >
                  Select
                </button>
              )}

              {selectedGoods.includes(good) && (
                <button
                  type="button"
                  className="Good__remove"
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
