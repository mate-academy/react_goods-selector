import React, { Component } from 'react';
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
  selectedGood: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  added = (good: string) => {
    this.setState({ selectedGood: good });
  };

  deleted = () => {
    this.setState({ selectedGood: '' });
  };

  render(): React.ReactNode {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className={classNames('title',
          {
            title: selectedGood !== '',
            'is-flex': selectedGood !== '',
            'is-align-items-center': selectedGood !== '',
          })}
        >
          {selectedGood === '' ? (
            'No goods selected'
          ) : (
            <>
              {`${selectedGood} is selected`}

              {selectedGood !== '' && (
                // eslint-disable-next-line jsx-a11y/control-has-associated-label
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={this.deleted}
                />
              )}
            </>
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map((good: string) => {
              const isSelected = selectedGood === good;

              return (
                <tr
                  data-cy="Good"
                  key={good}
                  className={isSelected ? 'has-background-success-light' : ''}
                >
                  <td>
                    <button
                      data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
                      type="button"
                      className={classNames('button',
                        {
                          'is-info': isSelected,
                        })}
                      onClick={
                        isSelected
                          ? this.deleted
                          : () => this.added(good)
                      }
                    >
                      {isSelected ? '-' : '+'}
                    </button>
                  </td>

                  <td
                    data-cy="GoodTitle"
                    className="is-vcentered"
                  >
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
