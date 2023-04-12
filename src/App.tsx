import React, { useState } from 'react';
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

type Product = string | null;

export const App: React.FC = () => {
  const [product, setProduct] = useState<Product>('Jam');

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
            onClick={() => setProduct(null)}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(productName => (
            <tr
              key={uuidv4()}
              data-cy="Good"
              className={productName === product
                ? 'has-background-success-light'
                : ''}
            >
              <td>
                <button
                  data-cy={productName === product
                    ? 'RemoveButton'
                    : 'AddButton'}
                  type="button"
                  className={productName === product
                    ? 'button is-info'
                    : 'button'}
                  onClick={() => setProduct(productName === product
                    ? null
                    : productName)}
                >
                  {productName === product ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {productName}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
