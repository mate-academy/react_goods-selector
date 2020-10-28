import React from 'react';
import classNames from 'classnames';
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
    selectedGood: '-',
  };

  resetSelectedGood = () => {
    this.setState({ selectedGood: '-' });
  };

  selectGood = (good) => {
    this.setState({ selectedGood: good });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good:
        </h1>
        <h2>{selectedGood}</h2>
        {selectedGood !== '-' && (
          <button
            type="button"
            className="buttonReset"
            onClick={this.resetSelectedGood}
          >
            X
          </button>
        )}
        <div>
          {goodsFromServer.map(good => (
            <button
              type="button"
              key={good}
              className={classNames('good', {
                'good--selected': good === selectedGood,
              })}
              onClick={() => {
                this.selectGood(good);
              }}
            >
              {good}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
