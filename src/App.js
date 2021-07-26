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
    let titleStr = '';
    const { selectedGoods } = this.state;
    const arr = selectedGoods.slice(0, -1);

    if (selectedGoods.length === 1) {
      titleStr = `${selectedGoods} is sellect`;
    }

    if (selectedGoods.length > 1) {
      // eslint-disable-next-line
      titleStr += `${arr.join(', ')} and ${selectedGoods[selectedGoods.length - 1]} are selected`;
    }

    if (selectedGoods.length === 0) {
      titleStr = 'No goods selected';
    }

    return titleStr;
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
                key={Math.random()}
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
