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
  const [state, setState] = useState<string | null>('Jam');

  const resetState = () => {
    setState(null);
  };

  return (
    <main className="section container">
      {!state
        && (
          <h1 className="title">
            No goods selected
          </h1>
        )}

      {state
        && (
          <h1 className="title is-flex is-align-items-center">
            {`${state} is selected`}

            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={resetState}
            />
          </h1>
        )}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              key={good}
              className={good === state
                ? 'has-background-success-light'
                : ''}
            >
              {state !== good
                ? (
                  <td>
                    <button
                      value={good}
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => setState(good)}
                    >
                      +
                    </button>
                  </td>
                )
                : (
                  <td>
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={resetState}
                    >
                      -
                    </button>
                  </td>
                )}

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
