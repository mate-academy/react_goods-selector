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
  state: Readonly<State> = {
    selectedProduct: 'Jam',
  };

  handleProductSelection = (product: string) => {
    this.setState({ selectedProduct: product });
  };

  handleProductRemoving = () => {
    this.setState({ selectedProduct: '' });
  };

  isSelected = (product: string) => {
    return this.state.selectedProduct === product;
  };

  render() {
    const { selectedProduct } = this.state;

    return (
      <main className="section container">
        {
          !selectedProduct
            ? (
              <h1 className="title">No goods selected</h1>
            )
            : (
              <h1 className="title is-flex is-align-items-center">
                { `${selectedProduct} is selected` }

                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={this.handleProductRemoving}
                />
              </h1>
            )
        }

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                data-cy="Good"
                className={classNames({
                  'has-background-success-light': good === selectedProduct,
                })}
              >
                <td>
                  {this.isSelected(good)
                    ? (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={this.handleProductRemoving}
                      >
                        -
                      </button>
                    )
                    : (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => this.handleProductSelection(good)}
                      >
                        +
                      </button>
                    )}
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}
