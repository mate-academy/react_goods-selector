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
    good: 'Jam',
    selected: true,
  }

  render() {
    return (
      <div className="App">
        <h1>
          Selected good: -
          {' '}
          {this.state.selected
            ? `${this.state.good} is selected`
            : 'No goods selected'
          }
          {' '}
          {this.state.selected
            ? (
              <button
                type="button"
                onClick={() => {
                  this.setState({
                    good: null,
                    selected: false,
                  });
                }}
              >
                X
              </button>
            )
            : ''
          }
        </h1>

        <ul className="list">
          {goodsFromServer.map(good => (
            <li className="item" key={goodsFromServer.indexOf(good)}>
              <div className={good === this.state.good ? 'select' : 'block'}>
                {good}
                {good === this.state.good
                  ? ''
                  : (
                    <button
                      type="button"
                      onClick={() => {
                        this.setState({
                          good,
                          selected: true,
                        });
                      }}
                    >
                      Select
                    </button>
                  )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
