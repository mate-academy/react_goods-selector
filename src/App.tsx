import React from 'react';
import cn from 'classnames';
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
  state: State = {
    selectedGood: 'Jam',
  };

  handleDeselect = () => {
    this.setState({ selectedGood: '' });
  };

  handleSelect = (good: string) => {
    this.setState({ selectedGood: good });
  };

  render(): React.ReactNode {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {(selectedGood)
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => (
                  this.handleDeselect()
                )}
              />
            </h1>
          )
          : (
            <h1 className="title">No goods selected</h1>
          )}

        <table className="table">
          <tbody>
            {goods.map(good => {
              return (
                <tr
                  data-cy="Good"
                  className={
                    cn({
                      'has-background-success-light': good === selectedGood,
                    })
                  }
                >
                  <td>
                    <button
                      data-cy={
                        good === selectedGood
                          ? 'RemoveButton'
                          : 'AddButton'
                      }
                      type="button"
                      className={
                        cn(
                          'button',
                          {
                            'is-info': good === selectedGood,
                          },
                        )
                      }
                      onClick={() => (
                        (selectedGood === good)
                          ? this.handleDeselect()
                          : this.handleSelect(good)
                      )}
                    >
                      {selectedGood === good ? '-' : '+'}
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
    );
  }
}
