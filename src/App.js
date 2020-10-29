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
    const { good } = this.state;

    return (
      <main>
        <h1>
          {`Selected good is: ${good || ''}`}
          <button
            type="button"
            className={good ? 'button' : 'button--hidden'}
            onClick={this.clearList}
          >
            clear
          </button>
        </h1>
        <ul className="goods">
          {goodsFromServer.map(item => (
            <li key={item}>
              <button
                type="button"
                className={good === item ? 'selected' : ''}
                onClick={() => {
                  this.goodSelector(item);
                }}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default App;
