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

  addGood = (good) => {
    this.setState({ selectedGood: good });
  }

  removeGood = () => {
    this.setState({ selectedGood: null });
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good: -
          {' '}
          {
            selectedGood
              ? `${selectedGood}`
              : `no goods`
          }
          {' '}
          <button
            type="button"
            className="button__remove"
            onClick={this.removeGood}
          >
            X
          </button>
        </h1>
        <ul className="list">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={selectedGood === good ? 'product' : ''}
            >
              <button
                type="button"
                className={selectedGood !== good ? '' : 'button'}
                onClick={() => {
                  this.addGood(good);
                }}
              >
                Select
              </button>
              {' '}
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
