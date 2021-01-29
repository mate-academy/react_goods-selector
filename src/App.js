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
    select: 'none',
  }

  render() {
    return (
      <div className="App">
        <h1>
          Selected good:
          {' '}
          {this.state.select}
        </h1>
        {this.state.select !== 'none' && (
          <button
            type="button"
            onClick={() => this.setState({ select: 'none' })}
          >
            clear
          </button>
        )}
        <ul>
          {goodsFromServer.map(product => (
            <>
              <li
                key={product}
                className={classNames(
                  { select: this.state.select === product },
                )}
              >
                {product}
              </li>
              <button
                type="button"
                onClick={() => this.setState({ select: product })}
              >
                select
              </button>
            </>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
