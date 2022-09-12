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

// eslint-disable-next-line react/prefer-stateless-function
export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1
          className={
            selectedGood.length > 0
              ? 'title is-flex is-align-items-center'
              : 'title'
          }
        >
          {
            selectedGood.length > 0
              ? `${selectedGood} is selected`
              : 'No goods selected'
          }

          {selectedGood.length > 0
            && (
            /* eslint-disable-next-line jsx-a11y/control-has-associated-label */
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => {
                  this.setState({ selectedGood: '' });
                }}
              />
            )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map((good) => (
              <tr
                data-cy="Good"
                className={
                  selectedGood === good
                    ? 'has-background-success-light'
                    : ''
                }
              >
                <td>
                  <button
                    data-cy={
                      selectedGood === good
                        ? 'RemoveButton'
                        : 'AddButton'
                    }
                    type="button"
                    className={
                      selectedGood === good
                        ? 'button is-info'
                        : 'button'
                    }
                    onClick={() => {
                      this.setState({ selectedGood: good });
                    }}
                  >
                    {
                      selectedGood === good
                        ? '-'
                        : '+'
                    }
                  </button>
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
