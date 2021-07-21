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
    goods: ['Jam'],
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1>
          {(goods.length !== 0)
            ? (
              `Selected goods: ${goods.join(', ')}`
            )
            : (
              'No goods selected'
            )
          }
        </h1>
        <ul className="App__list">
          {goodsFromServer.map(good => (
            <li key={good} className="App__list-item">
              {good}
              {goods.includes(good)
                ? (
                  <button
                    className="App__btn-remove"
                    type="button"
                    onClick={() => {
                      this.setState({
                        goods: goods.filter(value => good !== value),
                      });
                    }}
                  >
                    remove
                  </button>
                )
                : (
                  <button
                    className="App__btn-add"
                    type="button"
                    onClick={() => {
                      this.setState({
                        goods: [...goods, good],
                      });
                    }}
                  >
                    add
                  </button>
                )
              }
            </li>
          ))}
          <button
            className="App__btn-clear"
            type="button"
            onClick={() => {
              this.setState({
                goods: [],
              });
            }}
          >
            CLEAR ALL
          </button>
        </ul>
      </div>
    );
  }
}

export default App;
