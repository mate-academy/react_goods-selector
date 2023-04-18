import { Component } from 'react';
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
  product: string | null
}
export class App extends Component<{}, State> {
  state: Readonly<State> = {
    product: 'Jam',
  };

  handleClear = () => {
    this.setState({ product: null });
  };

  handleSelectedProduct = (selectedProduct:boolean, productName:string) => {
    this.setState({
      product: selectedProduct
        ? null
        : productName,
    });
  };

  render() {
    const { product } = this.state;

    return (
      <main className="section container">
        {product
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${product} is selected`}

              {(
                // eslint-disable-next-line jsx-a11y/control-has-associated-label
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={this.handleClear}
                />
              )}
            </h1>
          )
          : <h1 className="title">No goods selected</h1>}

        <table className="table">
          <tbody>
            {goods.map(productName => {
              const selectedProduct = productName === product;

              return (
                <tr
                  key={productName}
                  data-cy="Good"
                  className={classNames({
                    'has-background-success-light': selectedProduct,
                  })}
                >
                  <td>
                    <button
                      data-cy={selectedProduct
                        ? 'RemoveButton'
                        : 'AddButton'}
                      type="button"
                      className={classNames('button', {
                        'button is-info': selectedProduct,
                      })}
                      onClick={() => (
                        this.handleSelectedProduct(selectedProduct, productName)
                      )}
                    >
                      {selectedProduct ? '-' : '+'}
                    </button>
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {productName}
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
