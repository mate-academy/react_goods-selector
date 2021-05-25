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
    selectedGoods: ['Jam'],
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <div className="top">
          <h1>
            {selectedGoods.length === 0
              ? 'No goods selected'
              : (`${selectedGoods.map(good => (` ${good}`))} selected`)}
          </h1>
          {!!selectedGoods.length && (
            <button
              type="button"
              onClick={() => {
                this.setState({ selectedGoods: [] });
              }}
            >
              Clear all
            </button>
          )}
        </div>

        {goodsFromServer.map(good => (
          <div
            key={good}
            className={selectedGoods.includes(good) ? 'active good' : 'good'}
          >
            {good}
            {!selectedGoods.includes(good) && (
            <button
              type="button"
              onClick={() => {
                this.setState({ selectedGoods: [...selectedGoods, good] });
              }}
            >
              Select
            </button>
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default App;
