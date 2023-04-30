/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
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

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  handleClick = (good = '') => {
    this.setState({ selectedGood: good });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood === '' && <h1 className="title">No goods selected</h1>}

        {selectedGood && (
          <h1 className="title is-flex is-align-items-center">
            <span>{`${selectedGood} is selected`}</span>
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => this.handleClick()}
            />
          </h1>
        )}

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                key={good}
                data-cy="Good"
                className={selectedGood === good
                  ? 'has-background-success-light'
                  : ''}
              >
                <td>
                  {selectedGood === good
                    ? (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={() => this.handleClick()}
                      >
                        -
                      </button>
                    )
                    : (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => this.handleClick(good)}
                      >
                        +
                      </button>
                    )}
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            ))}

            {/* remove button */}
            {/* <tr data-cy="Good" className="has-background-success-light">
              <td>
                <button
                  data-cy="RemoveButton"
                  type="button"
                  className="button is-info"
                >
                  -
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                Jam
              </td>
            </tr> */}

            {/* <tr data-cy="Good">
              <td>
                <button
                  data-cy="AddButton"
                  type="button"
                  className="button"
                >
                  +
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                Garlic
              </td>
            </tr> */}
          </tbody>
        </table>
      </main>
    );
  }
}
