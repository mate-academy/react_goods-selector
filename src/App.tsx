import React from 'react';
import './App.scss';

const goodsFromServer: string[] = [
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

type State = {
  selectedGood: string,
};

class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1>
          {selectedGood.length > 0 ? `Selected good: ${selectedGood}` : 'No goods selected'}
        </h1>
        <ul className="goods">
          {goodsFromServer.map(good => (
            <li className={`good ${good === selectedGood ? 'good__on' : null}`} key={good}>
              {good}
              <button
                className={`good__btn ${good === selectedGood ? 'good__btn--on' : null}`}
                type="button"
                onClick={() => (
                  selectedGood !== good
                    ? this.setState({ selectedGood: good })
                    : this.setState({ selectedGood: '' })
                )}
              >
                {good !== selectedGood ? 'Select' : 'Remove'}
              </button>
            </li>
          ))}
          {!selectedGood ? '' : (
            <button
              className="clear__btn"
              type="button"
              onClick={() => {
                this.setState({ selectedGood: '' });
              }}
            >
              Clear
            </button>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
