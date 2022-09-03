import React from 'react';
import classNames from 'classnames';
import './App.scss';

import goodsFromServer from './goods';

type State = {
  selectedGood: string,
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  clearGood = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">

            {selectedGood
              ? `${selectedGood} is selected`
              : 'No goods selected' }
          </h1>

        </header>

        <ul>
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={classNames('Good',
                {
                  'Good--active': good === selectedGood,
                })}
            >
              {good}

              <button
                type="button"
                className={classNames('Good__select btn',
                  {
                    hide: good === selectedGood,
                  })}
                onClick={() => {
                  this.setState({
                    selectedGood: good,

                  });
                }}
              >
                Select
              </button>

              <button
                type="button"
                className={classNames('Good__remove btn',
                  {
                    show: good === selectedGood,
                  },
                )}
                onClick={this.clearGood}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="App__clear"
          onClick={this.clearGood}
        >
          Clear
        </button>
      </main>
    );
  }
}
