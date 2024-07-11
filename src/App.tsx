import React, { useState } from 'react';
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

export const App: React.FC = () => {
  const [choosenProduct, setChoosenProduct] = useState<string>(`Jam`);

  const onClickDeselect = () => {
    setChoosenProduct('');
  };

  return (
    <main className="section container">
      {choosenProduct.length ? (
        <h1 className="title is-flex is-align-items-center">
          {choosenProduct} is selected
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={onClickDeselect}
          />
        </h1>
      ) : (
        <h1 className="title">No goods selected</h1>
      )}

      <table className="table">
        <tbody>
          {goods.map((good, i) => {
            const isGoodChoosed = choosenProduct === good;
            const onClickSelectProduct = () => {
              setChoosenProduct(good);
            };

            return (
              <tr
                data-cy="Good"
                key={i}
                className={isGoodChoosed ? 'has-background-success-light' : ''}
              >
                <td>
                  {isGoodChoosed ? (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={onClickDeselect}
                    >
                      -
                    </button>
                  ) : (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={onClickSelectProduct}
                    >
                      +
                    </button>
                  )}
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
