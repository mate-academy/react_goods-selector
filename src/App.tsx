import { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

export const goods = [
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

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  removeSelection = () => (
    this.setState({ selectedGood: '' })
  );

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">

        {!selectedGood
          ? <h1 className="title">No goods selected</h1>
          : (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.removeSelection}
              />
            </h1>
          )}

        <table className="table">
          <tbody>
            {goods.map((good) => {
              const bgForSelectedGood = {
                'has-background-success-light': selectedGood === good,
              };

              return (
                <tr
                  key={good}
                  data-cy="Good"
                  className={classNames(bgForSelectedGood)}
                >
                  {selectedGood === good
                    ? (
                      <td>
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={this.removeSelection}
                        >
                          -
                        </button>
                      </td>
                    ) : (
                      <td>
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          onClick={() => (
                            this.setState({ selectedGood: good })
                          )}
                        >
                          +
                        </button>
                      </td>
                    )}
                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    );
  }
}
