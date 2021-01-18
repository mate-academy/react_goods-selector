import React from 'react';
import './App.scss';

const classNames = require('classnames');

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
    basket: [],
  }

  toToggle = (item) => {
    const { basket } = this.state;

    if (basket.includes(item)) {
      const itemsOfBasket = basket.filter(good => good !== item);

      this.setState({ basket: [...itemsOfBasket] });

      return;
    }

    this.setState({ basket: [...basket, item] });
  }

  toReset = () => {
    this.setState({ basket: [] });
  }

  render() {
    const { basket } = this.state;

    return (
      <div className="App">
        <div className="basket">
          <button
            type="button"
            className={
              classNames('basket__button', { hidden: basket.length === 0 })
            }
            onClick={this.toReset}
          >
            X
          </button>

          <h1>
            Basket:
            {this.state.basket.join(', ')}
          </h1>
        </div>

        <div className="goods">
          {goodsFromServer.map(good => (
            <div
              key={good}
              className={
                classNames('good', { selected: basket.includes(good) })
              }
            >
              <p>{good}</p>
              <button
                className="button"
                type="button"
                onClick={() => this.toToggle(good)}

              >
                {basket.includes(good) ? 'Remove' : 'Add'}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
