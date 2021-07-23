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

  addGood = (goodsList, good) => {
    this.setState({ selectedGoods: [...goodsList, good] });
  };

  removeGood = (goodsList, requiredGood) => {
    const index = goodsList.findIndex(good => good === requiredGood);

    goodsList.splice(index, 1);

    this.setState({ selectedGoods: [...goodsList] });
  };

  formatTitle = (goodsList) => {
    switch (goodsList.length) {
      case 0:
        return 'No goods selected';

      case 1:
        return `${goodsList[0]} is selected`;

      default:
        return `${goodsList.slice(0, -1).join(', ')}
          and ${goodsList.slice(-1)} are selected`;
    }
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          {this.formatTitle(selectedGoods)}
          <button
            className="button button--remove"
            type="button"
            onClick={() => {
              this.setState({ selectedGoods: [] });
            }}
          >
            Reset
          </button>
        </h1>
        <ul className="App__list">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={
                selectedGoods.includes(good)
                  ? 'App__item App__item--selected'
                  : 'App__item'
              }
            >
              <span className="App__good">{good}</span>
              <button
                className={
                  selectedGoods.includes(good)
                    ? 'button button--hidden'
                    : 'button button--add'
                }
                type="button"
                onClick={() => this.addGood(selectedGoods, good)}
              >
                Add
              </button>

              <button
                className={
                  !selectedGoods.includes(good)
                    ? 'button button--hidden'
                    : 'button button--remove'
                }
                type="button"
                onClick={() => this.removeGood(selectedGoods, good)}
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
