import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    goodsFromServer: [
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
    ],
    selectedGood: 'Jam',
  }

  render() {
    const { goodsFromServer, selectedGood } = this.state;

    return (
      <div className="App">
        {selectedGood ? (
          <h1>
            {selectedGood}
            {' '}
            is selected
            <button
              type="button"
              onClick={() => {
                this.setState({
                  selectedGood: null,
                });
              }}
            >
              x
            </button>
          </h1>
        ) : (
          <h1>No goods selected</h1>
        )}
        {goodsFromServer.map(good => (
          <div className={selectedGood === good ? 'active' : 'good'} key={good}>
            {good}
            {selectedGood === good ? (''
            ) : (
              <button
                type="button"
                className="button"
                onClick={() => {
                  this.setState({
                    selectedGood: good,
                  });
                }}
              >
                Select
              </button>
            )}

          </div>
        ))}
      </div>
    );
  }
}

export default App;
