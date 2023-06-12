import React from 'react';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import './App.scss';

export const products = [
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
  selectedProduct: string | null,
}

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedProduct: 'Jam',
  };

  handleSelectProduct = (product: string) => {
    this.setState({
      selectedProduct: product,
    });
  };

  handleRemoveProduct = () => {
    this.setState({
      selectedProduct: '',
    });
  };

  render() {
    const { selectedProduct } = this.state;

    return (
      <main className="section container">
        <h1 className="title">
          {selectedProduct
            ? `${selectedProduct} is selected`
            : 'No goods selected'}

          {selectedProduct && (
          /* eslint-disable-next-line jsx-a11y/control-has-associated-label */
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.handleRemoveProduct}
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {products.map(product => {
              const isSelected = product === selectedProduct;

              return (
                <tr
                  data-cy="Good"
                  key={product}
                  className={classNames(
                    {
                      'has-background-success-light': isSelected,
                    },
                  )}
                >
                  <td>
                    {isSelected
                      ? (
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          onClick={this.handleRemoveProduct}
                          className="button is-info"
                        >
                          -
                        </button>
                      ) : (
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          onClick={() => this.handleSelectProduct(product)}
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
    );
  }
}
