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
  }

  setSelectedGood = selectedGood => this.setState({
    selectedGood,
  })

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <ul>
          {goodsFromServer.map(good => (
            <>
              <li
                key={good}
                className={selectedGood === good ? 'active' : ''}
              >
                {good}
                {!(selectedGood === good) && (
                  <button
                    type="button"
                    onClick={() => this.setSelectedGood(good)}
                  >
                    Select
                  </button>
                )}
              </li>
            </>
          ))
          }
        </ul>
        <h1>
          Selected good:
          {' '}
          <span>
            {selectedGood
              ? `${selectedGood} `
              : 'Nothing '
            }
            is selected
          </span>
          {selectedGood && (
            <button
              type="button"
              onClick={() => this.setSelectedGood(null)}
            >
              X
            </button>
          )}
        </h1>
      </div>
    );
  }
}

export default App;
