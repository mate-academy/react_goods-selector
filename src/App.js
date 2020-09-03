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
    selected: '',
  }

  render() {
    return (
      <div className="App">
        <h1>
          Selected good:
          {this.state.selected}
        </h1>
        <button
          type="button"
          onClick={() => {
            this.setState({ selected: '' });
          }}
        >
          X
        </button>
        {goodsFromServer.map(good => (
          <div key={good}>
            <button
              type="button"
              className={
                `good${this.state.selected === good ? ' selected' : ''}`
              }
              onClick={() => {
                this.setState({ selected: good });
              }}
            >
              {good}
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
