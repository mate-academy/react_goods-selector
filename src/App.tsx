import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

interface State {
  selectedGood: string | null,
}

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

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  handleButton(relatedGood: string | null) {
    return this.setState({ selectedGood: relatedGood });
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {!selectedGood
          ? (
            <h1 className="title">No goods selected</h1>
          ) : (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                onClick={() => this.handleButton(null)}
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
              />
            </h1>
          )}
        <table className="table">
          <tbody>
            {goods.map((good) => (
              <tr
                data-cy="Good"
                className={good !== selectedGood
                  ? ''
                  : 'has-background-success-light'}
              >
                <td>
                  {good !== selectedGood
                    ? (
                      <button
                        onClick={() => this.handleButton(good)}
                        data-cy="AddButton"
                        type="button"
                        className="button"
                      >
                        +
                      </button>
                    ) : (
                      <button
                        onClick={() => this.handleButton(null)}
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                      >
                        -
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
