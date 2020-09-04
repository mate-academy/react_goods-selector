import React from 'react';
import './App.scss';
import classnames from 'classnames';

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
    selected: '-',
  }

  render() {
    const { selected } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good:
          {' '}
          {selected}
        </h1>

        <button
          className="button button--close"
          type="button"
          onClick={() => {
            this.setState({ selected: '-' });
          }}
        >
          X
        </button>

        <ul className="list">
          {goodsFromServer.map(good => (
            <li key={good} className="list__goods">
              <button
                type="button"
                className={classnames({
                  button: true,
                  active: selected === good,
                })}
                onClick={() => {
                  this.setState({ selected: good });
                }}
              >
                {good}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
