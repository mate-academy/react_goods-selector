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

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  const clearComponent = () => {
    setSelectedGood('');
  };

  const addButton = (good) => {
    setSelectedGood(good);
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood
          ? `${selectedGood} is selected`
          : 'No goods selected'}

        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={clearComponent}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const selected = good === selectedGood;

            return (
              <tr
                data-cy="Good"
                key={good}
                className={
                  selected
                    ? 'has-background-success-light'
                    : ''
                }
              >
                <td>
                  <button
                    data-cy={
                      `${selected
                        ? 'RemoveButton'
                        : 'AddButton'}`
                    }
                    type="button"
                    className={
                      `button ${selected
                        ? 'is-info'
                        : ''}`
                    }
                    onClick={
                      selected
                        ? clearComponent
                        : () => addButton(good)
                    }
                  >
                    {`${selected
                      ? '-'
                      : '+'}`
                    }
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
