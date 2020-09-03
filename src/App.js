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
    status: 'Your bag is empty',
    selected: '',
  }

  savedGoods = (event) => {
    this.setState({
      status: `${event.target.textContent} is in basket`,
      selected: event.target.textContent,
    });
  };

  render() {
    const { status, selected } = this.state;

    return (
      <div className="App">
        <h1 className=" status">{status}</h1>
        <ul className="goods">
          {goodsFromServer.map(goods => (
            <li key={goods}>
              <button
                type="button"
                onClick={this.savedGoods}
                className={goods === selected
                  ? 'selected goods__item'
                  : 'goods__item'
                }
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
            this.setState({
              status: 'Your bag is empty',
              selected: '',
            });
          }}
        >
          Remove
        </button>
      </div>
    );
  }
}

export default App;
