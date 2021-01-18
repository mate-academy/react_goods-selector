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
    cart: [],
  }

  toggler = (item) => {
    const { cart } = this.state;

    if (cart.includes(item)) {
      const cartItem = cart.filter(product => product !== item);

      return this.setState({ cart: [...cartItem] });
    }

    return this.setState({ cart: [...cart, item] });
  }

  resetter = () => this.setState({ cart: [] });

  render() {
    const { cart } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good:
          {cart.join(', ')}
        </h1>

        <button
          type="button"
          className="cart__button button"
          onClick={this.resetter}
        >
          X
        </button>

        <ul className="goods">
          {goodsFromServer.map(item => (
            <li
              key={item}
              className="goods__item"
            >
              <p
                className={
                  classNames('goods__text', { selected: cart.includes(item) })
                }
              >
                {item}
              </p>
              <button
                type="button"
                className="goods__button button"
                onClick={() => this.toggler(item)}
              >
                {cart.includes(item) ? 'Remove' : 'Add'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
