import React, { useState } from 'react';
import classNames from 'classnames';
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

type Good = string;

export const App: React.FC = () => {
  const [selectedGood, setSelectedGood] = useState<Good>('Jam');

  return (
    <main className="section container">
      {!selectedGood ? (
        <h1 className="title has-text-info">No goods selected</h1>
      ) : (
        <h1 className="title is-flex is-align-items-center has-text-light">
          {`${selectedGood} is selected`}

          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            data-cy="ClearButton"
            type="button"
            className="delete is-medium ml-3"
            onClick={() => setSelectedGood('')}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              key={good}
              className={classNames(
                {
                  'has-background-success-light': selectedGood === good,
                  'has-background-success': selectedGood !== good,
                },
              )}
            >
              <td>
                {selectedGood === good ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    onClick={() => setSelectedGood('')}
                    className="button is-info"
                  >
                    -
                  </button>
                ) : (
                  <button
                    data-cy="AddButton"
                    type="button"
                    onClick={() => setSelectedGood(good)}
                    className="button"
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
