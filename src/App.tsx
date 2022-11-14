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
  selectedProduct: string,
};

export class App extends React.Component<{}, State> {
  state = {
    selectedProduct: 'Jam',
  };

  render() {
    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {
            this.state.selectedProduct
              ? `${this.state.selectedProduct} is selected`
              : 'No goods selected'
          }

          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          {
            this.state.selectedProduct && (
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => {
                  this.setState({ selectedProduct: '' });
                }}
              >
                {}
              </button>
            )
          }
        </h1>

        <table className="table">
          <tbody>
            {
              goods.map(product => (
                <tr
                  data-cy="Good"
                  className={
                    classNames({
                      'has-background-success-light':
                      this.state.selectedProduct === product,
                    })
                  }
                >
                  <td>
                    {
                      this.state.selectedProduct !== product
                        ? (
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
                        )
                        : (
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
                        )
                    }

                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {product}
                  </td>
                </tr>
              ))
            }

          </tbody>
        </table>
      </main>
    );
  }
}

(
  <main className="section container">
    <h1 className="title">No goods selected</h1>

    <h1 className="title is-flex is-align-items-center">
      Jam is selected

      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button
        data-cy="ClearButton"
        type="button"
        className="delete ml-3"
      />
    </h1>

    <table className="table">
      <tbody>
        <tr data-cy="Good">
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
            Dumplings
          </td>
        </tr>

        <tr data-cy="Good" className="has-background-success-light">
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
        </tr>
      </tbody>
    </table>
  </main>
);
