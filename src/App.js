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
    goods: ['Jam'],
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <div className="top">
          <h1>
            {goods.length === 0
              ? 'No goods selected'
              : (`${goods.map(good => (` ${good}`))} selected`)}
          </h1>
          {goods.length === 0
            ? ''
            : (
              <button
                type="button"
                onClick={() => {
                  this.setState({ goods: [] });
                }}
              >
                Clear all
              </button>
            )}
        </div>

        {goodsFromServer.map(good => (
          <div
            key={good}
            className={goods.includes(good) ? 'active good' : 'good'}
          >
            {good}
            {goods.includes(good)
              ? ''
              : (
                <button
                  type="button"
                  onClick={() => {
                    this.setState({ goods: [...goods, good] });
                  }}
                >
                  Select
                </button>
              ) }
          </div>
        ))}
      </div>
    );
  }
}

export default App;
