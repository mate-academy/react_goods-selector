import classNames from 'classnames';
import React from 'react';
import './App.scss';
import goodsFromServer from './goods';

type State = {
  selectedGood: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">
            {`${selectedGood} is selected`}
          </h1>
        </header>

        <button
          type="button"
          className="App__clear"
          onClick={() => {
            this.setState({
              selectedGood: 'No goods selected',
            });
          }}
        >
          Clear
        </button>

        <ul>
          {goodsFromServer.map(good => (
            <div key={good} className="App__goods">
              <li
                className={classNames(
                  'Good',
                  {
                    'Good--active': selectedGood === good,
                  },
                )}
              >
                {good}
              </li>

              {
                selectedGood === good
                  ? (
                    <button
                      type="button"
                      className="Good__remove"
                      onClick={() => {
                        this.setState({
                          selectedGood: 'No goods selected',
                        });
                      }}
                    >
                      Remove
                    </button>
                  )
                  : (
                    <button
                      type="button"
                      className="Good__select"
                      onClick={() => {
                        this.setState({
                          selectedGood: good,
                        });
                      }}
                    >
                      Select
                    </button>
                  )
              }
            </div>
          ))}
        </ul>
      </main>
    );
  }
}
