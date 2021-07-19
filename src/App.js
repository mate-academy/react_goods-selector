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
].map(item => ({
  item,
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

  render() {
    const addGoods = (value) => {
      this.setState(prevState => ({
        selectedGoods: [...prevState.selectedGoods, value],
      }));
    };

    const removeGoods = (value) => {
      this.setState(prevState => ({
        selectedGoods: prevState.selectedGoods.filter(
          selectedGood => selectedGood !== value,
        ),
      }));
    };

    const resetSelectedGoods = () => this.setState({ selectedGoods: [] });

    return (
      <div className="App">
        <h1>{this.renderTitle()}</h1>

        <button
          type="button"
          className="reset"
          onClick={resetSelectedGoods}
          disabled={!this.state.selectedGoods.length}
        >
          Reset selections
        </button>

        <ul className="App__list">
          {goodsFromServer.map(value => (
            <li
              key={value.id}
              className={this.state.selectedGoods.includes(value.item)
                ? 'selected goods' : 'goods'}
            >
              <span>{value.item}</span>

              <button
                type="button"
                className={'App__button'
                  && this.state.selectedGoods.includes(value.item)
                  ? 'active'
                  : 'no_active'}
                onClick={() => (
                  this.state.selectedGoods.includes(value.item)
                    ? removeGoods(value.item)
                    : addGoods(value.item)
                )}
              >
                {this.state.selectedGoods.includes(value.item)
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
