import classNames from 'classnames';
import React from 'react';
import './App.scss';
import goods from './goods';

type State = {
  selectedGood: string,
};

export class App extends React.Component<{}, State> {
  state: State = {
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

          {selectedGood !== 'Nothing' && (
            <button
              type="button"
              onClick={() => {
                this.setState({
                  selectedGood: 'Nothing',
                });
              }}
              className="App__clear"
            >
              Clear
            </button>
          )}
        </header>

        <table>
          <thead>
            <caption> </caption>
          </thead>
          <tbody>
            {goods.map(good => (
              <tr key={good}>
                <td>
                  {good === selectedGood ? (
                    <button
                      type="button"
                      onClick={() => {
                        this.setState({
                          selectedGood: 'Nothing',
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
                </td>
                <td
                  className={classNames(
                    'Good',
                    {
                      'Good--active': good === selectedGood,
                    },
                  )}
                >
                  {good}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}
