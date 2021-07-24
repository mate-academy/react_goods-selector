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

  chooseTitle = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'No goods selected';

      case 1:
        return `${selectedGoods[0]} is selected`;

      default:
        return `${selectedGoods.slice(0, -1).join(', ')} and ${
          selectedGoods.slice(-1)} are selected`;
    }
  }

  clearSelectedGoods = () => {
    this.setState({ selectedGoods: [] });
  }

  selectGood = good => () => {
    this.setState(state => (
      { selectedGoods: [...state.selectedGoods, good] }
    ));
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>
          {this.chooseTitle()}
          {' '}
          <button
            className={selectedGoods.length ? null : 'invisible'}
            type="button"
            onClick={this.clearSelectedGoods}
          >
            X
          </button>
        </h1>

        <ul className="list">
          {goodsFromServer.map(good => (
            <li
              className={selectedGoods.includes(good) ? 'selected' : 'flex'}
              key={good}
            >
              <span>{good}</span>
              {' '}
              <button
                className={selectedGoods.includes(good) ? 'invisible' : null}
                type="button"
                onClick={this.selectGood(good)}
              >
                Select
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
