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
      <>
        {selectedGood ? (
          <h1>
            {`Selected good: - ${selectedGood} is selected`}
            <button
              type="button"
              onClick={() => {
                this.setState({ selectedGood: null });
              }}
            >
              x
            </button>
          </h1>
        ) : (
          <h1>No value selected</h1>
        )}

        {goodsFromServer.map(n => (
          <li type="square">
            <button
              type="button"
              key={n}
              className={selectedGood === n ? 'active' : ''}
              onClick={() => {
                this.setState({
                  selectedGood: n,
                });
              }}
            >
              {n}
            </button>
          </li>
        ))}
      </>
    );
  }
}

export default App;
