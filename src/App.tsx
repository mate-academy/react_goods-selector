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
        <button
          type="button"
          className="button--close"
          onClick={() => {
            this.setState({ selectedGoods: [] });
          }}
        >
          X
        </button>

        <h1 className="app__title">
          {selectedGoods.length
            ? `${selectedGoods.join(', ')} selected`
            : 'No goods selected'}
        </h1>

        <ul className="goods-list">
          {goodsFromServer.map((good) => {
            const isSelected = selectedGoods.includes(good);

            return (
              <li
                key={good}
                className="goods-list__item"
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
