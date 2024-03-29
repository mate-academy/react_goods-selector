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
  const [selectedGood, setSelectedGood] = useState('Jam');

  const selectGood = (good: string) => {
    setSelectedGood(good);
  };

  const clearSelection = () => {
    setSelectedGood('');
  };

  return (
    <main className="section container">
      <h1 className="title">
        {selectedGood ? `${selectedGood} is selected` : `No goods selected`}
      </h1>
      <h1 className="title is-flex is-align-items-center">
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={clearSelection}
          ></button>
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isSelected = selectedGood === good;

            return (
              <tr
                data-cy="Good"
                key={good}
                className={isSelected ? 'has-background-success-light' : ''}
              >
                <td>
                  {!isSelected && (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => selectGood(good)}
                    >
                      +
                    </button>
                  )}
                  {isSelected && (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={() => clearSelection}
                    >
                      -
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
