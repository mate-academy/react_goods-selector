import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
].map(good => ({
  id: uuidv4(),
  good,
}));

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
  }

  removeGoods = (good) => {
    this.setState(prevState => ({
      selectedGoods: prevState.selectedGoods.filter(
        selectedGood => selectedGood !== good,
      ),
    }));
  }

  resetSelectedGoods = () => this.setState({ selectedGoods: [] })

  render() {
    return (
      <div className="App">
        <h1>{this.renderTitle()}</h1>

        <button
          type="button"
          className="reset"
          onClick={this.resetSelectedGoods}
          disabled={!this.state.selectedGoods.length}
        >
          Reset selections
        </button>

        <ul className="goods-list">
          {goodsFromServer.map(good => (
            <li
              key={good.id}
              className={this.state.selectedGoods.includes(good.good)
                ? 'selected goods' : 'goods'}
            >
              <span>{good.good}</span>

              <button
                type="button"
                className="btn"
                onClick={() => (
                  this.state.selectedGoods.includes(good.good)
                    ? this.removeGoods(good.good)
                    : this.addGoods(good.good)
                )}
              >
                {this.state.selectedGoods.includes(good.good)
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
