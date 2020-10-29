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
    good: '',
  }

  clearList = () => {
    this.setState({ good: '' });
  }

  goodSelector = (good) => {
    this.setState({ good });
  }

  render() {
    return (
      <main>
        <h1>
          {`Selected good is: ${this.state.good ? this.state.good : ''}`}
          <button
            type="button"
            className={this.state.good ? 'button' : 'button--hidden'}
            onClick={this.clearList}
          >
            clear
          </button>
        </h1>
        <ul className="goods">
          {goodsFromServer.map(good => (
            <li key={good}>
              <button
                type="button"
                className={this.state.good === good ? 'selected' : ''}
                onClick={this.clearList}
              >
                {good}
              </button>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default App;
