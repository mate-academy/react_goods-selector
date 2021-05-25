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
    values: null,
  }

  render() {
    const { values } = this.state;

    return (
      <div className="App">
        {values ? (
          <h1>
            Current value is
            {values}
            <button
              type="button"
              className="resetButton"
              onClick={() => {
                this.setState({ values: null });
              }}
            >
              x
            </button>
          </h1>
        ) : (
          <h1>No value selected</h1>
        )}
        <ul>
          {goodsFromServer.map(word => (
            <li>
              <button
                type="button"
                key={word}
                className={`item ${values === word ? 'active' : ''}`}
                onClick={() => {
                  this.setState({ values: word });
                }}
              >
                {word}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
