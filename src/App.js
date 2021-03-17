import React from 'react';
import './App.scss';
import classNames from 'classnames';

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
    goods: goodsFromServer,
    selectedGoods: ['Jam'],
  }

  addGood = (good) => {
    if (!this.state.selectedGoods.includes(good)) {
      this.setState(prevState => ({
        selectedGoods: [
          ...prevState.selectedGoods,
          good,
        ],
      }));
    }
  }

  removeGood = (good) => {
    this.setState(prevState => ({
      selectedGoods: prevState.selectedGoods.filter(
        selectedGood => selectedGood !== good,
      ),
    }));
  }

  resetSelections = () => {
    this.setState({ selectedGoods: [] });
  }

  render() {
    const { goods, selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>
          {selectedGoods.length > 0
            ? `Selected goods: ${selectedGoods}`
            : `No goods selected`}
        </h1>
        <button
          type="button"
          onClick={this.resetSelections}
        >
          X
        </button>
        <ul>
          {goods.map(good => (
            <li key={good}>
              <p className={classNames({
                active: selectedGoods.includes(good),
              })}
              >
                {good}
              </p>
              <button
                type="button"
                onClick={() => this.addGood(good)}
              >
                Add
              </button>
              <button
                type="button"
                onClick={() => this.removeGood(good)}
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
