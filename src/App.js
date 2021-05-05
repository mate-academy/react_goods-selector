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
    goods: {
      Jam: 'Jam',
    },
  }

  select = (good) => {
    const copy = { ...this.state.goods };

    copy[good] = good;

    this.setState(prev => ({
      ...prev,
      goods: copy,
    }));
  }

  remove = (good) => {
    const copy = { ...this.state.goods };

    delete copy[good];
    this.setState(prev => ({
      ...prev,
      goods: copy,
    }));
  }

  reset = () => {
    this.setState(prev => ({
      ...prev,
      goods: {},
    }));
  }

  prepareString = (good, index, arr) => (
    (index === arr.length - 1 && arr.length !== 1)
      ? (
        <>
          {' and '}
          {good}
        </>
      )
      : (
        <>
          {good}
          {', '}
        </>
      )
  )

  render() {
    return (
      <div className="App">
        <ul>
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={Object.keys(this.state.goods).includes(good)
                ? 'selected'
                : ''}
            >
              {good}
              {!Object.keys(this.state.goods).includes(good)
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
          {Object.keys(this.state.goods).length > 0
          && Object.keys(this.state.goods)
            .map(this.prepareString)
            }
          {Object.keys(this.state.goods).length > 1 && ' are selected'}
          {Object.keys(this.state.goods).length === 0 && 'No goods selected'}
          {Object.keys(this.state.goods).length === 1 && 'is selected'}
        </h1>
      </div>
    );
  }
}

export default App;
