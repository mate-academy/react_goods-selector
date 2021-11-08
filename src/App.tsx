import React from 'react';
import classNames from 'classnames';
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

class App extends React.Component {
  state = {
    selectedGood: 'Jam',
  };

  selectGood = (good: string) => {
    this.setState(
      { selectedGood: good },
    );
  };

  clearSelection = () => {
    this.setState(
      { selectedGood: '' },
    );
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1>{`Selected good: ${selectedGood}`}</h1>
        <ul>
          {goodsFromServer.map((good) => (
            <li
              key={good}
              className={classNames('App__good', { 'App__good--selected': good === selectedGood })}
            >
              {good}
              {good !== selectedGood && (
                <button
                  type="button"
                  className="App__button App__button--select"
                  onClick={() => this.selectGood(good)}
                >
                  Select
                </button>
              )}
            </li>
          ))}
        </ul>
        {selectedGood && (
          <button
            type="button"
            className="App__button App__button--clear"
            onClick={this.clearSelection}
          >
            Clear selection
          </button>
        )}
      </div>
    );
  }
}

export default App;
