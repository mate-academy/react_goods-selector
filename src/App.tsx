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
  const [good, setGoods] = useState('Jam');

  const Btn = () => {
    if (good !== '') {
      return (
        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          aria-label="Save"
          onClick={() => setGoods('')}
        />
      );
    }

    return null;
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        { good !== '' ? `${good} is selected!` : 'No goods selected.'}
        <Btn />
      </h1>

      <table className="table">
        <tbody>
          {
            goods.map(item => (
              <tr
                data-cy="Good"
                key={item}
                className={item === good
                  ? 'has-background-success-light' : undefined}
              >
                <td>
                  <button
                    data-cy="AddButton"
                    type="button"
                    className={item === good ? 'button is-info' : 'button'}
                    onClick={() => {
                      setGoods(item);
                    }}
                  >
                    {item === good ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {item}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </main>
  );
};
