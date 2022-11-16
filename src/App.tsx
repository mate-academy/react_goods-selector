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
    const goodsSelectedMessage = this.state.selectedProduct
      ? `${this.state.selectedProduct} is selected`
      : 'No goods selected';

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {goodsSelectedMessage}
          {
            this.state.selectedProduct && (
              <button
                data-cy="ClearButton"
                aria-label="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => {
                  this.setState({ selectedProduct: '' });
                }}
              />
            )
          }
        </h1>

        <table className="table">
          <tbody>
            {
              goods.map(product => {
                const goodsData = this.state.selectedProduct !== product
                  ? 'AddButton'
                  : 'RemoveButton';

                const clickEvent = this.state.selectedProduct !== product
                  ? () => {
                    this.setState({ selectedProduct: product });
                  }
                  : () => {
                    this.setState({ selectedProduct: '' });
                  };

                const buttonContent = this.state.selectedProduct !== product
                  ? '+'
                  : '-';

                return (
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
                      <button
                        data-cy={goodsData}
                        type="button"
                        className={
                          classNames(
                            'button',
                            {
                              'is-info':
                                this.state.selectedProduct === product,
                            },
                          )
                        }
                        onClick={clickEvent}
                      >
                        {buttonContent}
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
