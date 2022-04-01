import React from 'react';
import './App.scss';
import './GoodsList.scss';

const goodsFromServer: string[] = [
  'dumplings',
  'carrot',
  'eggs',
  'ice cream',
  'apple',
  'bread',
  'fish',
  'honey',
  'jam',
  'garlic',
];

interface State {
  selectedGoods: string[];
}

export class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['jam'],
  };

  addGood = (good: string) => {
    this.setState(({ selectedGoods }) => ({
      selectedGoods: [...selectedGoods, good],
    }));
  };

  removeGood = (selectedGood: string) => {
    this.setState(({ selectedGoods }) => ({
      selectedGoods: selectedGoods.filter((good) => good !== selectedGood),
    }));
  };

  clear = () => {
    this.setState(() => ({
      selectedGoods: [],
    }));
  };

  formatList = () => (
    this.state.selectedGoods.length === 1
      ? this.state.selectedGoods[0]
      : (`${this.state.selectedGoods.slice(0, -1).join(', ')}
        and ${this.state.selectedGoods.slice(-1)}`)
  );

  render() {
    const { selectedGoods } = this.state;
    const formattedList = this.formatList();

    const includes = (good: string) => selectedGoods.includes(good);
    const buttonText = (good: string) => (includes(good) ? 'remove' : 'add');
    const buttonCallback = (good: string) => (includes(good)
      ? this.removeGood(good)
      : this.addGood(good)
    );

    return (
      <div className="App">
        <h1 className="App__title">
          {!selectedGoods.length
            ? 'no goods selected'
            : (`selected: ${formattedList}`)}
        </h1>
        <ul className="GoodsList">
          {goodsFromServer.map((good) => (
            <li
              key={good}
              className={`GoodsList__item ${includes(good) && 'GoodsList__item--selected'}`}
            >
              <span>{good}</span>
              <button
                type="button"
                className="GoodsList__item-button button"
                onClick={() => {
                  buttonCallback(good);
                }}
              >
                {buttonText(good)}
              </button>
            </li>
          ))}
        </ul>
        {Boolean(selectedGoods.length) && (
          <button
            type="button"
            className="button"
            onClick={() => this.clear()}
          >
            clear
          </button>
        )}
      </div>
    );
  }
}
