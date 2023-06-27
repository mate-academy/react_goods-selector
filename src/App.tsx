/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';

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
  const message = selectedGood.length > 0 ? `${selectedGood} is selected`
    : 'No goods selected';

  return (
    <main className="section container">
      <h1 className={cn('title', {
        'title is-flex is-align-items-center': selectedGood.length > 0,
      })}
      >
        {message}

        {selectedGood.length > 0 && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setSelectedGood('');
            }}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isSelected = selectedGood === good;

            return (
              <tr
                data-cy="Good"
                className={cn('', {
                  'has-background-success-light': isSelected,
                })}
              >
                <td>
                  <button
                    data-cy={`${isSelected ? 'RemoveButton' : 'AddButton'}`}
                    type="button"
                    className={cn('button', {
                      ' is-info': isSelected,
                    })}
                    onClick={
                      isSelected
                        ? () => setSelectedGood('')
                        : () => setSelectedGood(good)
                    }
                  >
                    {isSelected ? '-' : '+'}
                  </button>
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
