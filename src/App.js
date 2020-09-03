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
    selectedGood: '-',
  }

  select = (good) => {
    this.setState({
      selectedGood: good,
    });
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="app">
        <h1>
          Selected good:
          {' '}
          {selectedGood}
        </h1>
        <button
          style={selectedGood === '-' ? { display: 'none' } : null}
          type="button"
          onClick={() => {
            this.setState({
              selectedGood: '-',
            });
          }}
        >
          X
        </button>
        {goodsFromServer.map(good => (
          <button
            key={good}
            type="button"
            className={selectedGood === good ? `selected` : ''}
            onClick={() => this.select(good)}
          >
            {good}
          </button>
        ))}
      </div>
    );
  }
}

export default App;
