import React from 'react';
import './App.scss';

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

  addHandler = (good: string) => {
    this.setState(({ selectedGoods }) => ({
      selectedGoods: [...selectedGoods, good],
    }));
  };

  removeHandler = (good: string) => {
    this.setState(({ selectedGoods }) => ({
      selectedGoods: selectedGoods.filter((g) => g !== good),
    }));
  };

  clearHandler = () => {
    this.setState(() => ({
      selectedGoods: [],
    }));
  };

  render() {
    const { selectedGoods } = this.state;

    const formattedList = selectedGoods.length === 1
      ? selectedGoods[0]
      : (`${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods.slice(-1)}`);

    const includes = (good: string) => selectedGoods.includes(good);
    const text = (good: string) => (includes(good) ? 'remove' : 'add');
    const method = (good: string) => (includes(good)
      ? this.removeHandler(good)
      : this.addHandler(good)
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
            <li key={good} className="GoodsList__item">
              <span>{good}</span>
              <button
                type="button"
                className="GoodsList__item-button"
                onClick={() => {
                  method(good);
                }}
              >
                {text(good)}
              </button>
            </li>
          ))}
        </ul>
        {!!selectedGoods.length && (
          <button
            type="button"
            onClick={() => {
              this.clearHandler();
            }}
          >
            clear
          </button>
        )}
      </div>
    );
  }
}
