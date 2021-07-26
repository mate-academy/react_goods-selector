import React from 'react';
import classNames from 'classnames';
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
    const filteredList = goodsList.filter(good => good !== requiredGood);

    this.setState({ selectedGoods: [...filteredList] });
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
            className={classNames('button', {
              'button--hidden': !selectedGoods.length,
              'button--remove': selectedGoods.length,
            })}
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
              className={classNames('App__item', {
                'App__item--selected': selectedGoods.includes(good),
              })}
            >
              <span className="App__good">{good}</span>
              <button
                className={classNames('button', {
                  'button--add': !selectedGoods.includes(good),
                  'button--remove': selectedGoods.includes(good),
                })}

                type="button"
                onClick={selectedGoods.includes(good)
                  ? () => this.removeGood(selectedGoods, good)
                  : () => this.addGood(selectedGoods, good)
                }
              >
                {selectedGoods.includes(good) ? 'Remove' : 'Add'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
