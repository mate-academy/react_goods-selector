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
    selected: null,
    isGoodSelected: false,
  };

  selectGood = (good) => {
    this.setState({
      selected: good, isGoodSelected: true,
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.isGoodSelected
          ? (
            <>
              <h1>
                {this.state.selected}
                {' is selected'}
              </h1>
              <button
                type="button"
                onClick={() => {
                  this.setState({
                    selected: null, isGoodSelected: false,
                  });
                }}
              >
                X
              </button>
            </>
          ) : (
            <h1>No goods selected</h1>
          )}

        <ul className="Goods">
          {goodsFromServer.map(good => (
            <li
              className={good.localeCompare(this.state.selected) || 'active'}
              key={good}
            >
              {good}
              {good.localeCompare(this.state.selected)
                ? (
                  <button
                    type="button"
                    onClick={() => {
                      this.selectGood(good);
                    }}
                  >
                    add
                  </button>
                ) : (
                  ''
                )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
