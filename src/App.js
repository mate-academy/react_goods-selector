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
    selectedGood: '',
  };

  saveHandler = (event) => {
    this.setState({ selectedGood: event.target.textContent });
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="app">
        <h1>
          Selected good: -
          {selectedGood}
          {selectedGood && (
            <button
              type="button"
              onClick={this.saveHandler}
              className="smallButton"
            />
          )}
        </h1>
        <ul>
          {goodsFromServer.map(product => (
            <li key={product}>
              <button
                type="button"
                onClick={this.saveHandler}
                className={selectedGood === product
                  ? 'clicked'
                  : null
                }
              >
                {product}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
