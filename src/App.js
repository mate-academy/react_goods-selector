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
        <h1 className="App__title">
          {'Selected good: '}
          {(!selectedGood) ? 'none' : selectedGood}
          <button
            type="button"
            hidden={(!selectedGood) && true}
            onClick={() => {
              this.setState(
                {
                  selectedGood: null,
                },
              );
            }}
          >
            X
          </button>
        </h1>

        <ul>
          {goodsFromServer.map(good => (
            <li key={good} className="App__good">
              <span className={selectedGood === good ? 'active' : ''}>
                {good}
              </span>

              <button
                type="button"
                onClick={() => {
                  this.setState(
                    {
                      selectedGood: good,
                    },
                  );
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
