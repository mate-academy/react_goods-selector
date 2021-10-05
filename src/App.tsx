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

type State = {
  selectedGoods: string[],
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGoods: [],
  };

  clearActivator = false;

  addGood = (good: string) => {
    this.setState((currentState) => ({
      selectedGoods: [...currentState.selectedGoods, good],
    }));
  };

  removeGood = (good: string) => {
    this.setState((currentState) => ({
      selectedGoods: currentState.selectedGoods.filter(item => item !== good),
    }));
  };

  getGoods = () => {
    const result = this.stringCreator();

    return result;
  };

  stringCreator = () => {
    const { selectedGoods } = this.state;
    let result;

    if (selectedGoods.length === 1) {
      result = `${selectedGoods[0]} is selected`;
    } else {
      const slicedArray = selectedGoods.slice(0, selectedGoods.length - 1);

      result = `${slicedArray.join(', ')} and ${selectedGoods[selectedGoods.length - 1]} are selected`;
    }

    return result;
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="title">
          Selected goods:
        </h1>
        <div className="container">
          {selectedGoods.length === 0 ? <div>No goods selected</div> : <div className="selected-good">{this.getGoods()}</div>}
          <button
            type="button"
            className={classNames('clear-button', { 'clear-button--active': selectedGoods.length > 0 })}
            onClick={() => {
              this.setState({ selectedGoods: [] });
            }}
          >
            X
          </button>
        </div>

        <div className="header-container">
          <div className="header-goods">
            Goods
          </div>

          <div className="header-action">
            Action
          </div>
        </div>
        <ul className="list">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className="list__item"
            >
              {good}
              <button
                type="button"
                onClick={() => {
                  this.clearActivator = true;
                  this.addGood(good);
                }}
                className={classNames('add-button', { 'add-button--disable': this.state.selectedGoods.some(item => item === good) })}
              >
                Add
              </button>
              <button
                type="button"
                onClick={() => {
                  this.removeGood(good);
                }}
                className={classNames('remove-button', { 'remove-button--active': this.state.selectedGoods.some(item => item === good) })}
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
