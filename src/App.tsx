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

interface State {
  selectedGood: string
}

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  handleClearGood = () => {
    this.setState({ selectedGood: '' });
  };

  handleSelectGood = (good: string) => (
    this.state.selectedGood === good
      ? this.setState({ selectedGood: '' })
      : this.setState({ selectedGood: good })
  );

  render() {
    const { selectedGood } = this.state;

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
                  onClick={this.handleClearGood}
                />
              </h1>
            )
            : (
              <h1 className="title">No goods selected</h1>
            )
        }
        <table className="table">
          <tbody>
            {
              goods.map(good => {
                const isSelected = selectedGood === good;

                return (
                  <tr
                    data-cy="Good"
                    key={good}
                    className={classNames(
                      '',
                      {
                        'has-background-success-light':
                          isSelected,
                      },
                    )}
                  >
                    <td>
                      <button
                        data-cy={
                          isSelected
                            ? 'RemoveButton'
                            : 'AddButton'
                        }
                        type="button"
                        className={classNames(
                          'button',
                          {
                            'is-blue is-info': isSelected,
                          },
                        )}
                        onClick={() => {
                          this.handleSelectGood(good);
                        }}
                      >
                        {
                          isSelected
                            ? '-'
                            : '+'
                        }
                      </button>
                    </td>

                    <td data-cy="GoodTitle" className="is-vcentered">
                      {good}
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </main>
    );
  }
}
