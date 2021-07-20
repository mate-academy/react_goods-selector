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

  renderTitle = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return `No goods selected`;
      case 1:
        return `${selectedGoods[0]} is selected`;
      default:
        return `${selectedGoods.slice(0, -1).join(', ')} and
          ${selectedGoods.slice(-1)} are selected`;
    }
  }

  addGoods = (good) => {
    this.setState(prevState => ({
      selectedGoods: [...prevState.selectedGoods, good],
    }));
  };

  removeGoods = (good) => {
    this.setState(prevState => ({
      selectedGoods: prevState.selectedGoods.filter(
        selectedGood => selectedGood !== good,
      ),
    }));
  };

  resetSelectedGoods = () => this.setState({ selectedGoods: [] });

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>{this.renderTitle()}</h1>

        <button
          type="button"
          className="reset"
          onClick={this.resetSelectedGoods}
          disabled={!selectedGoods.length}
        >
          Reset selections
        </button>

        <ul className="App__list">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={selectedGoods.includes(good)
                ? 'selected goods' : 'goods'}
            >
              <span>{good}</span>
              <button
                type="button"
                className={'App__button'
                  && selectedGoods.includes(good)
                  ? 'active'
                  : 'no_active'}
                onClick={() => (
                  selectedGoods.includes(good)
                    ? this.removeGoods(good)
                    : this.addGoods(good)
                )}
              >
                {selectedGoods.includes(good)
                  ? 'Unselect' : 'Select'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
