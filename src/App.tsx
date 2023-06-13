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
  selectedGood: string | null,
}

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  handleClick = (good: string) => {
    this.setState({ selectedGood: good });
  };

  removeButton = () => {
    this.setState({ selectedGood: null });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <>
        <main className="section container">

          {selectedGood !== null
            ? (
              <h1 className="title is-flex is-align-items-center">
                {`${selectedGood} is selected`}

                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={() => this.removeButton()}
                />
              </h1>
            )
            : <h1 className="title">No goods selected</h1>}

          <table className="table">
            <tbody>
              {goods.map(good => {
                const isSelectedGood = selectedGood === good;

                return (
                  <tr
                    key={good}
                    data-cy="Good"
                    className={
                      cn({ 'has-background-success-light': isSelectedGood })
                    }
                  >
                    <td>
                      {}
                      <button
                        data-cy={
                          isSelectedGood
                            ? 'RemoveButton'
                            : 'AddButton'
                        }
                        type="button"
                        className={
                          cn('button', { 'is-info': isSelectedGood })
                        }
                        onClick={() => (
                          isSelectedGood
                            ? (this.removeButton())
                            : (this.handleClick(good))
                        )}
                      >
                        {isSelectedGood
                          ? '-'
                          : '+'}
                      </button>
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
      </>
    );
  }
}
