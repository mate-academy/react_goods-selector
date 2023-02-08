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
  selectedGood: string;
};

export class App extends React.Component<{}, State> {
  state = { selectedGood: 'Jam' };

  render() {
    const { selectedGood } = this.state;

    const handlerGood = (good = '') => {
      this.setState({ selectedGood: good });
    };

    return (
      <main className="section container">

        <h1 className="title is-flex is-align-items-center">
          {selectedGood.length
            ? `${selectedGood} is selected`
            : 'No goods selected'}

          {!selectedGood.length
            || (
              <button
                data-cy="ClearButton"
                aria-label="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => handlerGood()}
              />
            )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                data-cy="Good"
                key={good}
                className={classNames({
                  'has-background-success-light':
                  (selectedGood === good),
                })}
              >
                {
                  selectedGood === good
                    ? (
                      <td>
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={() => handlerGood()}
                        >
                          -
                        </button>
                      </td>
                    )
                    : (
                      <td>
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          onClick={() => handlerGood(good)}
                        >
                          +
                        </button>
                      </td>
                    )
                }

                <td data-cy="GoodTitle" className="is-vcentered">
                  { good }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}
