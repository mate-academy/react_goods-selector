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
    selectedGoods: {},
  }

  toggleGood(item) {
    const { selectedGoods } = this.state;

    if (selectedGoods[item]) {
      const { [item]: _, ...withoutItem } = selectedGoods;

      this.setState({ selectedGoods: withoutItem });
    } else {
      this.setState({
        selectedGoods: {
          ...selectedGoods, [item]: item,
        },
      });
    }
  }

  clearGoods() {
    this.setState({ selectedGoods: {} });
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="app">
        <h1>
          Selected good:
          {
            `${Object.keys(selectedGoods).join(', ')}`
          }
          {selectedGoods.length !== 0 && (
            <button
              type="button"
              className="button"
              onClick={this.clearGoods}
            >
              Clear
            </button>
          )}
        </h1>
        <ul>
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={classNames('item', {
                active: selectedGoods[good],
              })}
            >
              {good}
              <button
                type="button"
                className="button"
                onClick={() => this.toggleGood(good)}
              >
                {selectedGoods[good] ? 'remove' : 'add'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
