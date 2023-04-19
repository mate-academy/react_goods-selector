import React, { useState } from 'react';
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

type Product = string | null;

export const App: React.FC = () => {
  const [product, setProduct] = useState<Product>('Jam');

  const handleClear = () => {
    setProduct(null);
  };

  const handleSelectedProduct = (
    productName: string,
    selectedProduct: boolean,
  ) => {
    setProduct(selectedProduct
      ? null
      : productName);
  };

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
                onClick={handleClear}
              />
            )}
          </h1>
        )
        : <h1 className="title">No goods selected</h1> }

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
                    onClick={() => handleSelectedProduct(
                      productName,
                      selectedProduct,
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
};
