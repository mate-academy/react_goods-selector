import React from 'react';
import 'bulma/css/bulma.css';
import classNames from 'classnames';
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
  selectedProduct: string;
}

export class App extends React.Component<{}, State> {
  state: State = {
    selectedProduct: 'Jam',
  };

  clear = () => {
    this.setState({ selectedProduct: '' });
  };

  handleButtonClick = (newProduct: string) => {
    this.setState({ selectedProduct: newProduct });
  };

  render() {
    const { selectedProduct } = this.state;

    return (
      <main className="section container">
        {
          selectedProduct
            ? (
              <h1 className="title is-flex is-align-items-center">
                {`${selectedProduct} is selected`}
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={this.clear}
                />
              </h1>
            )
            : (
              <h1 className="title">
                No goods selected
              </h1>
            )
        }
        <table className="table">
          <tbody>
            {goods.map(product => {
              const isSelected = product === selectedProduct;

              return (
                <tr
                  key={product}
                  data-cy="Good"
                  className={classNames(
                    { 'has-background-success-light': (isSelected) },
                  )}
                >
                  <td>
                    {
                      isSelected
                        ? (
                          <button
                            data-cy="RemoveButton"
                            type="button"
                            className="button is-info"
                            onClick={this.clear}
                          >
                            -
                          </button>
                        )
                        : (
                          <button
                            data-cy="AddButton"
                            type="button"
                            className="button"
                            onClick={() => (
                              this.handleButtonClick(product)
                            )}
                          >
                            +
                          </button>
                        )
                    }
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
    );
  }
}
