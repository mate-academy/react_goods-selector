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

  resetGoods = () => {
    this.setState({ selectedGoods: [] });
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">{this.renderTitle()}</h1>

        <button
          type="button"
          className="button reset"
          onClick={this.resetGoods}
          disabled={!selectedGoods.length}
        >
          Reset
        </button>

        <ul className="App__list">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={`App__item ${selectedGoods.includes(good)
                ? 'selected' : ''}`}
            >
              <span>{good}</span>
              <button
                type="button"
                className={'button'
                  + ` ${selectedGoods.includes(good) ? 'active' : 'inactive'}`}
                onClick={() => (
                  selectedGoods.includes(good)
                    ? this.removeGoods(good)
                    : this.addGoods(good)
                )}
              >
                {selectedGoods.includes(good)
                  ? 'Remove' : 'Add'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
