import { useState } from 'react';
import cn from 'classnames';

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

export const App = () => {
  const [state, setState] = useState(`Jam`);

  return (
    <main className="section container">
      { state === ''
        ? (
          <h1 className="title is-flex is-align-items-center">
            No goods selected
          </h1>
        ) : (
          <h1 className="title is-flex is-align-items-center">
            {`${state} is selected`}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => setState('')
              }
            />
          </h1>
        )}

      <table className="table">
        <tbody>
          {goods.map(goodItem => (
            <tr
              data-cy="Good"
              className={cn('Good', {
                'has-background-success-light': state === goodItem,
              })}
              key={goodItem}
            >
              <td>
                <button
                  data-cy={state === goodItem ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={cn(
                    'button', {
                      'is-info': state === goodItem,
                    },
                  )}
                  onClick={() => {
                    if (state !== goodItem) {
                      setState(goodItem);
                    } else {
                      setState('');
                    }
                  }}
                >
                  {state === goodItem ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {goodItem}
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </main>
  );
};
