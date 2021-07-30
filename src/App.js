import React, { Component } from 'react';
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

class App extends Component {
  state = {
    selectedGoods: ['Jam'],
  }

  clearGood = () => {
    this.setState({ selectedGoods: [] });
  }

  addGood = (good) => {
    this.setState(({ selectedGoods }) => ({
      selectedGoods: [...selectedGoods, good],
    }));
  }

  deleteGood = (good) => {
    this.setState(state => ({
      selectedGoods: state.selectedGoods.filter(product => product !== good),
    }));
  }

  setTitle = () => {
    const { selectedGoods } = this.state;
    const arr = selectedGoods.slice(0, -1);

    switch (selectedGoods.length) {
      case 0:
        return `No goods selected`;
      case 1:
        return `${selectedGoods[0]} is selected`;
      default:
        return `${arr.join(', ')} and
          ${selectedGoods.slice(-1)} are selected`;
    }
  }

  render() {
    return (
      <div>
        <h1>{this.setTitle()}</h1>
        <ul>
          {goodsFromServer.map((good) => {
            const isSelected = this.state.selectedGoods.includes(good);

            return (
              <li
                key={good}
                className={isSelected ? 'selectedEl' : 'unselectedEl'}
              >
                {good}
                {isSelected
                  ? (
                    <button
                      type="button"
                      onClick={() => this.deleteGood(good)}
                    >
                      x
                    </button>
                  )
                  : (
                    <button
                      type="button"
                      onClick={() => this.addGood(good)}
                    >
                      +
                    </button>
                  )
                    }
              </li>
            );
          })}
        </ul>
        {this.state.selectedGoods.length > 0
          ? (
            <button
              type="button"
              onClick={this.clearGood}
            >
              Clear all
            </button>
          )
          : null
        }
      </div>
    );
  }
}
export default App;
