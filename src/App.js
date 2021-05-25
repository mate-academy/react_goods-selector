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
  };

  addGood = (good) => {
    this.setState({
      selectedGood: good,
    });
  }

  removeGood = () => {
    this.setState({
      selectedGood: null,
    });
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        {selectedGood
          ? (
            <h1>
              {`${selectedGood} - selected`}
              <button
                type="button"
                onClick={() => {
                  this.removeGood();
                }}
              >
                X
              </button>
            </h1>
          )
          : (
            <h1>No goods selected</h1>
          )}
        <ul>
          {goodsFromServer.map(good => (
            <li key={good} className={selectedGood === good ? 'active' : ''}>
              {good}
              {' '}
              {good.localeCompare(selectedGood)
                ? (
                  <button
                    type="button"
                    onClick={() => {
                      this.addGood(good);
                    }}
                  >
                    Select
                  </button>
                ) : (
                  ''
                )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
