/* eslint-disable no-nested-ternary */
import React from 'react';
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
  selectedItem: string;
};

export class App extends React.Component<{}, State> {
  state = {
    selectedItem: 'Jam',
  };

  clearSelection = () => {
    this.setState({ selectedItem: '' });
  };

  render() {
    const { selectedItem } = this.state;

    return (
      <main className="section container">

        <h1 className="title is-flex is-align-items-center">
          {
            selectedItem.length
              ? `${selectedItem} is selected`
              : 'No goods selected'
          }

          {selectedItem && (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              aria-label="clear"
              onClick={this.clearSelection}
            />
          )}
        </h1>

        <table className="table">
          <tbody>

            {goods.map((good) => (
              <tr
                key={good}
                data-cy="Good"
                className={classNames(
                  {
                    'has-background-success-light': selectedItem === good,
                  },
                )}
              >
                <td>
                  <button
                    data-cy={selectedItem === good
                      ? 'RemoveButton'
                      : 'AddButton'}
                    type="button"
                    className={classNames(
                      'button',
                      {
                        'is-info': selectedItem === good,
                      },
                    )}
                    onClick={() => {
                      this.setState(selectedItem !== good
                        ? { selectedItem: good }
                        : { selectedItem: '' });
                    }}
                  >
                    {selectedItem === good ? '-' : '+'}
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
