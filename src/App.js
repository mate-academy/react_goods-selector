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
    selectedGoods: ['Jam'],
  }

  clearSelectedGoods = () => {
    this.setState({ selectedGoods: [] });
  }

  selectGood(good) {
    const { selectedGoods } = this.state;

    selectedGoods.push(good);
    this.setState(state => ({
      selectedGoods: state.selectedGoods,
    }));
  }

  removeGood(good) {
    const { selectedGoods } = this.state;

    selectedGoods.splice(selectedGoods.indexOf(good), 1);

    this.setState(state => ({
      selectedGoods: state.selectedGoods,
    }));
  }

  showSelectedGoods() {
    const { selectedGoods } = this.state;

    if (selectedGoods.length !== 0) {
      if (selectedGoods.length === 1) {
        return `${selectedGoods} is selected`;
      }

      return `${selectedGoods.join(', ').replace(/, ([^,]*)$/, ' and $1')}`
        + ` are selected`;
    }

    return `No goods selected`;
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="App__header">
          {this.showSelectedGoods()}
          {' '}
          <button
            type="button"
            className={
              selectedGoods.length === 0
                ? 'hidden'
                : 'App__clearSelected'
            }
            onClick={this.clearSelectedGoods}
          >
            X
          </button>
        </h1>
        <ul className="App__list">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={
                selectedGoods.includes(good)
                  ? 'App__element--active'
                  : 'App__element'
                }
            >
              <span>{good}</span>
              <button
                type="button"
                className={
                  selectedGoods.includes(good)
                    ? 'hidden'
                    : 'clickable'
                }
                onClick={() => {
                  this.selectGood(good);
                }}
              >
                Add
              </button>
              <button
                type="button"
                className={
                  selectedGoods.includes(good)
                    ? 'clickable'
                    : 'hidden'
                }
                onClick={() => {
                  this.removeGood(good);
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
