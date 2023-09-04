import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

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

type State = {
  selectedGood: string | null;
};

export class App extends React.Component<{}, State> {
  state: State = {
    selectedGood: 'Jam',
  };

  isSelected(good:string) {
    return this.state.selectedGood === good;
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">

        <h1 className="title is-flex is-align-items-center">
          {selectedGood
            ? `${selectedGood} is selected`
            : 'No goods selected'}

          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          { selectedGood !== '' && (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => (
                this.setState({
                  selectedGood: '',
                })
              )}
              aria-label="Clear Selection"
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => {
              return (
                <tr
                  data-cy="Good"
                  className={selectedGood === good
                    ? 'has-background-success-light'
                    : ''}
                >
                  <td>
                    {selectedGood === good
                      ? (
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={() => (
                            this.setState({
                              selectedGood: '',
                            })
                          )}
                        >
                          -
                        </button>
                      )
                      : (
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          onClick={() => (
                            this.setState({
                              selectedGood: good,
                            })
                          )}
                        >
                          +
                        </button>
                      )}

                  </td>

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
