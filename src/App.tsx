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
  const [state, setState] = useState('Jam');

  const butn = (
    <button
      data-cy="ClearButton"
      type="button"
      className="delete ml-3"
      aria-label="Save"
      onClick={() => setState('No goods')}
    />
  );

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {state}

        {' is selected'}

        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        {
          state !== 'No goods' ? butn : undefined
        }
      </h1>
      <table className="table">
        <tbody>
          {
            goods.map(item => (
              <tr
                data-cy="Good"
                key={item}
                className={item === state
                  ? 'has-background-success-light' : undefined}
              >
                <td>
                  <button
                    data-cy="AddButton"
                    type="button"
                    className={item === state ? 'button is-info' : 'button'}
                    onClick={() => {
                      setState(item);
                    }}
                  >
                    {item === state ? '-' : '+'}
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
