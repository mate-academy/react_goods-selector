/* eslint-disable max-len */
import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';

// import { type } from 'os';

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
// eslint-disable-next-line react/prefer-stateless-function
export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  handleClick = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      (
        <main className="section container">
          {selectedGood === ''
            ? <h1 className="title">No goods selected</h1>
            : (
              <h1 className="title is-flex is-align-items-center">
                {`${selectedGood} is selected`}
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  onClick={this.handleClick}
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                />
              </h1>
            )}

          <table className="table">
            <tbody>
              {goods.map(product => {
                return (
                  <tr
                    key={product}
                    data-cy="Good"
                    className={cn(
                      {
                        'has-background-success-light': selectedGood === product,
                      },
                    )}
                  >
                    <td>
                      {selectedGood === product
                        ? (
                          <button
                            onClick={this.handleClick}
                            data-cy="RemoveButton"
                            type="button"
                            className="button is-info"
                          >
                            -
                          </button>
                        )
                        : (
                          <button
                            onClick={() => {
                              this.setState({ selectedGood: product });
                            }}
                            data-cy="AddButton"
                            type="button"
                            className="button"
                          >
                            +
                          </button>
                        )}
                    </td>

                    <td data-cy="GoodTitle" className="is-vcentered">
                      {product}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </main>
      )
    );
  }
}
