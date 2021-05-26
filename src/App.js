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
    good: 'Jam',
  }

  render() {
    const { good } = this.state;

    return (
      <div>
        {good ? (
          <h1>
            {good}
            {' '}
            is selected
            {' '}
            <button
              type="button"
              onClick={() => {
                this.setState({ good: null });
              }}
            >
              X
            </button>
          </h1>
        ) : (
          <h1>
            No goods selected
          </h1>
        )
        }
        <ul>
          {goodsFromServer.map(selectedGood => (
            <li
              key={selectedGood}
            >
              {selectedGood}
              {' '}
              {good !== selectedGood && (
              <button
                type="button"
                onClick={() => {
                  this.setState({
                    good: selectedGood,
                  });
                }}
              >
                Select
              </button>
              )
              }
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
