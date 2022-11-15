import React from 'react'; import './App.scss';

import goodsFromServer from './goods';

type Props = {

};

type State = {
  selectedGood: string
};

export class App extends React.Component<Props, State> {
  state = {
    selectedGood: 'Jam',
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">
            {selectedGood
              ? `${selectedGood} is selected`
              : 'No goods selected'}
          </h1>

          {selectedGood !== 'No goods'
            && (
              <button
                type="button"
                className="App__clear"
                onClick={() => {
                  this.setState({ selectedGood: '' });
                }}
              >
                Clear
              </button>
            )}
        </header>

        <ul>
          {
            goodsFromServer.map((good) => {
              return (
                <li
                  key={good}
                  className={
                    selectedGood === good
                      ? 'Good Good--active'
                      : 'Good'
                  }
                >
                  {' '}
                  {good}
                  {selectedGood === good ? (
                    <button
                      type="button"
                      className="Good__remove"
                      onClick={() => {
                        this.setState({ selectedGood: 'No good' });
                      }}
                    >
                      Remove
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="Good__select"
                      onClick={() => {
                        this.setState({ selectedGood: good });
                      }}
                    >
                      Select
                    </button>
                  )}
                </li>
              );
            })
          }
        </ul>
      </main>
    );
  }
}
