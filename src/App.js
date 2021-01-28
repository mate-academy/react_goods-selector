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
  };

  render() {
    return (
      <div className="App">
        <h1>
          {`Selected good: - ${this.state.selectedGood || 'None'}`}
          <button
            type="button"
            onClick={() => {
              this.setState({
                selectedGood: null,
              });
            }}
          >
            X
          </button>
        </h1>
        <ul>
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={this.state.selectedGood === good ? 'selected' : ''}
            >
              {good}
              <button
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
