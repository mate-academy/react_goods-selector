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
    const selectedGoods = [...this.state.selectedGoods];
    const lastSelectedGoods = [...selectedGoods].pop();

    switch (selectedGoods.length) {
      case 0:
        return `No goods selected`;
      case 1:
        return `${selectedGoods[0]} is selected`;
      default:
        selectedGoods.pop();

        return `${selectedGoods.join(', ')} and
          ${lastSelectedGoods} are selected`;
    }
  }

  addGoods = (goods) => {
    this.setState(state => ({
      selectedGoods: [...state.selectedGoods, goods],
    }));
  }

  removeGoods = (goods) => {
    this.setState(state => ({
      selectedGoods: state.selectedGoods.filter(item => item !== goods),
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>{this.renderTitle()}</h1>

        <button
          type="button"
          className="reset"
          onClick={() => this.setState({ selectedGoods: [] })}
          disabled={!this.state.selectedGoods.length}
        >
          Reset selections
        </button>
        <ul className="goods-list">
          {goodsFromServer.map(item => (
            <li
              key={Math.random()}
              className={this.state.selectedGoods.includes(item)
                ? 'selected goods' : 'goods'}
            >
              <span>{item}</span>
              <button
                type="button"
                className="btn"
                onClick={() => (
                  this.state.selectedGoods.includes(item)
                    ? this.removeGoods(item)
                    : this.addGoods(item)
                )}
              >
                {this.state.selectedGoods.includes(item)
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
