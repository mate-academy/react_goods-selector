import React from 'react';
import './App.scss';

const goodsFromServer = [
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
  state = {
    selectedGoods: [],
  }

  select = (item) => {
    const { selectedGoods } = this.state;

    this.setState({ selectedGoods: [...selectedGoods, item] });
  }

  clear = (item) => {
    const { selectedGoods } = this.state;
    const selectedGoodsCopy = [...selectedGoods];

    if (selectedGoodsCopy.includes(item)) {
      const index = selectedGoodsCopy.indexOf(item);

      selectedGoodsCopy.splice(index, 1);
      this.setState({ selectedGoods: selectedGoodsCopy });
    }
  }

  clearAll = () => {
    this.setState({ selectedGoods: [] });
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good: -
          {selectedGoods.join(', ')}
        </h1>
        <button type="button" onClick={this.clearAll}>Clear</button>
        <ul className="list">
          {goodsFromServer.map(good => (
            <li
              className={`list__item ${selectedGoods.includes(good)
                ? 'selected'
                : ''}`}
              key={good}
            >
              {good}
              {' '}
              <button
                className="button"
                type="button"
                onClick={() => this.select(good)}
              >
                Add
              </button>
              <button
                className="button"
                type="button"
                onClick={() => this.clear(good)}
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

export default App;
