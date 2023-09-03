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

  function Selection() {
    setSelectedGood('');
  }

  return (
    <main className="section container">
      {selectedGood ? (
        <h1 className="title is-flex is-align-items-center">
          {`${selectedGood} is selected`}

          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            onClick={Selection}
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
          {goods.map((good) => {
            const isSelected = selectedGood === good;

            return (
              <tr
                data-cy="Good"
                key={good}
                className={isSelected
                  ? 'has-background-success-light'
                  : ''}
              >
                <td>
                  <button
                    onClick={
                      isSelected
                        ? () => setSelectedGood('')
                        : () => setSelectedGood(good)
                    }
                    data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={isSelected
                      ? 'button is-info'
                      : 'button'}
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
