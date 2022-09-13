import { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

export const goods: string[] = [
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
  selectedGood: string;
};

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  render() {
    const { selectedGood } = this.state;

    const removeOrSelectGood = (good: string) => (
      selectedGood === good
        ? this.setState({ selectedGood: '' })
        : this.setState({ selectedGood: good })
    );

    return (
      <main className="section container">
        {
          selectedGood

            ? (
              <h1 className="title is-flex is-align-items-center">
                {`${selectedGood} is selected`}

                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={() => this.setState({ selectedGood: '' })}
                />
              </h1>
            )
            : (<h1 className="title">No goods selected</h1>)

        }

        <table className="table">
          {goods.map(good => {
            const RightTarget = selectedGood === good;

            return (

              <tbody>
                <tr
                  key={good}
                  data-cy="Good"
                  className={classNames(
                    '',
                    { 'has-background-success-light': RightTarget },
                  )}
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
                          { 'is-info': RightTarget },
                        )
                      }
                      onClick={() => {
                        removeOrSelectGood(good);
                      }}
                    >
                      {
                        RightTarget
                          ? '-'
                          : '+'
                      }
                    </button>

                  </td>
                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </main>
    );
  }
}
