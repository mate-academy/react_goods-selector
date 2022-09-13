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

  const addGood = (good: Good) => {
    setSelectedGood(good);
  };

  const removeGood = () => {
    setSelectedGood('');
  };

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
            onClick={removeGood}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isSelected = selectedGood === good;

            return (
              <tr
                data-cy="Good"
                key={good}
                className={classNames(
                  {
                    'has-background-success-light': isSelected,
                    'has-background-success': !isSelected,
                  },
                )}
              >
                <td>
                  {isSelected ? (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      onClick={removeGood}
                      className="button is-info"
                    >
                      -
                    </button>
                  ) : (
                    <button
                      data-cy="AddButton"
                      type="button"
                      onClick={() => addGood(good)}
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
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
