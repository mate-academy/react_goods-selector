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
    goods: [...goodsFromServer],
    selectedGood: 'Jam',
  }

  clearAllGoods = () => {
    this.setState({
      selectedGood: null,
    });
  }

  render() {
    const { goods, selectedGood } = this.state;

    return (
      <div className="App">
        {selectedGood ? (
          <h1>
            {selectedGood}
            {' '}
            is selected
            <button
              type="button"
              onClick={this.clearAllGoods}
            >
              x
            </button>
          </h1>
        ) : (
          <h1>No goods selected</h1>
        )}
        {goods.map(good => (
          <div className={selectedGood === good ? 'active' : 'good'} key={good}>
            {good}
            {selectedGood !== good && (
              <button
                type="button"
                className="button"
                onClick={() => {
                  this.setState({
                    selectedGood: good,
                  });
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
