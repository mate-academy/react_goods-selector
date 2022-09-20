/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import 'bulma/css/bulma.css';
import classNames from 'classnames';
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

export class App extends React.Component<{}, {}> {
  state = {
    selectedGood: 'Jam',
  };

  render() {
    const { selectedGood } = this.state;

    const setRightState = (good: string) => {
      this.setState({
        selectedGood: selectedGood === good
          ? ''
          : good,
      });
    };

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {selectedGood
            ? `${selectedGood} is selected`
            : 'No goods selected'}

          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          {selectedGood
          && (
            // eslint-disable-next-line jsx-a11y/control-has-associated-label
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
            {goods.map((good: string) => (
              <tr
                key={good}
                data-cy="Good"
                className={classNames(
                  { 'has-background-success-light': selectedGood === good },
                )}
              >
                <td>
                  <button
                    className={selectedGood === good
                      ? 'button is-info'
                      : 'button'}
                    data-cy={selectedGood === good
                      ? 'RemoveButton'
                      : 'AddButton'}
                    type="button"
                    onClick={() => setRightState(good)}
                  >
                    {selectedGood === good
                      ? '-'
                      : '+'}
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
