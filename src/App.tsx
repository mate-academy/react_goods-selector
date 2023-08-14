/* eslint-disable jsx-a11y/control-has-associated-label */
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

export class App extends React.Component {
  state = {
    selectedGood: 'Jam',
  };

  clear = () => {
    this.setState({ selectedGood: '' });
  };

  selectedItem = (good: string) => {
    this.setState({ selectedGood: good });
  };

  render() {
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
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.clear}
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                data-cy="Good"
                id={good}
                key={good}
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
