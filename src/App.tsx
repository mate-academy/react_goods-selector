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

export interface State {
  selectedGood: string
}

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  handleClickRemove = () => {
    this.setState({ selectedGood: '' });
  };

  handleClickAdd = (good: string) => {
    this.setState({ selectedGood: good });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className={cn(
          'title',
          {
            'is-flex is-align-items-center': selectedGood,
          },
        )}
        >
          {
            selectedGood
              ? (
                <>
                  {`${selectedGood} is selected`}
                  {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                  <button
                    data-cy="ClearButton"
                    type="button"
                    className="delete ml-3"
                    onClick={this.handleClickRemove}
                  />
                </>
              )
              : ('No goods selected')
          }
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                key={good}
                data-cy="Good"
                className={cn(
                  {
                    'has-background-success-light': good === selectedGood,
                  },
                )}
              >
                <td>
                  {
                    good !== selectedGood
                      ? (
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          onClick={() => {
                            this.handleClickAdd(good);
                          }}
                        >
                          +
                        </button>
                      )
                      : (
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={this.handleClickRemove}
                        >
                          -
                        </button>
                      )
                  }
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
