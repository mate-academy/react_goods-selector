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

  setSelectedGood = good => this.setState(() => ({
    selectedGood: good,
  }))

  render() {
    return (
      <div className="App">
        <ul>
          {goodsFromServer.map(good => (
            <>
              <li
                key={good}
                className={this.state.selectedGood === good ? 'active' : ''}
              >
                {`${good} `}
                <button
                  type="button"
                  hidden={this.state.selectedGood === good}
                  onClick={() => this.setSelectedGood(good)}
                >
                  Select
                </button>
              </li>
            </>
          ))
          }
        </ul>
        <h1>
          Selected good:
          {' '}
          <span>
            {this.state.selectedGood
              ? `${this.state.selectedGood} `
              : 'Nothing '
            }
            is selected
          </span>
          <button
            type="button"
            hidden={this.state.selectedGood === null}
            onClick={() => this.setSelectedGood(null)}
          >
            X
          </button>
        </h1>
      </div>
    );
  }
}

export default App;
