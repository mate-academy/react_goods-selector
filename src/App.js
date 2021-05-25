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
        <h1 className="goods__title">
          {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
          <button
            type="button"
            className="removeButton"
            onClick={() => {
              this.setState({ selectedGood: null });
            }}
          >
            X
          </button>
        </h1>
        <div className="goods__list">
          {goodsFromServer.map(good => (
            <button
              type="button"
              key={good}
              className={`goods__item ${selectedGood === good ? 'active' : ''}`}
              onClick={() => {
                this.setState({ selectedGood: good });
              }}
            >
              {good}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
