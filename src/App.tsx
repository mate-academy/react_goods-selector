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

type State = {
  selectedGood: string;
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  handleClear = () => this.setState({ selectedGood: '' });

  handleAdd = (good: string) => this.setState({ selectedGood: good });

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}

              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.handleClear}
              />
            </h1>
          )
          : <h1 className="title">No goods selected</h1>}

        <table className="table">
          <tbody>
            {goods.map((good) => {
              const isGoodSelected = selectedGood === good;

              return (
                <tr
                  data-cy="Good"
                  className={classNames({
                    'has-background-success-light': isGoodSelected,
                  })}
                >
                  <td>
                    {isGoodSelected
                      ? (
                        <button
                          className="button is-info"
                          type="button"
                          onClick={() => this.setState({ selectedGood: '' })}
                          data-cy="RemoveButton"
                        >
                          -
                        </button>
                      )
                      : (
                        <button
                          className="button"
                          type="button"
                          onClick={() => (
                            this.handleAdd(good)
                          )}
                          data-cy="AddButton"
                        >
                          +
                        </button>
                      )}
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
