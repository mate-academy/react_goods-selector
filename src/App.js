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
    selectedGood: '-',
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good:
          {selectedGood}
        </h1>
        <button
          className="button close-button"
          type="button"
          onClick={() => {
            this.setState({ selectedGood: '-' });
          }}
        >
          X
        </button>
        <ul className="list">
          {goodsFromServer.map(good => (
            <li key={good} className="item">
              <button
                className={classNames({
                  button: true,
                  active: selectedGood === good,
                })}
                type="button"
                onClick={() => {
                  this.setState({ selectedGood: good });
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
