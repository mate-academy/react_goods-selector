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
  const [selectedGood, setselectedGood] = useState('Jam');

  function clearSelection() {
    setselectedGood('');
  }

  return (
    <main className="section container">
      {selectedGood ? (
        <h1 className="title is-flex is-align-items-center">
          {`${selectedGood} is selected`}

          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            onClick={clearSelection}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        </h1>
      ) : (
        <h1 className="title">No goods selected</h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isSelected = (good === selectedGood);

            function changeSelectedGood() {
              if (!isSelected) {
                setselectedGood(good);
              } else {
                setselectedGood('');
              }
            }

            return (
              <tr
                key={good}
                data-cy="Good"
                className={cn('', {
                  'has-background-success-light': isSelected,
                })}
              >
                <td>
                  <button
                    onClick={(changeSelectedGood)}
                    data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={cn('button', {
                      'is-info': isSelected,
                    })}
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
