import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
// import { keyBy } from 'cypress/types/lodash';

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
  const [selectGoods, setSelectGoods] = useState<string>('Jam');

  return (
    <main className="section container">
      {selectGoods ? (
        <h1 className="title is-flex is-align-items-center">
          {`${selectGoods} is selected`}

          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectGoods('')}
            title="Clear the selected goods"
          >
            Clear
          </button>

        </h1>
      ) : (
        <h1 className="title">No goods selected</h1>
      )}

      <table className="table">
        <tbody>
          {goods.map((good) => (
            <tr
              data-cy="Good"
              className={good === selectGoods
                ? 'has-background-success-light'
                : ''}
            >
              <td>
                {good === selectGoods ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={() => setSelectGoods('')}
                  >
                    -
                  </button>
                ) : (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => setSelectGoods(good)}
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
};
