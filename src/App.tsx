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
  selectedGood: string,
};

// eslint-disable-next-line react/prefer-stateless-function
export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  checkSelectedGood = (product: string, check: boolean) => {
    if (check) {
      return this.setState({ selectedGood: '' });
    }

    return this.setState({ selectedGood: product });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {!selectedGood
          ? <h1 className="title">No goods selected</h1>
          : (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => {
                  this.setState({
                    selectedGood: '',
                  });
                }}
              />
            </h1>
          )}

        <table className="table">
          <tbody>
            {
              goods.map(product => {
                return (
                  <tr
                    data-cy="Good"
                    className={classNames({
                      'has-background-success-light': selectedGood === product,
                    })}
                  >
                    <td>
                      <button
                        data-cy={
                          selectedGood === product
                            ? 'AddButton'
                            : 'RemoveButton'
                        }
                        type="button"
                        className={classNames(
                          'button',
                          {
                            'is-info': selectedGood === product,
                          },
                        )}
                        onClick={() => {
                          this.checkSelectedGood(
                            product,
                            product === selectedGood,
                          );
                        }}
                      >
                        {selectedGood === product ? '-' : '+'}
                      </button>
                    </td>

                    <td data-cy="GoodTitle" className="is-vcentered">
                      {product}
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </main>
    );
  }
}
