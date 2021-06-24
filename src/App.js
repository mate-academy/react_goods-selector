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
  };

  message = (goods) => {
    switch (goods.length) {
      case 0:
        return 'No goods selected';

      case 1:
        return goods[0];

      default:
        return `${goods.slice(0, -1).join(', ')}`
          + ` and ${goods[goods.length - 1]}`;
    }
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>{`Selected good: - ${this.message(selectedGoods)}`}</h1>
        <button
          type="button"
          onClick={() => {
            this.setState({
              selectedGoods: [],
            });
          }}
          className={(selectedGoods.length === 0 ? 'invisible' : '')}
        >
          X
        </button>
        <ul>
          {goodsFromServer.map(good => (
            <div className="container">
              <li
                key={good}
                className={`listItem ${(
                  selectedGoods.includes(good) ? 'selected' : ''
                )}`}
              >
                {good}
              </li>
              <button
                type="button"
                onClick={() => {
                  if (!selectedGoods.includes(good)) {
                    this.setState(state => ({
                      selectedGoods: [...state.selectedGoods, good],
                    }));
                  }
                }}
              >
                Add
              </button>
              <button
                type="button"
                onClick={() => {
                  if (selectedGoods.includes(good)) {
                    this.setState(state => ({
                      selectedGoods: state.selectedGoods.filter(item => (
                        item !== good
                      )),
                    }));
                  }
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
