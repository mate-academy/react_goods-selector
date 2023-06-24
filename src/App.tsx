import { Component } from 'react';
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
  selectedProduct: string;
};

export class App extends Component<{}, State> {
  state = {
    selectedProduct: 'Jam',
  };

  render() {
    const { selectedProduct } = this.state;

    return (
      <main className="section container">

        {selectedProduct.length > 0 ? (
          <h1 className="title is-flex is-align-items-center">
            {`${selectedProduct} is selected`}
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => {
                this.setState({ selectedProduct: '' });
              }}
            />
          </h1>
        ) : (
          <h1 className="title">No goods selected</h1>
        )}

        <table className="table">
          <tbody>

            {goods.map(product => (
              product === selectedProduct ? (
                <tr
                  data-cy="Good"
                  className="has-background-success-light"
                  key={product}
                >
                  <td>
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={() => {
                        this.setState({ selectedProduct: '' });
                      }}
                    >
                      -
                    </button>
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {product}
                  </td>
                </tr>
              ) : (
                <tr data-cy="Good" key={product}>
                  <td>
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => {
                        this.setState({ selectedProduct: product });
                      }}
                    >
                      +
                    </button>
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {product}
                  </td>
                </tr>
              )
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}
