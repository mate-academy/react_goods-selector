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
    selectedGood: 'Jam',
  }

  selectGood = (product) => {
    this.setState({ selectedGood: product });
  }

  removeSelected = () => {
    this.setState({ selectedGood: null });
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good:
          {' '}
          {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
        </h1>
        <button
          type="button"
          className={selectedGood || 'invisible'}
          onClick={this.removeSelected}
        >
          X
        </button>
        <ul>
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={selectedGood !== good || 'chosen'}
            >
              {good}
              <button
                type="button"
                className={selectedGood !== good || 'invisible'}
                onClick={() => {
                  this.selectGood(good);
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
