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
    selected: '',
  }

  savedGoods = (good) => {
    this.setState({
      selected: good,
    });
  };

  render() {
    const { selected } = this.state;

    return (
      <div className="App">
        <h1 className="status">
          { selected
            ? `${selected} is in basket`
            : 'Basket is empty'
          }
        </h1>
        <ul className="goods">
          {goodsFromServer.map(item => (
            <li key={item}>
              <button
                type="button"
                onClick={() => this.savedGoods(item)}
                className={item === selected
                  ? 'selected goods__item'
                  : 'goods__item'
                }
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="remove"
          onClick={() => {
            this.setState({
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
