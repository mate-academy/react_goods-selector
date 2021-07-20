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

  selectGood(good) {
    this.setState({ selectedGood: good });
  }

  clearSelected() {
    this.setState({ selectedGood: null });
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1>
          {selectedGood !== null
            ? `${selectedGood} is selected`
            : `No goods selected`
          }
          {' '}
          <button
            type="button"
            className={selectedGood === null
              ? 'hidden'
              : 'clearSelected'
            }
            onClick={() => {
              this.setState({ selectedGood: null });
            }}
          >
            X
          </button>
        </h1>
        <ul>
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={good === this.state.selectedGood
                ? 'active'
                : 'regular'}
            >
              {good}
              {' '}
              <button
                type="button"
                className={good === this.state.selectedGood
                  ? 'hidden'
                  : 'clickable'}
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
