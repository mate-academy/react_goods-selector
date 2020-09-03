import React from 'react';
import './App.scss';
// import cn from 'classnames';

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
    status: 'Your bag is empty',
  }

  savedGoods = (event) => {
    this.setState({ status: `${event.target.textContent} is in basket` });
  };

  render() {
    const { status } = this.state;

    return (
      <div className="App">
        <h1 className="selected">{status}</h1>
        <ul className="goods">
          {goodsFromServer.map(goods => (
            <li key={goods}>
              <button
                type="button"
                onClick={this.savedGoods}
                className="goods__item"
              >
                {goods}
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="remove"
          onClick={() => {
            this.setState({ status: 'Your bag is empty' });
          }}
        >
          Remove
        </button>
      </div>
    );
  }
}

export default App;
