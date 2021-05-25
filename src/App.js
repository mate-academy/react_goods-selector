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
    value: ['Jam'],
  }

  remove = () => {
    this.setState({ value: null });
  }

  render() {
    const { value } = this.state;

    return (
      <div className="App">
        {value
          ? (
            <h1>
              {`${value} - is selected`}
              <button
                type="button"
                onClick={
                  this.removed
                }
              >
                Cancel
              </button>
            </h1>
          )
          : (
            <h1>No value selected</h1>
          )}
        <ul>
          {goodsFromServer.map(good => (
            <li className="good" key={good}>
              <button
                type="button"
                className={value === good ? 'active' : ''}
                onClick={() => {
                  this.setState({ value: good });
                }}
              >
                {good}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
