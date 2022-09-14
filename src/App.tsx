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
  selectedGood: string,
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">

        { !selectedGood
          ? (
            <h1 className="title">
              No goods selected
            </h1>
          )

          : (
            <h1 className="title is-flex is-align-items-center">
              {selectedGood
                ? `${selectedGood} is selected`
                : ''}
              <button
                data-cy="ClearButton"
                type="button"
                aria-label="ClearButton"
                className="delete ml-3"
                onClick={() => this.setState(
                  { selectedGood: '' },
                )}
              />
            </h1>
          )}

        <table className="table">
          <tbody>
            {goods.map(element => (
              <tr
                data-cy="Good"
                className={selectedGood === element
                  ? 'has-background-success-light'
                  : ''}
              >
                <td>
                  <button
                    data-cy={selectedGood === element
                      ? 'RemoveButton'
                      : 'AddButton'}
                    type="button"
                    className={selectedGood === element
                      ? 'button is-info'
                      : 'button'}
                    onClick={() => (
                      selectedGood === element
                        ? this.setState({ selectedGood: '' })
                        : this.setState({ selectedGood: element })
                    )}
                  >
                    {selectedGood === element
                      ? '-'
                      : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {element}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}
