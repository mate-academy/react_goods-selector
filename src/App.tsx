import classNames from 'classnames';
import { Component } from 'react';
import './App.scss';
import goodsFromServer from './goods';

export class App extends Component {
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

          {selectedGood !== 'No good' && (
            <button
              type="button"
              onClick={() => {
                this.setState({
                  selectedGood: 'No good',
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
            <th> </th>
            <th> </th>
          </thead>
          <tbody>
            {goodsFromServer.map(good => (
              <tr key={good}>
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

                <td>
                  {good === selectedGood ? (
                    <button
                      type="button"
                      onClick={() => {
                        this.setState({
                          selectedGood: 'No good',
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
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}
