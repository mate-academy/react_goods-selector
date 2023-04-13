import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
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

  render() {
    const { product } = this.state;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {product ? `${product} is selected` : 'No goods selected'}

          {product && (
            // eslint-disable-next-line jsx-a11y/control-has-associated-label
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => this.setState({ product: null })}
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(productName => {
              const selectedProduct = productName === product;

              return (
                <tr
                  key={uuidv4()}
                  data-cy="Good"
                  className={selectedProduct
                    ? 'has-background-success-light'
                    : ''}
                >
                  <td>
                    <button
                      data-cy={selectedProduct
                        ? 'RemoveButton'
                        : 'AddButton'}
                      type="button"
                      className={selectedProduct
                        ? 'button is-info'
                        : 'button'}
                      onClick={() => {
                        this.setState({
                          product: selectedProduct
                            ? null
                            : productName,
                        });
                      }}
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
