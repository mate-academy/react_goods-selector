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

  toggleItem = (item: string) => {
    const { selectedGoods } = this.state;

    if (selectedGoods.includes(item)) {
      this.setState({ selectedGoods: [...selectedGoods.filter(product => product !== item)] });
    } else {
      this.setState({ selectedGoods: [...selectedGoods, item] });
    }
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>
          {selectedGoods.length
            ? `Selected goods: ${selectedGoods.join(', ')}`
            : 'No goods selected'}
        </h1>

        <button
          type="button"
          onClick={() => {
            this.setState({ selectedGoods: [] });
          }}
        >
          X
        </button>

        <ul>
          {goodsFromServer.map((good) => {
            const isSelected = selectedGoods.includes(good);

            return (
              <li
                key={good}
              >
                {good}

                <button
                  type="button"
                  onClick={() => this.toggleItem(good)}
                >
                  {isSelected ? 'Remove' : 'Add'}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
