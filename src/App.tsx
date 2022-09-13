import React from 'react';
import classNames from 'classnames';
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

  selectedUser(good: string) {
    const { selectedGood } = this.state;

    if (!selectedGood.length) {
      this.setState({ selectedGood: good });
    } else if (selectedGood !== good) {
      this.setState({ selectedGood: good });
    } else {
      this.setState({ selectedGood: '' });
    }
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1
          className={
            classNames(
              'title',
              { 'is-flex is-align-items-center': selectedGood.length > 0 },
            )
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
                key={good}
                className={
                  classNames(
                    '',
                    { 'has-background-success-light': selectedGood === good },
                  )
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
                      classNames(
                        'button',
                        { 'is-info': selectedGood === good },
                      )
                    }
                    onClick={() => {
                      this.selectedUser(good);
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
