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
  state:State = {
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

  clearGoods = () => {
    this.setState({ selectedGoods: [] });
  };

  showSelectedGoods = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'No goods selected';

      case 1:
        return (
          selectedGoods.toString().endsWith('s')
            ? `${selectedGoods[0]} are selected`
            : `${selectedGoods[0]} is selected`
        );

      default:
        return (
          `${selectedGoods.slice(0, -1)
            .join(', ')}
            and
            ${selectedGoods[selectedGoods.length - 1]}
            are selected`
        );
    }
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <div className="App__header">
          {selectedGoods.length > 0 && (
            <button
              type="button"
              onClick={this.clearGoods}
              className="App__button App__button--clear"
            >
              Clear all
            </button>
          )}
          <h1 className="App__header-title">
            {this.showSelectedGoods()}
          </h1>
        </div>

        <ul className="App__goodsList">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={`App__goodsList-item ${
                selectedGoods.includes(good)
                  ? 'App__goodsList-item--added'
                  : ''
              }`}
            >
              <span>{good}</span>
              <button
                className="App__button"
                type="button"
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

export default App;
