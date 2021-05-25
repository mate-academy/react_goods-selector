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
      <div className="App">
        <h1>{`Selected good: ${good} is selected`}</h1>

        <button
          className={good === 'Nothing is selected' ? 'selectedButton' : ''}
          type="button"
          onClick={() => this.setState({ good: 'Nothing is selected' })}
        >
          clear
        </button>

        <br />
        <br />

        <ul>
          {goodsFromServer.map(item => (
            <li className={good.includes(item) ? 'yellow' : ''}>
              {item}

              {': '}

              <button
                className={good.includes(item) ? 'selectedButton' : ''}
                type="button"
                onClick={() => this.setState({ good: item })}
              >
                select
              </button>
            </li>
          ))}
        </ul>

        {goodsFromServer.length}
      </div>
    );
  }
}

export default App;
