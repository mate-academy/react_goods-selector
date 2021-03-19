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
    selectedGood: null,
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good: -
          {' '}
          {selectedGood || 'No goods selected'}
        </h1>
        <button
          className={selectedGood
            ? '' : 'Button'}
          type="button"
          onClick={() => {
            this.setState({
              selectedGood: null,
            });
          }}
        >
          X
        </button>
        <ul>
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={selectedGood === good
                ? 'Good' : ''}
            >
              {good}
              {' '}
              <button
                className={selectedGood === good
                  ? 'Button' : ''}
                type="button"
                onClick={() => {
                  this.setState({
                    selectedGood: good,
                  });
                }}
              >
                Select
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
