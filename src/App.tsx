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

interface State {
  selectedGood: string;
}

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  selectedItem = (item: string) => {
    this.setState({ selectedGood: item });
  };

  clearItem = () => {
    this.setState({ selectedGood: '' });
  };

  render(): React.ReactNode {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1
          className={classNames(
            'title',
            {
              'is-flex is-align-items-center': selectedGood,
            },
          )}
        >
          {selectedGood
            ? `${selectedGood} is selected`
            : 'No goods selected'}

          {selectedGood && (
            // eslint-disable-next-line jsx-a11y/control-has-associated-label
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => this.clearItem()}
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map((good) => (
              <tr
                data-cy="Good"
                className={classNames(
                  { 'has-background-success-light': good === selectedGood },
                )}
              >

                <td>
                  <button
                    data-cy={good === selectedGood
                      ? 'RemoveButton'
                      : 'AddButton'}
                    type="button"
                    className={classNames(
                      'button',
                      { 'is-info': good === selectedGood },
                    )}
                    onClick={() => this.selectedItem(
                      selectedGood === good ? '' : good,
                    )}
                  >
                    {good === selectedGood ? '-' : '+'}
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
