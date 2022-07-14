import React from 'react';
import './App.scss';
import classNames from 'classnames';

import goodsFromServer from './goods';

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
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">
            {selectedGood}
            {' '}
            is selected
          </h1>

          {selectedGood !== 'No goods' && (
            <button
              type="button"
              onClick={() => {
                this.setState({ selectedGood: 'No goods' });
              }}
              className="App__clear"
            >
              Clear
            </button>
          )}
        </header>

        <ul>
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={classNames(
                'Good',
                { 'Good--active': good === selectedGood },
              )}
            >
              {good}
              {good === selectedGood ? (
                <button
                  type="button"
                  onClick={() => {
                    this.setState({
                      selectedGood: 'No goods',
                    });
                  }}
                  className="Good__remove"
                >
                  Remove
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    this.setState({
                      selectedGood: good,
                    });
                  }}
                  className="Good__select"
                >
                  Select
                </button>
              )}
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default App;
