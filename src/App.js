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

  selectCancelGood = (item) => {
    this.setState((state) => {
      if (!state.selectedGoods.includes(item)) {
        return {
          selectedGoods: [...state.selectedGoods, item],
        };
      }

      const itemIndex = state.selectedGoods.indexOf(item);

      state.selectedGoods.splice(itemIndex, 1);

      return {
        selectedGoods: state.selectedGoods,
      };
    });
  }

  clearSelectedGood = () => {
    this.setState({
      selectedGoods: [],
    });
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="App__heading">
          {`Selected good: ${selectedGoods.join(', ')}`}
        </h1>
        <button
          type="button"
          className="button App__button-clear"
          onClick={this.clearSelectedGood}
        >
          X
        </button>

        <ul className="App__list">
          {goodsFromServer.map(item => (
            <li
              key={item}
              className={selectedGoods.indexOf(item) !== -1
                ? 'App__selected'
                : 'App__list-item'
              }
            >
              {item}

              <button
                type="button"
                className="button App__button-select"
                onClick={() => this.selectCancelGood(item)}
              >
                {selectedGoods.indexOf(item) === -1 ? 'Add' : 'Remove'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
