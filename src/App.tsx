import classNames from 'classnames';
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
];

type State = {
  selectedGoods: string[];
};

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  normalizeDisplayGoods = () => {
    const { selectedGoods } = this.state;
    const lengthOfGoods = selectedGoods.length;
    const magicWord = 'selected';

    switch (lengthOfGoods) {
      case 0:
        return `No goods ${magicWord}`;
      case 1:
        return `${selectedGoods[0]} is ${magicWord}`;
      case 2:
        return `${selectedGoods[0]} and ${selectedGoods[1]} are ${magicWord}`;
      default:
        return `${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods.slice(-1)} are ${magicWord}`;
    }
  };

  clearGoods = () => {
    this.setState({ selectedGoods: [] });
  };

  addGood = (good: string) => {
    this.setState((state) => ({
      selectedGoods: [...state.selectedGoods, good],
    }));
  };

  deleteGood = (good: string) => {
    this.setState((state) => (
      { selectedGoods: [...state.selectedGoods.filter(item => item !== good)] }
    ));
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>
          {this.normalizeDisplayGoods()}
        </h1>

        <button
          className={classNames('button',
            { hidden: selectedGoods.length === 0 })}
          type="button"
          onClick={this.clearGoods}
        >
          X
        </button>

        <ul className="goods">
          {goodsFromServer.map(good => (
            <li
              className={classNames('good',
                { selected: selectedGoods.includes(good) })}
              key={good}
            >
              {good}
              <button
                onClick={() => (
                  !selectedGoods.includes(good) ? this.addGood(good) : this.deleteGood(good)
                )}
                type="button"
                className={classNames('button',
                  { add: !selectedGoods.includes(good), remove: selectedGoods.includes(good) })}
              >
                {selectedGoods.includes(good) ? 'Remove' : 'Add'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
