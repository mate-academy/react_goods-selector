import React from 'react';
import './App.scss';

type State = {
  selectedGood: [string];
};

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

class App extends React.Component {
  state: State = {
    selectedGood: ['Jam'],
  };

  clearList = () => {
    this.setState({
      selectedGood: [],
    });
  };

  addGood = (good: string) => {
    this.setState((state: State) => ({
      selectedGood: [...state.selectedGood, good],
    }));
  };

  removeGood = (good: string) => {
    const goodToRemove = this.state.selectedGood.indexOf(good);

    this.setState((state: State) => {
      const newGoods = [...state.selectedGood];

      newGoods.splice(goodToRemove, 1);

      return {
        selectedGood: newGoods,
      };
    });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1 className="Title">
          {!selectedGood.length
            ? 'No goods selected'
            : `${selectedGood.join(', ')} ${selectedGood.length > 1 ? 'are ' : 'is '} selected`}
        </h1>
        <button
          type="button"
          className="clear-button"
          onClick={this.clearList}
        >
          Clear list
        </button>
        <ul className="goods">
          {goodsFromServer.map(good => {
            return (
              <li
                className="goods__list"
                key={good}
              >
                {good}
                <button
                  type="button"
                  className="button"
                  onClick={() => {
                    return selectedGood.includes(good)
                      ? this.removeGood(good)
                      : this.addGood(good);
                  }}
                >
                  {selectedGood.includes(good) ? 'Remove' : 'Add'}
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
