/* eslint-disable jsx-a11y/control-has-associated-label */
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

type State = {
  selectedGood: string,
  ClearButton: boolean
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
    ClearButton: true,
  };

  render() {
    const { selectedGood, ClearButton } = this.state;

    return (
      <main className="section container">

        { ClearButton ? (
          <h1 className="title is-flex is-align-items-center">
            {`${selectedGood} is selected`}

            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => {
                this.setState({ ClearButton: false });
              }}
            />
          </h1>
        ) : (
          <h1 className="title">No goods selected</h1>
        )}

        <table className="table">
          <tbody>
            {goods.map((good) => (
              <tr
                key={good}
                data-cy="Good"
                className={selectedGood === good && ClearButton
                  ? 'has-background-success-light'
                  : ''}
              >
                <td>
                  <button
                    data-cy={selectedGood === good && ClearButton
                      ? 'RemoveButton'
                      : 'AddButton'}
                    type="button"
                    className={classNames('button',
                      { 'is-info': selectedGood === good && ClearButton })}
                    onClick={() => {
                      this.setState({ selectedGood: good });
                      this.setState({ ClearButton: true });
                    }}
                  >
                    {selectedGood === good && ClearButton ? '-' : '+'}
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
