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
];

class App extends Component {
  state = {
    selectedGoods: ['Jam'],
  }

  renderTitle = () => {
    const selectedGoods = [...this.state.selectedGoods];

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

  addGoods = (goods) => {
    this.setState(prevState => ({
      selectedGoods: [...prevState.selectedGoods, goods],
    }));
  }

  removeGoods = (goods) => {
    this.setState(prevState => ({
      selectedGoods: prevState.selectedGoods.filter(item => item !== goods),
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
              key={uuidv4()}
              className={this.state.selectedGoods.includes(good)
                ? 'selected goods' : 'goods'}
            >
              <span>{good}</span>
              <button
                type="button"
                className="btn"
                onClick={() => (
                  this.state.selectedGoods.includes(good)
                    ? this.removeGoods(good)
                    : this.addGoods(good)
                )}
              >
                {this.state.selectedGoods.includes(good)
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
