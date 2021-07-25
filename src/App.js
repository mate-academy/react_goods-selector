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
  };

  reset = () => {
    this.setState({
      selectedGoods: [],
    });
  };

  change = (good) => {
    this.setState(prevState => (
      prevState.selectedGoods.includes(good)
        ? { selectedGoods: prevState.selectedGoods.filter(
          product => product !== good,
        ) }
        : { selectedGoods: [...prevState.selectedGoods, good] }
    ));
  };

  makeGoodsList = () => {
    const { selectedGoods } = this.state;

    if (selectedGoods.length === 0) {
      return `No goods selected`;
    }

    if (selectedGoods.length === 1) {
      return `${selectedGoods[0]} is selected`;
    }

    return `${selectedGoods.slice(0, -1).join(', ')}
      and ${selectedGoods[selectedGoods.length - 1]} are selected`;
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div>
        <h1>
          <span>{this.makeGoodsList()}</span>
        </h1>
        <button
          type="button"
          onClick={this.reset}
          disabled={selectedGoods.length === 0}
        >
          Clear All
        </button>

        <ul className="list">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={selectedGoods.includes(good) ? 'list__item' : ''}
            >
              <div className="list__item-wrapper">
                <span>{good}</span>
                <button type="button" onClick={() => this.change(good)}>
                  {selectedGoods.includes(good) ? 'Remove' : 'Add'}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
