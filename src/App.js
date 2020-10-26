import React from 'react';
import './App.scss';
import Select from './componnents/Select';

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

  selectGood = (good) => {
    this.setState((state) => {
      if (!state.selectedGoods.includes(good)) {
        return {
          selectedGoods: [...state.selectedGoods, good],
        };
      }

      const goodIndex = state.selectedGoods.indexOf(good);

      state.selectedGoods.splice(goodIndex, 1);

      return {
        selectedGoods: state.selectedGoods,
      };
    });
  }

  clearSelect = () => {
    this.setState({
      selectedGoods: [],
    });
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App w-50 m-auto">
        <h1>
          {
            `Selected good: - ${selectedGoods.join(', ')}`
          }
        </h1>

        <div>
          <button
            type="button"
            className="btn btn-danger"
            onClick={this.clearSelect}
          >
            X
          </button>
        </div>

        <div className="btn-group mt-2" role="group" aria-label="First group">
          {
            goodsFromServer.map(good => (
              <Select
                key={good}
                good={good}
                selectGoodClicker={this.selectGood}
                selectedGoods={selectedGoods}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
