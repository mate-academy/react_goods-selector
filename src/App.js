import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    goodsFromServer: [
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
    ],
    clicked: '',
  };

  clickWorker = (item) => {
    this.setState({ clicked: item });
  }

  render() {
    const { goodsFromServer, clicked } = this.state;

    return (

      <div className="App">
        <h1>
          {`Selected good: - ${clicked}`}

          {clicked ? (
            <button
              type="button"
              onClick={() => {
                this.clickWorker('');
              }}
            >
              X
            </button>
          )
            : null
          }

        </h1>
        <ul>
          {goodsFromServer.map(item => (
            <li>
              <button
                type="button"
                className={clicked === item ? 'selected' : null}
                key={item}
                onClick={() => {
                  this.clickWorker(item);
                }}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
