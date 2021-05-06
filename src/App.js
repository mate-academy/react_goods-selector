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

  parseString = (good, index, arr) => (
    <React.Fragment key={good}>
      {index > 0 && index !== arr.length - 1 ? ', ' : ''}
      {good}
      { arr.length === 1 ? ' is selected' : ''}
      {index === arr.length - 2 ? ' and ' : ''}
      {index === arr.length - 1 && arr.length > 1 ? ' are selected' : ''}
    </React.Fragment>
  )

  prepareString = () => {
    const goodsArr = Object.keys(this.state.goods);

    return (goodsArr.length === 0)
      ? (
        <>
          No goods selected
        </>
      )
      : goodsArr.map(this.parseString);
  }

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
          {this.prepareString()}
        </h1>
      </div>
    );
  }
}

export default App;
