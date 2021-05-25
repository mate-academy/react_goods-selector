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

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="app">
        {selectedGood ? (
          <h1>
            {`Selected good: ${selectedGood} is selected `}
            <button
              type="button"
              onClick={() => {
                this.setState({ selectedGood: null });
              }}
            >
              X
            </button>
          </h1>
        ) : (
          <h1>Selected good: No goods selected</h1>
        )}
        <ul className="list">
          {goodsFromServer.map(good => (
            <li key={good} className={selectedGood === good && 'active'}>
              {good}
              {' '}
              {selectedGood !== good && (
                <button
                  type="button"
                  onClick={() => {
                    this.setState({ selectedGood: good });
                  }}
                >
                  Select
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
