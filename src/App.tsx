/* eslint-disable no-console */
import React from 'react';
import './App.scss';

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
  'Banana',
];

type State = {
  selectedGoods: string[];
};

export class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: ['Jam'],
  };

  addGood = (good: string) => {
    const { selectedGoods } = this.state;

    this.setState({ selectedGoods: [...selectedGoods, good] });
  };

  removeGood = (good: string) => {
    const { selectedGoods } = this.state;

    this.setState({ selectedGoods: selectedGoods.filter(item => item !== good) });
  };

  showSelectedGoods = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'No goods selected';
        break;
      case 1:
        return `${selectedGoods[0]} is selected`;
      case 2:
        return `${selectedGoods[0]} and ${selectedGoods[1]} are selected`;
      default:
        return `${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods[selectedGoods.length - 1]} are selected`;
    }
  };

  clearBusket = () => {
    this.setState({ selectedGoods: [] });
  };

  render() {
    const { selectedGoods } = this.state;

    console.log(selectedGoods.length);

    return (
      <div className="App">
        <h1 className="title">
          {this.showSelectedGoods()}
        </h1>
        {selectedGoods.length > 0
          ? (
            <button
              type="button"
              className="btn btn__clear"
              onClick={this.clearBusket}
            >
              Clear all
            </button>
          )
          : ''}
        <ul className="list">
          {goodsFromServer.map(good => (
            <li key={good} className="list__item">
              {good}
              <button
                key={good}
                type="button"
                className="btn"
                onClick={
                  selectedGoods.includes(good)
                    ? () => this.removeGood(good)
                    : () => this.addGood(good)
                }
              >
                {selectedGoods.includes(good)
                  ? 'Remove'
                  : 'Add'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
