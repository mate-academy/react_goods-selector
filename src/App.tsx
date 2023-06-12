import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';

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
  selectedGood: string;
}

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                onClick={() => this.setState({ selectedGood: '' })}
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
              />
            </h1>
          ) : (
            <h1 className="title">
              No goods selected
            </h1>
          )}

        <table className="table">
          <tbody>
            {goods.map((good) => (
              <tr
                key={good}
                data-cy="Good"
                className={cn(
                  {
                    'has-background-success-light': good === selectedGood,
                  },
                )}
              >
                <td>
                  {good === selectedGood
                    ? (
                      <button
                        onClick={() => this.setState({ selectedGood: '' })}
                        data-cy="RemoveButton"
                        type="button"
                        className="button"
                      >
                        -
                      </button>
                    ) : (
                      <button
                        onClick={() => this.setState({ selectedGood: good })}
                        data-cy="AddButton"
                        type="button"
                        className="button"
                      >
                        +
                      </button>
                    )}
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
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
