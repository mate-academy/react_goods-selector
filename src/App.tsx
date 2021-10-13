import React from 'react';
import './App.scss';
import classNames from 'classnames';

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

interface State {
  selectedGood: string,
}

class App extends React.Component<{}, State> {
  state = {
    selectedGood: ' ',
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          {selectedGood === ' ' ? 'No goods selected' : `Selected good: ${selectedGood}`}
          {selectedGood === ' ' ? null
            : (
              <div>
                <button
                  className="App__button--x"
                  type="button"
                  onClick={() => {
                    this.setState({ selectedGood: ' ' });
                  }}
                >
                  Х
                </button>
              </div>
            )}
        </h1>

        <ul className="App__list">
          {goodsFromServer.map(good => (
            <li key={good} className={classNames({ active: good === selectedGood })}>
              {good}
              <button
                type="button"
                disabled={good === selectedGood}
                onClick={() => {
                  this.setState({ selectedGood: good });
                }}
              >
                Select
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
