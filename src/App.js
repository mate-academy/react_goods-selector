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
    selectedGoods: [],
  }

  addOrRemoveGood(item) {
    if (this.state.selectedGoods.includes(item)) {
      this.setState(prevState => ({
        selectedGoods: prevState.selectedGoods.filter(good => good !== item),
      }));
    } else {
      this.setState(prevState => ({
        selectedGoods: [...prevState.selectedGoods, item],
      }));
    }
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="app">
        <h1>
          Selected good:
          {
            `${selectedGoods.join(', ')}`
          }
          {selectedGoods.length !== 0 && (
            <button
              type="button"
              className="button"
              onClick={() => {
                this.setState({ selectedGoods: [] });
              }}
            >
              Clear
            </button>
          )}
        </h1>
        <ul>
          {goodsFromServer.map((good, index) => (
            <li
              key={good}
              className={classNames('item', {
                active: selectedGoods.includes(good),
              })}
            >
              {good}
              <button
                type="button"
                className="button"
                onClick={() => this.addOrRemoveGood(good)}
              >
                {selectedGoods.includes(good) ? 'remove' : 'add'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
