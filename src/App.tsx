/* eslint-disable jsx-a11y/control-has-associated-label */
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

  setGood = (good: string) => {
    this.setState(state => ({
      selectedGood: state.selectedGood === good
        ? ''
        : good,
    }));
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {selectedGood
            ? `${selectedGood} is selected`
            : 'No goods selected'}
          {selectedGood
          && (
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
                    className={classNames('button',
                      { 'is-info': selectedGood === good })}
                    data-cy={selectedGood === good
                      ? 'RemoveButton'
                      : 'AddButton'}
                    type="button"
                    onClick={() => this.setGood(good)}
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
