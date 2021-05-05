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
    Jam: '',
  }

  select = (good) => {
    this.setState(prev => ({
      ...prev,
      [good]: good,
    }
    ));
  }

  remove = (good) => {
    delete this.state[good];
    this.setState(prev => ({
      ...prev,
    }
    ));
  }

  reset = () => {
    Object.keys(this.state).forEach((key) => {
      delete this.state[key];
      this.setState(prev => ({
        ...prev,
      }
      ));
    });
  }

  render() {
    return (
      <div className="App">
        <ul>
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={Object.keys(this.state).includes(good)
                ? 'selected'
                : ''}
            >
              {good}
              {!Object.keys(this.state).includes(good)
                ? (
                  <button
                    type="button"
                    onClick={() => {
                      this.select(good);
                    }}
                  >
                    Select
                  </button>
                )
                : (
                  <button
                    type="button"
                    onClick={() => {
                      this.remove(good);
                    }}
                  >
                    Remove
                  </button>
                )}
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => {
            this.reset();
          }}
        >
          Reset
        </button>
        <h1>
          {Object.keys(this.state).length > 0 && Object.keys(this.state)
            .map((good, index, arr) => {
              if (index === arr.length - 1 && arr.length !== 1) {
                return (
                  <>
                    {' and '}
                    {good}
                  </>
                );
              }

              return (
                <>
                  {good}
                  {', '}
                </>
              );
            })
            }
          {Object.keys(this.state).length > 1 && ' are selected'}
          {Object.keys(this.state).length === 0 && 'No goods selected'}
          {Object.keys(this.state).length === 1 && 'is selected'}
        </h1>
      </div>
    );
  }
}

export default App;
