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
    goods: [],
  }

  selectGood = (good) => {
    const { goods } = this.state;

    if (goods.includes(good)) {
      return;
    }

    this.setState({ goods: [...goods, good] });
  }

  clearGoods = () => {
    this.setState({ goods: [] });
  }

  render() {
    return (
      <div className="App">
        <h1>
          Selected good:
          {` - `}
          {`${this.state.goods.join(', ')}`}
        </h1>

        {this.state.goods.length !== 0 && (
          <button
            className="App__button-clear"
            type="button"
            onClick={this.clearGoods}
          >
            Clear All
          </button>
        )}

        <ul className="App__list">
          {goodsFromServer.map(good => (
            <li
              className="App__item"
              key={good}
            >
              <div className="App__body">
                <button
                  className="App__button"
                  type="button"
                  onClick={() => {
                    this.selectGood(good);
                  }}
                >
                  Select
                </button>

                <span
                  className={classNames(
                    { App__selected: this.state.goods.includes(good) },
                  )}
                >
                  {good}
                </span>
              </div>

            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
