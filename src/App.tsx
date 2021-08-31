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

interface State {
  selectedGoods: string[]
}

class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: [],
  };

  reset = () => (
    this.setState({ selectedGoods: [] })
  );

  addItem = (item: string) => {
    const { selectedGoods } = this.state;

    return this.setState({ selectedGoods: [...selectedGoods, item] });
  };

  removeItem = (item: string) => {
    const { selectedGoods } = this.state;

    if (selectedGoods.includes(item)) {
      const lastIndex = selectedGoods.lastIndexOf(item);

      selectedGoods.splice(lastIndex, 1);

      return this.setState({ selectedGoods: [...selectedGoods] });
    }

    return null;
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        {selectedGoods.length > 0
          ? (
            <>
              <h1>{`Selected goods: ${selectedGoods.join(', ')}`}</h1>
              <button
                className="button"
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>
            </>
          )
          : <h1>No goods selected</h1>}
        <ul className="list">
          {goodsFromServer.map(good => (
            <>
              <li
                key={good}
                className={selectedGoods.includes(good) ? 'list__item list__item--selected' : 'list__item'}
              >
                <h3>{good}</h3>
                <button
                  className="button"
                  type="button"
                  onClick={() => this.addItem(good)}
                >
                  Add
                </button>
                <button
                  className="button"
                  type="button"
                  onClick={() => this.removeItem(good)}
                  disabled={!selectedGoods.includes(good)}
                >
                  Remove
                </button>
              </li>
            </>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
