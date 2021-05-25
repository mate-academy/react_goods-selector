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
    good: 'No goods selected',
  }

  render() {
    const { good } = this.state;

    return (
      <div className="App">
        <h1>{`Selected good: ${good}`}</h1>

        <button
          className={good === '' ? 'selectedButton' : ''}
          type="button"
          onClick={() => this.setState({ good: '' })}
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
                onClick={() => this.setState({ good: `${item} is selected` })}
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
