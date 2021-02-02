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
    selectedGood: '',
  }

  selectGood = (good) => {
    this.setState({ selectedGood: good });
  }

  clearGood = () => {
    this.setState({ selectedGood: '' });
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good:
          {selectedGood || '-'}
          {selectedGood && (
            <button
              type="button"
              onClick={this.clearGood}
            >
              X
            </button>
          )}
        </h1>

        <ul>
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={
                good === selectedGood
                  ? 'yellow'
                  : ''
              }
            >
              {good}
              <button
                type="button"
                onClick={() => this.selectGood(good)}
              >
                Select
              </button>
            </li>
          ))}
        </ul>
        {goodsFromServer.length}
      </div>
    );
  }
}

export default App;
